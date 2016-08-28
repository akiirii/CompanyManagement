(function () {
    'use strict';

    angular
        .module('cm')
        .controller('departmentController', departmentController);


    function departmentController($scope, $q, $state, $stateParams, Department, $mdToast) {
        var vm = this;
        vm.info = Department

        $q.all({
          department: vm.info.get($stateParams.departmentId),
          members: vm.info.getMembers($stateParams.departmentId)
        }).then(function(data){
          $scope.members = data.members.plain();
          $scope.department = data.department.plain();
          $scope.loaded = true;
        });

        $scope.new = {
          skills: {}
        }

        $scope.seeMemberDetails = function(id){
          $state.go('member', {
            departmentId: $stateParams.departmentId,
            memberId: id
          });
        }

        $scope.showMsg = function(text) {
          $mdToast.show($mdToast.simple().textContent(text).hideDelay(3000));
        };

        $scope.addMember = function(){
          vm.info.addMember($stateParams.departmentId, $scope.new).then(function(success){
            $scope.showMsg(success.status)
          }, function(error){
            $scope.showMsg(error.status)
          });
        }
    }
})();

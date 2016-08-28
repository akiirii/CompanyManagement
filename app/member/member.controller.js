
(function () {
    'use strict';

    angular
        .module('cm')
        .controller('memberController', memberController);


    function memberController($scope, $stateParams, Member, $mdToast, $q) {
        var vm = this;
        vm.info = Member
        $scope.deletedSkils = {};
        $scope.addedSkills = {};

        vm.info.get($stateParams.departmentId, $stateParams.memberId).then(function(data){
          $scope.member = data.plain();
          $scope.loaded = true;

          $scope.skills = angular.copy($scope.member.skills);
        });

        $scope.undo = function(){
          $scope.skills = angular.copy($scope.member.skills);
        }

        $scope.save = function(){
          var requests = [];
          if($scope.deletedSkils){
            requests.push(vm.info.remove($stateParams.departmentId, $stateParams.memberId, $scope.deletedSkils))
          }
          if($scope.addedSkills){
            requests.push(vm.info.add($stateParams.departmentId, $stateParams.memberId, $scope.addedSkills))
          }

          var tmpskills = angular.copy($scope.skills);
          _.map($scope.addedSkills, function(name){ delete tmpskills[name] })

          if(tmpskills){
            requests.push(vm.info.remove($stateParams.departmentId, $stateParams.memberId, tmpskills))
          }

          $q.all(requests).then(function(success){
            $scope.showMsg("Success")
          }, function(error){
            $scope.showMsg("Error")
          });
        }

        $scope.showMsg = function(text) {
          $mdToast.show($mdToast.simple().textContent(text).hideDelay(3000));
        };

        $scope.remove = function(name, skill){
          delete $scope.skills[name];
          $scope.deletedSkils[name] = skill;
        }


    }
})();

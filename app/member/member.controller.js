
(function () {
    'use strict';

    angular
        .module('cm')
        .controller('memberController', memberController);


    function memberController($scope, $stateParams, Member) {
        var vm = this;
        vm.info = Member

        vm.info.get($stateParams.departmentId, $stateParams.memberId).then(function(data){
          $scope.member = data.plain();
          $scope.loaded = true;

          $scope.skills = angular.copy($scope.member.skills);
        });

        $scope.undo = function(){
          $scope.skills = angular.copy($scope.member.skills);
        }

        $scope.save = function(){
          $scope.member.skills = angular.copy($scope.skills);
          vm.info.save($stateParams.departmentId, $stateParams.memberId, $scope.member.skills).then(function(success){
            $scope.msg = success.status
          }, function(error){
            $scope.msg = error.status
          });
        }

        $scope.add = function(name, skill){
          if(name && skill){
            vm.info.save($stateParams.departmentId, $stateParams.memberId, $scope.member.skills).then(function(success){
              $scope.member.skills[name] = skill;
              $scope.skills[name] = skill;
              $scope.name = '',
              $scope.skill = undefined;
            }, function(error){
              $scope.msg = error.status
            });
          }
        }

        $scope.remove = function(name, skill){
          vm.info.save($stateParams.departmentId, $stateParams.memberId, $scope.skills[name]).then(function(success){
            delete $scope.skills[name];
            delete $scope.member.skills[name];
            $scope.msg = success.status
          }, function(error){
            $scope.msg = error.status
          });
        }


    }
})();

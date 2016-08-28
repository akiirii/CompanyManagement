
(function () {
    'use strict';

    angular
        .module('cm')
        .directive('addSkills', addSkills);


    function addSkills() {
        return {
          templateUrl: "/addSkills/addSkills.html",
          scope: {
            skills: "="
          },
          controller: ['$scope', function addSkillsController($scope) {

            $scope.add = function(name, skill){
              console.log(name, skill)
              if(name && skill){
                // vm.info.save($stateParams.departmentId, $stateParams.memberId, $scope.member.skills).then(function(success){
                //   $scope.member.skills[name] = skill;
                //   $scope.skills[name] = skill;
                //   $scope.name = '',
                //   $scope.skill = undefined;
                // }, function(error){
                //   $scope.msg = error.status
                // });

                $scope.skills[name] = skill;
              }
            }
          }],
        }


    }
})();


(function () {
    'use strict';

    angular
        .module('cm')
        .directive('addSkills', addSkills);


    function addSkills() {
        return {
          templateUrl: "/addSkills/addSkills.html",
          scope: {
            skills: "=",
            addedSkills: "=?"
          },
          controller: ['$scope', function addSkillsController($scope) {
            $scope.add = function(name, skill){
              if(name && skill){
                $scope.skills[name] = skill;
                $scope.addedSkills[name] = skill;
              }
            }
          }],
        }


    }
})();

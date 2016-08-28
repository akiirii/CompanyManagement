
(function () {
    'use strict';

    angular
        .module("cm")
        .factory("Member", Member);

    /*@ngInject*/
    function Member(Restangular) {
        return {
          get: function(departmentId, memberId){
            return Restangular.one("company").all("departments/" + departmentId + "/members").get(memberId);
          },
          save: function(departmentId, memberId, skill){
            return Restangular.all("company").one('departments', departmentId).one('members', memberId).one('skills', skill).put();
          },
          add: function(departmentId, memberId, skills){
            return Restangular.all("company").one('departments', departmentId).one('members', memberId).one('skills').post("", skills);
          },
          remove: function(departmentId, memberId, skill){
            return Restangular.all("company").one('departments', departmentId).one('members', memberId).one('skills').remove();
          },
        };
    }
})();

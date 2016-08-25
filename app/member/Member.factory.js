
(function () {
    'use strict';

    angular
        .module("cm")
        .factory("Member", Member);

    /*@ngInject*/
    function Member(Restangular) {
        return {
          get(departmentId, memberId){
            return Restangular.one("company").all("departments/" + departmentId + "/members").get(memberId);
          },
          save(departmentId, memberId, skill){
            var route = "departments/" + departmentId + "/members/" + memberId + "/skills";
            return Restangular.all("company").one(route).put("", skill);
          },
          add(departmentId, memberId, skill){
            var route = "departments/" + departmentId + "/members/" + memberId + "/skills";
            return Restangular.all("company").one(route).post("", skill);
          },
          remove(departmentId, memberId, skill){
            var route = "departments/" + departmentId + "/members/" + memberId + "/skills";
            return Restangular.all("company").one(route).remove("", skill);
          },
        };
    }
})();

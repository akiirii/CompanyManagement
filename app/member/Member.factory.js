
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
          save(departmentId, memberId, skills){
            var route = "departments/" + departmentId + "/members/" + memberId + "/skills";
            return Restangular.all("company").one(route).put("", skills);
          },
          add(departmentId, memberId, skills){
            var route = "departments/" + departmentId + "/members/" + memberId + "/skills";
            return Restangular.all("company").one(route).post("", skills);
          },
          remove(departmentId, memberId, skills){
            var route = "departments/" + departmentId + "/members/" + memberId + "/skills";
            return Restangular.all("company").one(route).remove("", skills);
          },
        };
    }
})();

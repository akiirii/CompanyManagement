
(function () {
    'use strict';

    angular
        .module("cm")
        .factory("Department", Department);

    /*@ngInject*/
    function Department(Restangular) {
        return {
          get(id){
            return Restangular.one("company").all("departments").get(id);
          },
          getMembers(id){
            return Restangular.one("company").all("departments/" + id).get("members");
          },
          addMember(id, member){
            return Restangular.all("company").one("departments/" + id + "/members").post("", member);
          },
        };
    }
})();

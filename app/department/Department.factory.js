
(function () {
    'use strict';

    angular
        .module("cm")
        .factory("Department", Department);

    /*@ngInject*/
    function Department(Restangular) {
        return {
          get: function(id){
            return Restangular.one("company").all("departments").get(id);
          },
          getMembers: function(id){
            return Restangular.all("company").one("departments", id).one("members").get();
          },
          addMember: function(id, member){
            return Restangular.all("company").one("departments", id).one("/members").post("", member);
          },
        };
    }
})();

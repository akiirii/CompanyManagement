/**
 * Created by:  Dinca Roberto
 * On:          21/05/2016
 * For project: companyManagement
 * Description: Small test to make sure the api call works
 */

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
        };
    }
})();

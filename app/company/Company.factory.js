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
        .factory("Company", Company);

    /*@ngInject*/
    function Company(Restangular) {
        return {
          getCompany: function(){
            return Restangular.one("company").get("");
          },
          getDepartments: function(){
            return Restangular.one("company").all("departments").get("");
          },
          getDepartment: function(id){
            return Restangular.one("company").all("departments").get(id);
          },
        };
    }
})();

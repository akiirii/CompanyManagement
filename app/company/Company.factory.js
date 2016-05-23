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

        //get information about the department with id 2
        Restangular.one("company").all("departments").get(2).then(function(data){
            console.log(data.plain())
        });

        return {

        };
    }
})();

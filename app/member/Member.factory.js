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
        .factory("Member", Member);

    /*@ngInject*/
    function Member(Restangular) {
        return {
          get(departmentId, memberId){
            return Restangular.one("company").all("departments/" + departmentId + "/members").get(memberId);
          },
        };
    }
})();

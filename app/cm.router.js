/**
 * Created by:  Dinca Roberto
 * On:          21/05/2016
 * For project: companyManagement
 * Description: has one state just to check if the ui.router is working
 */

(function () {
    'use strict';
    angular
        .module("cm")
        .config(config);


    function config($stateProvider) {
        $stateProvider
            .state('company', {
                url: "",
                templateUrl: "/company/company.view.html",
            })
            .state('department', {
                url: "/departments/:departmentId",
                templateUrl: "/department/department.view.html"
            })
            .state('member', {
                url: "/departments/:departmentId/member/:memberId",
                templateUrl: "/member/member.view.html"
            })
    }

})();

/**
 * Created by:  Dinca Roberto
 * On:          21/05/2016
 * For project: companyManagement
 * Description: configures the Restangular service
 */

(function () {
    'use strict';
    angular
        .module("cm")
        .config(config);


    function config(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://private-ec80e4-companymanagement.apiary-mock.com');
    }

})();

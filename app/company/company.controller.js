/**
 * Created by:  Dinca Roberto
 * On:          21/05/2016
 * For project: companyManagement
 * Description:
 */

(function () {
    'use strict';

    angular
        .module('cm')
        .controller('companyController', companyController);


    function companyController(Company) {
        var vm = this;
        
        vm.info = Company
    }
})();

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


    function companyController($scope, $q, $state, Company) {
        var vm = this;
        vm.info = Company

        $q.all({
          company: vm.info.getCompany(),
          departments: vm.info.getDepartments()
        }).then(function(data){
          $scope.company = data.company.plain();
          $scope.departments = data.departments.plain();
          $scope.loaded = true;
        });

        $scope.seeDepartmentDetails = function(id){
          $state.go('department', {
            departmentId: id
          });
        }
    }
})();

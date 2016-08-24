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
        .controller('memberController', memberController);


    function memberController($scope, $stateParams, Member) {
        var vm = this;
        vm.info = Member

        vm.info.get($stateParams.departmentId, $stateParams.memberId).then(function(data){
          $scope.member = data.plain();
          $scope.loaded = true;
        });


    }
})();

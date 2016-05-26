/**
 * Created by:  Dinca Roberto
 * On:          21/05/2016
 * For project: companyManagement
 * Description: test example
 */

describe('Company Management Test', function () {

    beforeEach(module('cm', function () {
       
    }));

    var ctrl, companyService;

    beforeEach(inject(function ($controller, _Company_) {

        companyService = _Company_;

        ctrl = $controller('companyController', {
            "Company": _Company_
        });

    }));

    afterEach(function () {

    });

    it('should have a controller', function () {
        expect(ctrl).toBeDefined();
    });

    it('should have info inside of the controller', function () {
        expect(ctrl.info).toBeDefined();
    });

    it('should have info equal to the service', function () {
        expect(ctrl.info).toEqual(companyService);
    });

});


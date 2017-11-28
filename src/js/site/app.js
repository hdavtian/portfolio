
import appController    from '../angularjs-test/controller';
import solutions        from '../angularjs-test/solutions-directive';

const app = angular.module('app',[]);

app
    .controller('appCtrl', appController)
    .directive('solutions', solutions);

// DI
appController.$inject =['$scope'];

import appController    from './controller';
import solutions        from './solutions-directive';
import uiRouter         from 'angular-ui-router';
import appConfig        from './app-config';

const app = angular.module('app',[uiRouter]);

app
    .config(appConfig)
    .controller('appCtrl', appController)
    .directive('solutions', solutions);

// DI
appController.$inject =['$scope'];
appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
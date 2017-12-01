import uiRouter             from 'angular-ui-router';
import appController        from './controller';
import solutionsDirective   from './solutions-directive';
// import solutionsComponent   from './solutions-component';
import appConfig            from './app-config';
import productsService      from './products-service';

const app = angular.module('app',[uiRouter]);

app
    .service('productsService', productsService)
    .directive('solutions', solutionsDirective)
    // .component('solutionsComponent', solutionsComponent)
    .config(appConfig)
    .controller('appCtrl', appController);

// DI
//appController.$inject = ['$scope'];
//appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
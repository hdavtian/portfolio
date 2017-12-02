import uiRouter             from 'angular-ui-router';
import appController        from './controller';
import solutionsDirective   from './solutions-directive';
import solutionsListDirective   from './solutions-list-directive';
import modulesListDirective   from './modules-list-directive';
import appConfig            from './app-config';
import productsService      from './products-service';

const app = angular.module('app',[uiRouter]);

app
    .service('productsService', productsService)
    .directive('solutions', solutionsDirective)
    .directive('solutionsList', solutionsListDirective)
    .directive('modulesList', modulesListDirective)
    .config(appConfig)
    .controller('appCtrl', appController);

// DI
//appController.$inject = ['$scope'];
//appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
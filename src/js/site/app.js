import uiRouter                 from 'angular-ui-router';
import ngAnimate                from 'angular-animate';
import appController            from './controller';
import solutionsDirective       from './solutions-directive';
import solutionsListDirective   from './solutions-list-directive';
import solutionsCubicalHorizontal   from './solutions-cubical-horizontal';
import modulesListDirective     from './modules-list-directive';
import modulesCubicalHorizontal from './modules-cubical-horizontal';
import cube                     from './cube';
import appConfig                from './app-config';
import productsService          from './products-service';

const app = angular.module('app',[uiRouter, ngAnimate]);

app
    .service('productsService', productsService)
    .directive('solutions', solutionsDirective)
    .directive('solutionsList', solutionsListDirective)
    .directive('solutionsCubicalHorizontal', solutionsCubicalHorizontal)
    .directive('modulesList', modulesListDirective)
    .directive('modulesCubicalHorizontal', modulesCubicalHorizontal)
    .directive('cube', cube)
    .config(appConfig)
    .controller('appCtrl', appController);

// DI
//appController.$inject = ['$scope'];
//appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
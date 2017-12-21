import uiRouter                 from 'angular-ui-router';
import ngAnimate                from 'angular-animate';
import appController            from './controllers/app-ctrl';
import appConfig                from './app-config';
import products                 from './directives/products';
import product                  from './directives/product';
import modules                  from './directives/modules';
import module                   from './directives/module';
import dataService              from './services/data-service';
import people                   from './directives/people';
import peopleCarousel           from './directives/people-carousel';
import productsCarousel         from './directives/products-carousel';
import edit                     from './directives/edit';
import add                      from './directives/add';
import columnSorter             from './directives/column-sorter';

// 3rd party modules
import angularChart             from 'angular-chart.js';

/*
via bower

- Angular Chart
  http://jtblin.github.io/angular-chart.js/

- ngYoutubeEmbed
  https://www.npmjs.com/package/ng-youtube-embed

*/

const app = angular.module('app',[uiRouter, ngAnimate, angularChart, 'ngYoutubeEmbed', 'color.picker', 'rzModule']);

app
    .config(appConfig)
    .controller('appCtrl', appController)
    .service('dataService', dataService)
    .directive('products', products)
    .directive('product', product)
    .directive('modules', modules)
    .directive('module', module)
    .directive('people', people)
    .directive('peopleCarousel', peopleCarousel)
    .directive('productsCarousel', productsCarousel)
    .directive('edit', edit)
    .directive('add', add)
    .directive('columnSorter', columnSorter);

// DI
//appController.$inject = ['$scope'];
//appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
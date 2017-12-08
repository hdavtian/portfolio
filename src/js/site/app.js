import uiRouter                 from 'angular-ui-router';
import ngAnimate                from 'angular-animate';
import appController            from './controllers/app-controller';
import appConfig                from './app-config';
import product                  from './directives/product';
import productModule            from './directives/product-module';
import productsService          from './services/products-service';
import people                   from './directives/people';
import peopleCarousel           from './directives/people-carousel';

const app = angular.module('app',[uiRouter, ngAnimate]);

app
    .config(appConfig)
    .controller('appCtrl', appController)
    .service('productsService', productsService)
    .directive('productModule', productModule)
    .directive('product', product)
    .directive('people', people)
    .directive('peopleCarousel', peopleCarousel);

// DI
//appController.$inject = ['$scope'];
//appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
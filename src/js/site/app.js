import uiRouter                 from 'angular-ui-router';
import ngAnimate                from 'angular-animate';
import appController            from './controllers/app-controller';
import appConfig                from './app-config';
import product                  from './directives/product';
import productModule            from './directives/product-module';
import productsService          from './services/products-service';

const app = angular.module('app',[uiRouter, ngAnimate]);

app
    .config(appConfig)
    .controller('appCtrl', appController)
    .service('productsService', productsService)
    .directive('productModule', productModule)
    .directive('product', product);

// DI
//appController.$inject = ['$scope'];
//appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
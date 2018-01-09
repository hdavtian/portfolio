import uiRouter                 from 'angular-ui-router';
import ngAnimate                from 'angular-animate';
import ngSanitize               from 'angular-sanitize';
import appConfig                from './app-config';
import appCtrl                  from './app-ctrl';
import dataService              from './services/hd-data-service';
import hdNavbar                 from './hd-navbar/hd-navbar-directive';
import hdHeader                 from './hd-header/hd-header-directive';
import hdPortfolioBlock         from './hd-portfolio-block/hd-portfolio-block-directive';

// app --------------------------------------------------------------

const app = angular.module('app',[uiRouter, ngAnimate, ngSanitize]);

app
    .config(appConfig)
    .controller('appCtrl', ['$scope', appCtrl])
    .service('dataService', dataService)
    .directive('hdNavbar', hdNavbar)
    .directive('hdHeader', hdHeader)
    .directive('hdPortfolioBlock', hdPortfolioBlock);
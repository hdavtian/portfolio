import uiRouter                 from 'angular-ui-router';
import ngAnimate                from 'angular-animate';
import appConfig                from './app-config';

// app --------------------------------------------------------------

const app = angular.module('app',[uiRouter, ngAnimate]);

app
    .config(appConfig)
    .controller('appCtrl', ['$scope', function($scope){
        //code
    }]);

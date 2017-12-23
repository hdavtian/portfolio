import uiRouter                 from 'angular-ui-router';
import ngAnimate                from 'angular-animate';
import appConfig                from './app-config';
import testDirective            from './test-directive/test-directive';

// app --------------------------------------------------------------

const app = angular.module('app',[uiRouter, ngAnimate]);

app
    .config(appConfig)
    .controller('appCtrl', ['$scope', function($scope){
        //code
    }])
    .directive('testDirective', testDirective);

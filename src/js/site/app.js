import $ from 'jquery';
import angular from 'angular';

$('body').css('border','15px solid red');

console.log('hello there');

const app = angular.module('app',[]);
const appCtrl = function($scope){
    $scope.greeting = 'Hello World'
};

app.controller('appCtrl', appCtrl);
appCtrl.$inject =[ '$scope'];
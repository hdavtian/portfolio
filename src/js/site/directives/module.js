export default function(){
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/directives/module.html',
        scope: {
            module: '=',
            updateActiveColor: '&'
        }
    }
}
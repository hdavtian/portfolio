export default function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/cube.html',
        replace: true,
        scope: {
            product: '='
        }
    }
}
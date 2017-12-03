export default function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/cube.html',
        replace: true,
        scope: {
            product: '=',
            updateActiveColor: '&'
        },
        link: function($scope, $elem, $attrs){
            $elem.on('click', function(){
                $scope.updateActiveColor({'color':$scope.product.bgColor})
            })
        }
    }
}
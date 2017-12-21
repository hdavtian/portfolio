export default function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
            product: '=',
            updateActiveColor: '&'
        },
        templateUrl: 'views/directives/product.html',
        link: function($scope, $el, $attrs) {
            $el.on('click', function(){
                $scope.updateActiveColor({'color': $scope.product.bgColor});
            })
        }

    }
}
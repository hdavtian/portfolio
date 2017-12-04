export default function(){
    return {
        restrict: 'E',
        scope: {
            module: '=',
            all: '=',
            list: '=',
            activeColor: '='
        },
        replace: true,
        templateUrl: '/views/directives/product-module.html',
        controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs){
            // nothing for now
        }],
        link: function($scope, $elem, $attrs){
            $elem.on('click', function(){
                // this is hacky, need to follow more patterns
                //@todo refactor
                $scope.$root.module = $scope.module;
            })
        }

    }
}
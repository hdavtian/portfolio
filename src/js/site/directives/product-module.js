export default function(){
    return {
        restrict: 'E',
        scope: {
            all: '=',
            list: '=',
            activeColor: '='
        },
        templateUrl: '/views/directives/product-module.html',
        controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs){

            // turn `list` into an array
            let list = $scope.list.replace(/ /g,'');
                list = list.split(',');

            // create an array module objects
            let newList = [];
            for (let i=0, l=$scope.all.length; i<l; i++) {
                if (list.indexOf($scope.all[i].title_short) != -1) {
                    newList.push($scope.all[i])
                }
            };

            $scope.modules = newList;

            console.log('activeBgColor:', $scope.activeColor)

        }]

    }
}
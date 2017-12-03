export default function(){
    return {
        restrict: 'E',
        scope: {
            list: '=',
            all: '='
        },
        templateUrl: '/templates/directives/modules-cubical-horizontal.html',
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

        }]

    }
}
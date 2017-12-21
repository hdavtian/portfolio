export default function(){
    return {
        scope: {
          config: '=',
            data: '=',
            bindModules: '&'
        },
        templateUrl: 'views/directives/add.html',
        controller: ['$scope', '$state', function($scope, $state){

            $scope.options = {
                format: 'hexString'
            };

            $scope.colorObj = {
                color: ''
            };

            $scope.add = function(){

                let newValues = {};

                for (var i=0, l=$scope.config.fields.length; i<l; i++) {

                    if (!$scope.config.fields[i].customDirective){
                        newValues[$scope.config.fields[i].name] = $( '#' + $scope.config.name + '-' + $scope.config.fields[i].name ).val();
                    } else {
                        // for custom fields
                       if ($scope.config.fields[i].dataType == 'customColorPicker'){
                           newValues[$scope.config.fields[i].name] = $scope.colorObj.color;
                       }

                    }
                };

                $scope.data.push(newValues);
                $state.go('settings');
            };

            $scope.getNewId = function(){
                let idArray = [];

                if ($scope.data.length != 0) {
                    for (var i=0, l=$scope.data.length; i<l; i++) {
                        idArray.push($scope.data[i].id);
                    };
                    return Math.max.apply(Math, idArray) + 1;
                } else {
                    return 1
                }
            }
        }]
    }
}
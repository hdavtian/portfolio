export default function(){
    return {
        restrict: 'E',
        scope: {
            item: '=',
            data: '=',
            config: '=',
            bindModules: '&'
        },
        templateUrl: 'views/directives/edit.html',
        controller: ['$scope', '$stateParams', '$state', '$element', '$timeout', function($scope, $stateParams, $state, $element, $timeout){

            // Angular Color Picker Module
            // https://ruhley.github.io/angular-color-picker/
            $scope.options = {
                format: 'hexString'
            };

            $scope.colorObj = {
                color: $scope.item.bgColor
            };

            $scope.update = function(){

                let newValues = {};
                let $fieldEl;
                let fieldName;
                let fieldDataType;

                for (var i=0, l=$scope.config.fields.length; i<l; i++) {

                    $fieldEl = $( '#' + $scope.config.name + '-' + $scope.config.fields[i].name );
                    fieldName = $scope.config.fields[i].name;
                    fieldDataType = $scope.config.fields[i].dataType;

                    if ($scope.config.fields[i].editable) {

                        if (fieldDataType == 'array'){
                            var oldModules = $fieldEl.val().toString().replace('[','').replace(']','').replace(/\"/g,'').trim().split(',');
                            var newModules = [];
                            for (var n=0, m=oldModules.length; n<m; n++) {
                                newModules.push(oldModules[n]);
                            };
                            newValues[fieldName] = newModules;
                        } else if (fieldDataType == 'string') {
                            newValues[fieldName] = $fieldEl.val();
                        } else if (fieldDataType == 'customColorPicker') {
                            newValues[fieldName] = $scope.colorObj.color;
                        }
                    } else {
                        newValues[fieldName] = $scope.item[fieldName];
                    }

                    // alert(i + ' of ' + l + ':' + fieldName + ':' + fieldDataType + ":" + $fieldEl + ':' + $fieldEl.val());

                };

                for (var i=0, l=$scope.data.length; i<l; i++) {
                    if ($scope.data[i].id === $scope.item.id) {
                        $scope.data[i] = newValues;
                        break;
                    }
                };

                $scope.bindModules();

                $state.go('settings');

            };

            $scope.formatArrayData = function(){
                for (var i=0, l=$scope.config.fields.length; i<l; i++) {
                    if ($scope.config.fields[i].dataType == 'array') {
                        $( '#' + $scope.config.name + '-' + $scope.config.fields[i].name ).val(function(index, value){
                            return value.toString().replace('[','').replace(']','')
                        });
                    }
                };
            };

            $timeout(function(){
                $scope.formatArrayData();
            },0);

        }]
    }
}
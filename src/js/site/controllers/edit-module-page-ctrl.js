export default function($scope, $stateParams, $state){

    for (var i=0, l=$scope.modules.length; i<l; i++) {
        if ($stateParams.moduleId == $scope.modules[i].id) {
            $scope.module = $scope.modules[i];
            break;
        }
    }

}
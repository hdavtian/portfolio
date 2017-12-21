export default function($scope, $stateParams, $state){

    $scope.product = $scope.$parent.product;

    for (var i=0, l=$scope.product.moduleObjects.length; i<l; i++) {
        if ($stateParams.moduleName == $scope.product.moduleObjects[i].title_short){
            $scope.module = $scope.product.moduleObjects[i];
            break;
        }
    }

}
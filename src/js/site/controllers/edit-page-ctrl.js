export default function($scope, $stateParams){

    // get the selected product
    for (var i=0, l=$scope.products.length; i<l; i++){
        if ($stateParams.productId == $scope.products[i].id) {
            $scope.product = $scope.products[i];
            break;
        }
    }

}

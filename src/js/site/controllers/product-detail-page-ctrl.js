export default function($scope, $stateParams){

    // loop through products and choose the product with the given id
    for (var i=0, l=$scope.products.length; i<l; i++){
        if ($stateParams.productId == $scope.products[i].id){
            $scope.product = $scope.products[i];
            break;
        }
    }

}
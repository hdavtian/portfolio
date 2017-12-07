export default function($scope, $stateParams, $state){
    // loop through products and choose the product with the given id
    for (var i=0, l=$scope.products.length; i<l; i++){
        if ($stateParams.productId == $scope.products[i].id){
            $scope.product = $scope.products[i];
            break;
        }
    }

    // loop through products and json and create and return an array of module objects
    // to be available in the view so it can be passed to product-module directive as an
    // object
    let newList = [];
    for (let i=0, l=$scope.modules.length; i<l; i++) {
        if($scope.product.modules.indexOf($scope.modules[i].title_short) != -1){
            newList.push($scope.modules[i])
        }
    }
    $scope.modules = newList;
}
export default ['$scope', 'productsService', '$stateParams', '$state', function($scope, productsService){

    productsService.getData('products.json').then(function(response){
        $scope.products = response.data;
    });

    productsService.getData('modules.json').then(function(response){
        $scope.modules = response.data;
    });

    $scope.activeBgColor = "";

    $scope.setActiveBgColor = function(color){
        $scope.activeBgColor = color;
    }


}]
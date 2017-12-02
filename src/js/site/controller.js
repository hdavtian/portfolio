export default ['$scope', 'productsService', '$stateParams', '$state', function($scope, productsService){
    $scope.greeting = 'Hello Universe!';

    productsService.getData('products.json').then(function(response){
        $scope.products = response.data;
    })

    productsService.getData('modules.json').then(function(response){
        $scope.modules = response.data;
    })

}]
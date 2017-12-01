export default ['$scope', 'productsService', function($scope, productsService){
    $scope.greeting = 'Hello Universe!';

    productsService.getData().then(function(response){
        $scope.products = response.data;
    })
}]
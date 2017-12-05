export default ['$scope', 'productsService', '$stateParams', '$state', function($scope, productsService){

    productsService.getData('products.json').then(function(response){
        $scope.products = response.data;
    });

    productsService.getData('modules.json').then(function(response){
        $scope.modules = response.data;
    });

    productsService.getData('people.json').then(function(response){
        $scope.people = response.data;
    });

    $scope.activeBgColor = "";

    $scope.peopleSearchTerm = "";

    $scope.setActiveBgColor = function(color){
        $scope.activeBgColor = color;
    }


}]
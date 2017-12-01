export default ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("home");

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: './templates/home.html'
        })

        .state('products', {
            url: '/products',
            templateUrl: './templates/products.html',
            controller: ['$scope', function($scope){
                $scope.greeting = "Hello from products"
            }]
        })
        .state('products.product1', {
            url: '/product1',
            templateUrl: '/templates/products.product1.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: './templates/about.html'
        })

}]
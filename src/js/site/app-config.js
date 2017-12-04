export default ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("home");

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: './views/home.html'
        })

        .state('products', {
            url: '/products',
            templateUrl: './views/products.html',
            controller: ['$scope', function($scope){
                $scope.greeting = "Hello from products";
            }]
        })

        .state('products.product', {
            url: '/:productId',
            views: {
                'productUiView' : {
                    templateUrl: '/views/product-detail.html',
                    controller: ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {

                        // loop through products and choose the product with the given id
                        for (var i=0, l=$scope.products.length; i<l; i++){
                            if ($stateParams.productId == $scope.products[i].id){
                                $scope.product = $scope.products[i];
                                break;
                            }
                        }

                    }]
                }
            }
        })

        .state('products.product.module', {
            url: '/:moduleName',
            views: {
                'moduleUiView' : {
                    templateUrl: '/views/product-module-detail.html',
                    controller: ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {
                        //code
                    }]
                }
            }
        })

        .state('about', {
            url: '/about',
            templateUrl: './views/about.html'
        })

}]
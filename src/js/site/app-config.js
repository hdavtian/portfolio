export default ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("home");

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: '/views/home.html'
        })

        .state('products', {
            url: '/products',
            templateUrl: '/views/products.html',
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
                        console.log($scope.modules);

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
            templateUrl: '/views/about.html'
        })

        .state('about.people', {
            url: '/:personName',
            views: {
                'peopleUiView' : {
                    templateUrl: '/views/person-detail.html',
                    controller: ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {

                        for (var i=0, l=$scope.people.length; i<l; i++) {
                            if ($stateParams.personName == $scope.people[i].name.toLowerCase().replace(' ', '-')) {
                                $scope.person = $scope.people[i];
                            }
                        }

                    }]
                }
            }
        })

}]
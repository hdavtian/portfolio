import homeCtrl         from './controllers/home-controller';
import productCtrl      from './controllers/product-controller';
import aboutCtrl        from './controllers/about-controller';
import personCtrl       from './controllers/person-controller';

export default ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("home");

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: '/views/home.html',
            controller: ['$scope', '$timeout', homeCtrl]
        })

        .state('products', {
            url: '/products',
            templateUrl: '/views/products.html'
        })

        .state('products.product', {
            url: '/:productId',
            views: {
                'productUiView' : {
                    templateUrl: '/views/product-detail.html',
                    controller: ['$scope', '$stateParams', '$state', productCtrl]
                }
            }
        })

        .state('products.product.module', {
            url: '/:moduleName',
            views: {
                'moduleUiView' : {
                    templateUrl: '/views/product-module-detail.html'
                }
            }
        })

        .state('about', {
            url: '/about',
            templateUrl: '/views/about.html',
            controller: ['$scope', '$stateParams', '$state', aboutCtrl]
        })

        .state('about.people', {
            url: '/:personName',
            views: {
                'peopleUiView' : {
                    templateUrl: '/views/person-detail.html',
                    controller: ['$scope', '$stateParams', '$state', personCtrl]
                }
            }
        })

}]
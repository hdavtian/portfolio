import homePageCtrl             from './controllers/home-page-ctrl';
import productsPageCtrl         from './controllers/products-page-ctrl';
import productDetailPageCtrl    from './controllers/product-detail-page-ctrl';
import productModuleDetailPageCtrl    from './controllers/product-module-detail-page-ctrl';
import aboutPageCtrl            from './controllers/about-page-ctrl';
import personPageCtrl           from './controllers/person-page-ctrl';
import videosPageCtrl           from './controllers/videos-page-ctrl';
import settingsPageCtrl         from './controllers/settings-page-ctrl';
import editPageCtrl             from './controllers/edit-page-ctrl';
import editPersonPageCtrl       from './controllers/edit-person-page-ctrl';
import editVideoPageCtrl        from './controllers/edit-video-page-ctrl';
import editModulePageCtrl       from './controllers/edit-module-page-ctrl';

export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'ChartJsProvider', function($stateProvider, $urlRouterProvider, $locationProvider, ChartJsProvider){

    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });

    $urlRouterProvider.otherwise("home");

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: 'views/home.html',
            controller: ['$scope', '$interval', '$timeout', 'dataService', homePageCtrl]
        })

        .state('products', {
            url: '/products',
            templateUrl: 'views/products.html',
            controller: ['$scope', 'dataService', productsPageCtrl]
        })

        .state('products.product', {
            url: '/:productId',
            views: {
                'productUiView' : {
                    templateUrl: 'views/product-detail.html',
                    controller: ['$scope', '$stateParams', '$state', productDetailPageCtrl]
                }
            }
        })

        .state('products.product.module', {
            url: '/:moduleName',
            views: {
                'moduleUiView' : {
                    templateUrl: 'views/product-module-detail.html',
                    controller: ['$scope', '$stateParams', '$state', productModuleDetailPageCtrl]
                }
            }
        })

        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: ['$scope', '$stateParams', '$state', 'dataService', aboutPageCtrl]
        })

        .state('about.people', {
            url: '/:personName',
            views: {
                'peopleUiView' : {
                    templateUrl: 'views/person-detail.html',
                    controller: ['$scope', '$stateParams', '$state', 'dataService', personPageCtrl]
                }
            }
        })

        .state('settings', {
            url: '/settings',
            templateUrl: 'views/settings.html',
            controller: ['$scope', settingsPageCtrl]
        })

        .state('settings.product', {
            url: '/product/:productId',
            views: {
                'settingsUiView': {
                    template: '<edit data="products" item="product" config="productsConfig" bind-modules="createModuleObjects()"></edit>',
                    controller: ['$scope', '$stateParams', editPageCtrl]
                }
            }
        })

        .state('settings.person', {
            url: '/person/:personId',
            views: {
                'settingsUiView': {
                    template: '<edit data="people" item="person" config="peopleConfig"></edit>',
                    controller: ['$scope', '$stateParams', editPersonPageCtrl]
                }
            }
        })

        .state('settings.videos', {
            url: '/video/:videoId',
            views: {
                'settingsUiView': {
                    template: '<edit data="videos" item="video" config="videosConfig"></edit>',
                    controller: ['$scope', '$stateParams', '$state', editVideoPageCtrl]
                }
            }
        })

        .state('settings.modules', {
            url: '/module/:moduleId',
            views: {
                'settingsUiView': {
                    template: '<edit data="modules" item="module" config="modulesConfig" bind-modules="createModuleObjects()"></edit>',
                    controller: ['$scope', '$stateParams', '$state', editModulePageCtrl]
                }
            }
        })

        .state('settings.add_video', {
            url: '/add-video',
            views: {
                'settingsUiView': {
                    template: '<add config="videosConfig" data="videos"></add>'
                }
            }
        })

        .state('settings.add_person', {
            url: '/add-person',
            views: {
                'settingsUiView': {
                    template: '<add config="peopleConfig" data="people"></add>'
                }
            }
        })

        .state('settings.add_product', {
            url: '/add-product',
            views: {
                'settingsUiView': {
                    template: '<add config="productsConfig" data="products" bind-modules="createModuleObjects()"></add>'
                }
            }
        })

        .state('settings.add_module', {
            url: '/add-module',
            views: {
                'settingsUiView': {
                    template: '<add config="modulesConfig" data="modules" bind-modules="createModuleObjects()"></add>'
                }
            }
        })

        .state('videos', {
            url: '/videos',
            templateUrl: 'views/videos.html',
            controller: ['$scope', '$stateParams', '$state', videosPageCtrl]
        });

    // Configure all charts
    ChartJsProvider.setOptions({
        chartColors: ['#FF5252', '#FF8A80'],
        responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
        showLines: false
    });

}]
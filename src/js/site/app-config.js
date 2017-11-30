export default function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("home");

    $stateProvider
        .state('home', {
            url: "/home",
            template: `home template`
        })

        .state('products', {
            url: '/products',
            template: `products template`
        })

        .state('about', {
            url: '/about',
            template: `about template`
        })

}
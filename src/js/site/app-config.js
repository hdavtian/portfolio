import aboutPageCtrl from './pages/about/about-ctrl';
import portfolioPageCtrl from './pages/portfolio/portfolio-ctrl';
import resumePageCtrl from './pages/resume/resume-ctrl';

export default ['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });

    // $urlRouterProvider.otherwise("home");
    //
    // $stateProvider
    //
    //     .state('home', {
    //         url: "/home",
    //         templateUrl: 'views/home.html',
    //         controller: ['$scope', '$interval', '$timeout', homePageCtrl]
    //     })

    $stateProvider

        .state('home', {
            url: '/home',
            views: {
                'mainSection': {
                    template: '<h1>home</h1>'
                }
            }

        })

        .state('about', {
            url: '/about',
            views: {
                'mainSection': {
                    templateUrl: 'pages/about/about.html',
                    controller: ['$scope', aboutPageCtrl]
                }
            }

        })

        .state('resume', {
            url: '/resume',
            views: {
                'mainSection': {
                    templateUrl: 'pages/resume/resume.html',
                    controller: ['$scope', 'dataService', resumePageCtrl]
                }
            }

        })

        .state('portfolio', {
            url: '/portfolio',
            views: {
                'mainSection': {
                    templateUrl: 'pages/portfolio/portfolio.html',
                    controller: ['$scope', 'dataService', portfolioPageCtrl]
                }
            }

        })

}]
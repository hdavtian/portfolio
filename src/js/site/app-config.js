import aboutPageCtrl from './pages/about/about-ctrl';
import aboutDetailPageCtrl from './pages/about-detail/about-detail-ctrl';
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
                    controller: ['$scope', '$timeout', aboutPageCtrl]
                }
            }

        })

        .state('about.detail', {
            url: '/:id',
            views: {
                'aboutUiView': {
                    templateUrl: 'pages/about-detail/about-detail.html',
                    controller: ['$scope', '$timeout', '$stateParams', 'dataService', aboutDetailPageCtrl]
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
                    controller: ['$scope', '$timeout', 'dataService', portfolioPageCtrl]
                }
            }

        })

}]
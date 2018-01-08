export default function($scope, $timeout, dataService){

    $scope.setBodyBackgroundColor('#fff');
    $scope.projectType = '';

    $scope.portfolio = {};
    $scope.portfolio.employer = [];
    $scope.portfolio.freelance = [];
    $scope.portfolio.old = [];

    dataService.getData('portfolio.json').then(function(response){

        // add id
        for (var i=0, l=response.data.length; i<l; i++) {
            response.data[i].id = i;

            if (response.data[i].type=='employer') {
                $scope.portfolio.employer.push(response.data[i]);

            } else if (response.data[i].type=='freelance') {
                $scope.portfolio.freelance.push(response.data[i]);

            } else if (response.data[i].type=='old') {
                $scope.portfolio.old.push(response.data[i]);
            };

        };

    });

    // reduce portfolio thumbnails wrapper div width to fit
    $scope.reducePortfolioWidth = function(){
        new TimelineMax()
            .set('.freelance-portfolio-wrapper', {width: '40vw'})
            // .staggerTo('.project', 0.25, {width: '150px', height: '150px', ease: Power4.easeOut}, 0.05, 'start')
            .to('.project', 0.25, {width: '150px', height: '150px', ease: Power4.easeOut})
    };

    $scope.expandPortfolioWidth = function(){
        new TimelineMax()
            .set('.freelance-portfolio-wrapper', {width: '100%'})
            // .staggerTo('.project', 0.25, {width: '250px', height: '250px', ease: Power4.easeOut}, 0.05, 'start')
            .to('.project', 0.25, {width: '250px', height: '250px', ease: Power4.easeOut})
    };

}
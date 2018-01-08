export default function($scope, $timeout, dataService){

    $scope.setBodyBackgroundColor('#fff');
    $scope.projectType = '';

    $scope.portfolio = {};
    $scope.portfolio.employers = [];
    $scope.portfolio.freelance = [];
    $scope.portfolio.old = [];

    dataService.getData('portfolio.json').then(function(response){

        // add id
        for (var i=0, l=response.data.length; i<l; i++) {
            response.data[i].id = i;

            if (response.data[i].type=='employer') {
                $scope.portfolio.employers.push(response.data[i]);
            } else if (response.data[i].type=='freelance') {
                $scope.portfolio.freelance.push(response.data[i]);
            } else if (response.data[i].type=='old') {
                $scope.portfolio.old.push(response.data[i]);
            };

        };

    });

    // hover animations
    var moduleMouseoverAnimation = function(_el) {

        var $el = _el.find('.bgImg');
        var $info = _el.find('.info');
        // var $title = _el.find('.wrapper h2');
        // var $line = _el.find('.title p');

        var animation = new TimelineMax({ paused: true })
            .add('part1')
            .to($el, 1.5, { transform: 'scale(1.5)', ease: Power4.easeOut, y: 0 }, 'part1')
            .to($info, 0.75, {bottom: 0, ease: Power4.easeOut}, 'part1')
            // .to($line, 1.5, {width: '100%', ease: Power4.easeOut}, 'part1')
            .add('end');

        animation.play();
    };

    var moduleMouseoutAnimation = function (_el) {

        var $el = _el.find('.bgImg');
        var $info = _el.find('.info');
        // var $title = _el.find('.wrapper h2');
        // var $line = _el.find('.title p');

        var animation = new TimelineMax({ paused: true })
            .add('part1')
            .to($el, 1.5, { transform: 'scale(1.0)', ease: Power4.easeOut, y: 0, clearProps: "transform" }, 'part1')
            // .to($line, 1.5, { width: 'auto', ease: Power4.easeOut }, 'part1')
            .to($info, 0.75, {bottom: '-90px', ease: Power4.easeOut}, 'part1')
            .add('end');

        animation.play();
    };

    // div hover animations
    $timeout(function(){
        $('.project').each(function () {
            var tis = $(this);

            // exception class
            if (tis.hasClass('do-not-animate')) {
                return;
            };

            tis.on('mouseenter', function () {
                moduleMouseoverAnimation(tis)
            });

            tis.on('mouseleave', function () {
                moduleMouseoutAnimation(tis);
            });
        });

        //applying isotope for smooth div re-positioning

        /*
        var grid = document.querySelector('.freelance-portfolio-wrapper');
        var iso = new Isotope( grid, {
            // options...
            itemSelector: '.project',
            masonry: {
                columnWidth: 200
            }
        });
        */

    },1000);

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
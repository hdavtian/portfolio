export default function($scope, $timeout, dataService){
    $scope.setBodyBackgroundColor('#fff');
    dataService.getData('portfolio.json').then(function(response){
        $scope.portfolio = response.data;
    });

    // hover animations
    function moduleMouseoverAnimation(_el) {

        var $el = _el.find('.bgImg');
        var $title = _el.find('.wrapper h2');
        var $line = _el.find('.title p');

        var animation = new TimelineMax({ paused: true })
            .add('part1')
            .to($el, 1.5, { transform: 'scale(1.1)', ease: Power4.easeOut, y: 0 }, 'part1')
            .to($line, 1.5, {width: '100%', ease: Power4.easeOut}, 'part1')
            .add('end');

        animation.play();
    };

    function moduleMouseoutAnimation(_el) {

        var $el = _el.find('.bgImg');
        var $title = _el.find('.wrapper h2');
        var $line = _el.find('.title p');

        var animation = new TimelineMax({ paused: true })
            .add('part1')
            .to($el, 1.5, { transform: 'scale(1.0)', ease: Power4.easeOut, y: 0, clearProps: "transform" }, 'part1')
            .to($line, 1.5, { width: 'auto', ease: Power4.easeOut }, 'part1')
            .add('end');

        animation.play();
    };

    // modules without crowtoons (with real bg image)

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

    },100);

    // reduce portfolio thumbnails wrapper div width to fit
    // 50vw
    $scope.reducePortfolioWidth = function(){
        new TimelineMax()
            .to('.freelance-portfolio-wrapper', 1, {width: '50%', ease: Power4.easeOut}, 'start')
            .staggerTo('.project', 0.25, {width: '150px', height: '150px', ease: Power4.easeOut}, 0.05, 'start')
    };

    $scope.expandPortfolioWidth = function(){
        new TimelineMax()
            .to('.freelance-portfolio-wrapper', 1, {width: '100%', ease: Power4.easeOut}, 'start')
            .staggerTo('.project', 0.25, {width: '250px', height: '250px', ease: Power4.easeOut}, 0.05, 'start')
    };

}
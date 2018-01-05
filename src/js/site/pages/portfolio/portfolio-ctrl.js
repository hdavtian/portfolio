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
    },100)

}
export default function(){
    return {
        templateUrl: 'hd-portfolio-block/hd-portfolio-block.html',
        link: function($scope, $element, $attrs) {
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
            $element.on('mouseenter', function () {
                moduleMouseoverAnimation($element)
            });

            $element.on('mouseleave', function () {
                moduleMouseoutAnimation($element);
            });

            /*
            //applying isotope for smooth div re-positioning
            var grid = document.querySelector('.freelance-portfolio-wrapper');
            var iso = new Isotope( grid, {
                // options...
                itemSelector: '.project',
                masonry: {
                    columnWidth: 200
                }
            });
            */

        }
    }
}
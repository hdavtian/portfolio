export default function(){
    return {
        // relative to site root
        scope: {
            config: '='
        },
        templateUrl: 'hd-navbar/hd-navbar.html',
        controllerAs: 'hdNavbar',
        replace: true,
        controller: ['$scope', function($scope){
            //
        }],
        link: function($scope, $element, $attrs) {

            // hamburgers from
            // https://jonsuh.com/hamburgers/
            /*
            var $hamburger = $element.find('.menu-toggler');
            $hamburger.on('click', function(){
                $(this).toggleClass("is-active");
            });
            */

            var showAnimation = function(){
                new TimelineMax()
                    .to($element, 0.75, {left: 0, ease: Power4.easeOut});
                $element.removeClass('hiding').addClass('showing');
            };

            var hideAnimation = function(){
                new TimelineMax()
                    .to($element, 0.75, {left: ($element.outerWidth()*-1)+'px', ease: Power4.easeOut});
                $element.removeClass('showing').addClass('hiding');
            };

            var toggleState = function(){
                if ($element.hasClass('showing')) {
                    hideAnimation();
                } else if ($element.hasClass('hiding')) {
                    showAnimation();
                }
            };

            // menu click
            var $menuBg = $(".hd-navbar-container .inner-wrapper");
            $menuBg.on('click', function(){
                toggleState();
            });

            // hide on mouseleave
            // $('.code-theme-container').on('mouseleave', function(){
            //     toggleState();
            // });

            // stop propagation on links so menu doesn't toggle on link clicks
            /*
            var $links = $(".hd-navbar-container ul");
            $links.on('click', function(e){
                e.stopPropagation();
            });
            */
        }
    }
}
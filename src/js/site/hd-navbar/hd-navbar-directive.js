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

            // menu click
            var $menuBg = $(".hd-navbar-container .inner-wrapper");
            $menuBg.on('click', function(){

                if (!$element.hasClass('hd-bounceOutLeft') && !$element.hasClass('hd-bounceInLeft')) {
                    $element.addClass('hd-bounceInLeft');
                    return;
                };

                if ($element.hasClass('hd-bounceOutLeft')){
                    $element.removeClass('hd-bounceOutLeft').addClass('hd-bounceInLeft');
                    return;
                }

                if ($element.hasClass('hd-bounceInLeft')){
                    $element.removeClass('hd-bounceInLeft').addClass('hd-bounceOutLeft');
                    return;
                }


            });

            // stop propagation on links
            var $links = $(".hd-navbar-container ul");
            $links.on('click', function(e){
                e.stopPropagation();
                // alert('link clicked');
            });

        }
    }
}
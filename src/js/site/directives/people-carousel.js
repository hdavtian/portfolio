export default function(){
    return {
        scope: {
          data: '='
        },
        templateUrl: 'views/directives/people-carousel.html',
        controller: ['$scope', '$timeout', function ($scope, $timeout) {

            $timeout(function(){
                $('.people-carousel').owlCarousel({
                    items: 4,
                    nav: true,
                    responsive: {
                        0: {
                            items: 1,
                            dots: false,
                        },
                        768: {
                            items: 4,
                            dots: true
                        }
                    }
                })
            },100)
        }]
    }
}
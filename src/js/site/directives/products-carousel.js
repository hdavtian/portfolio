export default function(){
    return {
        templateUrl: 'views/directives/products-carousel.html',
        controller: ['$scope', '$timeout', function($scope, $timeout){

            $timeout(function(){
                $('.products-carousel').owlCarousel({
                    responsiveClass:true,
                    nav: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        }
                    }
                });

                $('.product .description').dotify({
                    max: 300,
                    dotCharacters: '...'
                })
            }, 100)

        }]
    }
}
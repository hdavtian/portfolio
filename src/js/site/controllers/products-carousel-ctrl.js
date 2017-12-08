export default function($scope, $timeout){

    $timeout(function(){
        $('.products-carousel').owlCarousel({
            items: 2,
            nav: true
        });

        $('.product .description').dotify({
            max: 300,
            dotCharacters: '...'
        })
    },0);

}
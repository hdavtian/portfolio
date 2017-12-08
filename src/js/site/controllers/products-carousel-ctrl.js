export default function($scope, $timeout){
    $timeout(function(){
        $('.products-carousel').owlCarousel({
            items: 4,
            nav: true
        })
    },0)
}
export default function ($scope, $timeout) {
    $timeout(function(){
        $('.people-carousel').owlCarousel({
            items: 4,
            nav: true,
            dots: true
        })
    },0)
}
export default function ($scope, $timeout) {
    $timeout(function(){
        $('.people-carousel').owlCarousel({
            items: 3,
            nav: true
        })
    },0)
}
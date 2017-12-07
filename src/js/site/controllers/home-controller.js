export default function($scope, $timeout) {
    $timeout(function(){
        $('.hp-products-wrapper').owlCarousel(
            {
                items:4,
                nav: true
            })
    },0)
}
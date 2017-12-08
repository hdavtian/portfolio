import productsCarouselCtrl from '../controllers/products-carousel-ctrl';

export default function(){
    return {
        templateUrl: '/views/directives/products-carousel.html',
        controller: ['$scope', '$timeout', productsCarouselCtrl]
    }
}
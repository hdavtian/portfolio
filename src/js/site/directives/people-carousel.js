import peopleCarouselCtrl from '../controllers/people-carousel-controller';

export default function(){
    return {
        templateUrl: '/views/directives/people-carousel.html',
        controller: ['$scope', '$timeout', peopleCarouselCtrl]
    }
}
import Parallax from 'parallax-js';

export default function($scope, $timeout){

    $scope.setBodyBackgroundColor('#2b2b2b');


    var scene = document.getElementById('scene');
    var layers = ['layer1', 'layer2', 'layer3', 'layer4', 'layer5'];
    var depth = 0;
    var $el;
    var randScale;

    var randomBetween = function(a, b){
        return Math.floor(Math.random() * b) + a;
    };

    $('.layer').each(function(){
        $(this).attr('data-depth', depth += randomBetween(1,5)/10);
        randScale = randomBetween(8, 20)/11;
        $(this).find('.i').css({
            'top' : randomBetween(1, scene.offsetHeight - 250) + 'px',
            'left' : randomBetween(1, scene.offsetWidth - 250) + 'px',
            'transform' : 'scale(' + randScale + ',' + randScale +')'
        });
        $(this).find('a').css({
            'background-color' : 'rgba('+randomBetween(0,255)+','+randomBetween(0,255)+','+randomBetween(0,255)+','+0.75+')'
        });
    })

    var parallaxInstance = new Parallax(scene, {
        // relativeInput: true,
        // clipRelativeInput: true,
        // hoverOnly: true,
        pointerEvents: true
    });


}
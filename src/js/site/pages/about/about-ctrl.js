import Parallax from 'parallax-js';
// import {TimelineMax, Power4} from "gsap";
// import
import ScrollMagic from "scrollmagic";
require('animation.gsap');

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

    // testing TimelineMax and ScrollMagic


    /*

    var controller = new ScrollMagic.Controller();
    var topnavAnimation = new TimelineMax({paused:true})
        .to('.about-page-wrapper', 15, {height:'110px', ease: Power4.easeOut}, 'start')
        .add('end');
    var topnavScene = new ScrollMagic.Scene({
        offset: 0//,
        //duration: 300
    });
    topnavScene.setTween(topnavAnimation.play());
//topnavScene.addIndicators();
    controller.addScene([topnavScene]);
    */


    var resetThings = function(){
        var $i = $('.i');
        new TimelineMax()
            .staggerTo($i, 2, {left:'110px', ease: Power4.easeOut}, 0.25, 'start')
    };

    resetThings();



}
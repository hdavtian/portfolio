import Parallax from 'parallax-js';
// import {TimelineMax, Power4} from "gsap";
// import
import ScrollMagic from "scrollmagic";
// require('animation.gsap');

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
            'left' : randomBetween(1, scene.offsetWidth - 250) + 'px'//,
            //'transform' : 'scale(' + randScale + ',' + randScale +')'
        });
        $(this).find('a').css({
            'background-color' : 'rgba('+randomBetween(0,255)+','+randomBetween(0,255)+','+randomBetween(0,255)+','+0.75+')'
        });
    })

    // parallax effect
    /*
    var parallaxInstance = new Parallax(scene, {
        // relativeInput: true,
        // clipRelativeInput: true,
        // hoverOnly: true,
        pointerEvents: true
    });
    */
    
    $scope.thingActions = (function(){

        var $i = $('.i');
        var originalPositions = [];

        var contract = function(){
            new TimelineMax()
                .staggerTo($i, 1, {left:'110px', ease: Power4.easeOut}, 0.15, 'start')
        };

        var expand = function(){
            console.log('expanding...');
            for(var i=0, l=originalPositions.length; i<l; i++){
                new TimelineMax()
                    .to(originalPositions[i].$el, 1, {
                        left:originalPositions[i].x,
                        top:originalPositions[i].y,
                        ease: Power4.easeOut
                    }, 'start');
            }
            /*
            $i.each(function($index){
                new TimelineMax()
                    .to($i, 1, {
                        left:originalPositions[$index].x,
                        top:originalPositions[$index].y,
                        ease: Power4.easeOut
                    }, 'start');
                console.log(originalPositions[$index].x + ',' +originalPositions[$index].y)
            });
            */
        };

        var _constructor = function(){
            $i.each(function(){
                originalPositions.push({$el: $(this), x: $(this).css('left'), y: $(this).css('top')})
            });
            console.log(originalPositions);
        };

        _constructor();

        return {
            contract: contract,
            expand: expand
        }

    })();

    //resetThings();



}
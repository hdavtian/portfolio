import Parallax from 'parallax-js';

export default function($scope, $timeout){
    $scope.setBodyBackgroundColor('#2b2b2b');

    var scene = document.getElementById('scene');
    var layers = ['layer1', 'layer2', 'layer3', 'layer4', 'layer5'];
    var depth = 0;
    // setting `data-depth` attribute for each div
    for (var i=0, l=layers.length; i<l; i++){
        $('.' + layers[i]).attr('data-depth', depth += 0.2)
    }

    var parallaxInstance = new Parallax(scene, {
        // relativeInput: true,
        // clipRelativeInput: true,
        hoverOnly: true,
        pointerEvents: true
    });


}
/*global document, setTimeout, Reveal*/
;(function(Reveal){
    'use strict';

    var animalsVisited = false;
    Reveal.addEventListener('animals', function(){
        if (!animalsVisited){
            animalsVisited = true;
            var elements = ['air', 'land', 'water'].map(function(id){
                return document.getElementById(id);
            });
            elements.forEach(function(element){
                var loop = function(){
                    var x = Math.floor(Math.random() * 3) * 160;
                    var y = Math.floor(Math.random() * 2) * 280;
                    element.style.backgroundPositionX = x + 'px';
                    element.style.backgroundPositionY = y + 'px';
                    setTimeout(loop, 1200 + 200 * (Math.random() - 0.5));
                };
                loop();
            });
        }
    });
})(Reveal);

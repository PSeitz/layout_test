/**
 * Created by Kupletsky Sergey on 16.09.14.
 *
 * Hierarchical timing
 * Add specific delay for CSS3-animation to elements.
 */

(function() {
    var speed = 2000;
    var elements = document.querySelectorAll('.display-animation');
    Array.prototype.forEach.call(elements, function(container, i){
        
        Array.prototype.forEach.call(container.children, function(el, i2){
            var rect = el.getBoundingClientRect();
            var top = rect.top + document.body.scrollTop;
            var left = rect.left + document.body.scrollLeft;
            
            var offset = left*0.8 + top;
            var delay = parseFloat(offset/speed).toFixed(2);
            el.style["-webkit-animation-delay"] = delay+'s';
            el.style["-o-animation-delay"] = delay+'s';
            el.style["animation-delay"] = delay+'s';
            el.classList.add('animated');
        });

    });

})();

(function() {

    var elements = document.querySelectorAll('.ripple-effect');
    Array.prototype.forEach.call(elements, function(rippler, i){

        rippler.addEventListener('click', function (e) {
            // create .ink element if it doesn't exist

            if(rippler.querySelector(".ink") == null) {
                var span = rippler.appendChild(document.createElement('span'));
                span.classList.add('ink');
            }

            var ink = rippler.querySelector(".ink");

            // prevent quick double clicks
            ink.classList.remove("animate");

            // set .ink diametr
            if(!ink.offsetHeight && !ink.offsetWidth)
            {
                var d = Math.max(rippler.offsetWidth,  outerHeight(rippler));
                ink.style["height"] = d+'px';
                ink.style["width"] = d+'px';
            }

            // get click coordinates
            var offsetTop = rippler.getBoundingClientRect().top + document.body.scrollTop;
            var offsetLeft = rippler.getBoundingClientRect().left + document.body.scrollLeft;
            var x = e.pageX - offsetLeft - ink.offsetWidth/2;
            var y = e.pageY - offsetTop - ink.offsetHeight/2;

            ink.style["top"] = y+'px';
            ink.style["left"] = x+'px';
            ink.classList.add('animate');
            
        });

    });

})();


function outerHeight(el) {
  var height = el.offsetHeight;
  var style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

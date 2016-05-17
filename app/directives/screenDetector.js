app.directive('screenDetector', ['$window', '$document','$timeout', 'animateService', function($window, $document, $timeout, animateService){
	return {
		restrict : 'AC',
		scope: {
			type : '@',
			time : '@',
			delay : '@',
			value: '@'
		},
		link : function(s, e, a) {

		
		var animated = false;

		var type = s.type || "fade";
		var time = s.time || 0.75;
		var delay = s.delay || 0;
		var timeout;
		$document.bind('mousewheel DOMMouseScroll touchmove scroll', function(){
			if(inScreen()){
				if(!animated){
					animateService.animate(e, time, delay, type, s.value);
					animated = true;
				}
			}else{
				if(animated){
					TweenLite.set(e, {opacity: 0});
					animated = false;
				}
			}				
		});

		function inScreen(){
			var $window = $(window);
		    var w_bottom = $window.scrollTop() + $window.height(); //distancia al top + altura del viewport = posición del bottom del content
		    var element = $(e);
		    var top = element.offset().top; //posición a top independiente del scroll
		    var height = element.height(); //su altura
		    var bottom = top + height; //parte inferior

		    return (top >= $window.scrollTop() && top < w_bottom) || 
		    	   (bottom > $window.scrollTop() && bottom <= w_bottom) ||
                   (height > $window.height() && top <= $window.scrollTop() && bottom >= w_bottom);
		}

		}
	};
}]);
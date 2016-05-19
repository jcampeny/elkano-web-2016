app.directive('screenDetector', ['$window', '$document','$timeout', 'animateService', 'screenService', function($window, $document, $timeout, animateService, screenService){
	return {
		restrict : 'EA',
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
		var element = $(e);

		var scrollHandling = {
		    allow: true,
		    reallow: function() {
		        scrollHandling.allow = true;
		    },
		    delay: 100 //++ to improve performance
		};

		$document.bind('mousewheel DOMMouseScroll touchmove scroll', function(){
			if(scrollHandling.allow){
				//evita scroll
				scrollHandling.allow = false;
				//cancelamos scroll hasta que timeout lo permita
				//para mejora del rendimiento -> modificar delay
				$timeout(function() {
					scrollHandling.reallow();
					if(screenService.inScreen(element)){
						if(!animated){
							animateService.animate(e, time, delay, type, s.value);
							animated = true;
						}
					}else{
						TweenLite.set(e, {opacity: 0});
						animated = false;
					}
				}, scrollHandling.delay);
			}				
		});
		}
	};
}]);

angular.module('app')
	.directive('headerChanger', ['screenService', '$document', '$timeout', function (screenService, $document, $timeout) {
		return {
			restrict : 'EA',
			scope : {
				value : '@'
			},
			link : function (s, e, a){
				var element = $(e);

				var scrollHandling = {
				    allow: true,
				    reallow: function() {
				        scrollHandling.allow = true;
				    },
				    delay: 50 //++ to improve performance
				};

				$document.bind('mousewheel DOMMouseScroll touchmove scroll', function(){
					if(scrollHandling.allow && screenService.inScreenHeader(element)){
						scrollHandling.allow = false;
						$timeout(function() {
							scrollHandling.reallow();
							screenService.setHeaderState(s.value);
						}, scrollHandling.delay);
						
					}
				});
			}
		};
	}]);
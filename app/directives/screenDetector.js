app.directive('screenDetector', ['$window', '$document','$timeout', 'animateService', 'screenService','deviceDetector', function($window, $document, $timeout, animateService, screenService, deviceDetector){
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
		var time = s.time || 0.750;
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

		
		if(!deviceDetector.isMobile()){//check is mobile

			TweenLite.set(e, {opacity: 0}); //all hide

			$document.bind('mousewheel DOMMouseScroll touchmove scroll', function(){
				checkToScreen();				
			});
			
			checkToScreen();
		}

		function checkToScreen(){
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
						if(!animated){
							TweenLite.set(e, {opacity: 0});
						}
						
						//animated = false;
					}
				}, scrollHandling.delay);
			}
		}
		
		}
	};
}]);

angular.module('app')
	.directive('headerChanger', ['screenService', '$document', '$timeout', '$interval', function (screenService, $document, $timeout, $interval) {
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

				function changeHeader() {
					if(scrollHandling.allow && screenService.inScreenHeader(element)){
						scrollHandling.allow = false;
						$timeout(function() {
							scrollHandling.reallow();
							screenService.setHeaderState(s.value);
						}, scrollHandling.delay);
					}
				}

				$document.bind('mousewheel DOMMouseScroll touchmove scroll', function(){
					changeHeader();
					if(screenService.getHeaderState() !== ""){
						$interval.cancel(aa);
					}
				});

				var aa = $interval(function(){
					changeHeader();
				}, 1000);
				changeHeader();
			}
		};
	}]);
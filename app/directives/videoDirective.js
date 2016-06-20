angular.module('app')

	.directive('ngVideo', [ 'deviceDetector', '$sce', 'screenService', '$document', function (deviceDetector, $sce, screenService, $document){
		return {
			restrict : 'EA',
			scope : {
				link : '@',
				play : "@", //play (screen, true, false, mouse)
				loop : '@',
				controls : '@',
				img : '@' //for mobile
			},
			templateUrl : '../app/views/directiveViews/ngVideo.html',
			controller:  function ($sce, $scope) {
				if(!deviceDetector.isMobile()){
					$scope.$watch('link', function() {
						$scope.config = {
							sources: [
								{src: $sce.trustAsResourceUrl($scope.link), type: "video/mp4"}
								],
							theme: "bower_components/videogular-themes-default/videogular.css",
							plugins: {
								poster: ""
							},
							autoplay : ($scope.play == "autoplay") ? true : false,
							loop : ($scope.loop == "true") ? true : false,
							controls : ($scope.controls == "true") ? true : false
						};				  
					});
				}
			},
			link : function (s, e, a, controllers) {
				if(s.play == 'mouse' && !deviceDetector.isMobile()){
					$(e).mouseenter(function() {
						var video = $(e).find('video');
						video[0].play();
					});
					$(e).mouseleave(function() {
						var video = $(e).find('video');
						video[0].pause();
					});	
				}else if(s.play == 'screen' && !deviceDetector.isMobile()){
					var scrollHandling = {
					    allow: true,
					    reallow: function() {
					        scrollHandling.allow = true;
					    },
					    delay: 100 //++ to improve performance
					};
					setTimeout(function(){animateScreen();},2000);
					$document.bind('mousewheel DOMMouseScroll touchmove scroll', function(){
						animateScreen();
					});
				}	
				function animateScreen(){
					var video = $(e).find('video');
					
					if(scrollHandling.allow && $(video[0]).attr('src') !== ''){
						scrollHandling.allow = false;

						if(screenService.inScreen(video)){
							video[0].play();
						}else{
							video[0].pause();
						}
						setTimeout(function(){scrollHandling.reallow();},scrollHandling.delay);
					}
				}
			}
		};
	}]);	

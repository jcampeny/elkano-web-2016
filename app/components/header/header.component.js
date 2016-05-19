angular.module('app').directive('ngHeader', function () {
  return {
    restrict: 'EA',
    templateUrl: '../app/components/header/header.html',
    controllerAs: 'header',
    controller: function ($scope) {
    	//code
    }
  };
});

angular.module('app')
	.directive('headerState', ['screenService', '$document', '$timeout', function(screenService, $document, $timeout) {
		return{
			restrict: 'EA',
			link : function (s, e, a) {

				var scrollHandling = {
				    allow: true,
				    reallow: function() {
				        scrollHandling.allow = true;
				    },
				    delay: 50 //++ to improve performance
				};

				$document.bind('mousewheel DOMMouseScroll touchmove scroll', function(){
					if(scrollHandling.allow){
						scrollHandling.allow = false;
						$timeout(function() {
							scrollHandling.reallow();
							//console.log(screenService.getHeaderState());
							s.state = screenService.getHeaderState();
						}, scrollHandling.delay);
						
					}
				});
			}
		};
	}]);


angular.module('app')
	.directive('typed', ['$window','$document', function($window, $document){
		return {
			restrict : 'EA',
			scope: {
				value : '@'
			},
			link : function (s,e,a) {
				var items = s.value.split(",");
				$(e).typed({
				    strings: items,
				    typeSpeed: 0,           
				    loop: true,
				    backDelay: 3000,
					loopCount: false,
				    showCursor: false,
				    cursorChar: "",
				    contentType: 'html'
				});
			}
		};
	}]);
angular.module('app')
	.directive('fullScreen', ['$window','$document', function($window, $document){
		return {
			restrict : 'EA',
			scope: {

			},
			link : function (s,e,a) {
				var wHeight = $($window).height();
				var wWidth = $($window).width();
				
				$(e).css({'height' : wHeight+'px'});

				$($window).bind('resize', function(){
					if(wWidth != $($window).width()){
						wWidth = $($window).width();
						wHeight = $($window).height();
						$(e).css({'height' : wHeight+'px'});
					}
				});
			}
		};
	}]);
angular.module('app')
	.directive('ngSlide', [ "$compile", function($compile ){
		return {
			restrict: 'EA',
			scope : {

			},
			controller : ['$scope' ,function ($scope){
				this.dots = 0;
			}],
			link : function (s, e, a, controllers) {	
				s.$watch( //esperamos que reciba las imágenes de la base de datos
					function(){
						return s.$parent.project;
					},
					function(){
						if(s.$parent.project !== undefined){
							init();	
						}
					});

				function init (){
					var imgs = s.$parent.project.styleFrames;
/*
					angular.forEach(imgs, function(img, i){//creamos las imágenes (DOM)
						var link = $(img).attr('src');
						$(e).append('<div slide="'+i+'" style=" background-image : url('+link+');"></div>');
						controllers.dots++;
					});*/
					createArrows();
					$compile( e )(s);
				}

				function createArrows(){
					$(e).append('<figure class="left" ng-click="left()">');
					$(e).append('<figure class="right" ng-click="right()">');
				}

				s.left = function(){
					console.log("left");
				};
				s.right = function(){
					console.log("right");
				};
			}

		};
	}])
	.directive('dots', [function (){
		return {
			restrict : 'EA',
			require: '^^ngSlide',
			scope : {},
			link : function (s, e, a, controllers) {
				s.$watch( //esperamos que reciba las imágenes de la base de datos
					function(){
						return controllers.dots;
					},
					function(){
						if(controllers.dots !== 0){
							createDots(controllers.dots);
						}
					});
				function createDots(n){

					for (var i = 0; i < n; i++) {
						$(e).append('<figure dot="'+i+'"></figure>');
					}
				}
			}
		};
	}]);
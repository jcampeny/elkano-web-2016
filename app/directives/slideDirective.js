angular.module('app')
	.directive('ngSlide', [ "$compile", function($compile ){
		return {
			restrict: 'EA',
			scope : {

			},
			controller : ['$scope' ,function ($scope){
				this.dots = 0;
				this.position = 0;

			}],
			link : function (s, e, a, controllers) {
				//s.$watch(controllers.position, function(){console.log(controllers.position);});	
				
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

					angular.forEach(imgs, function(img, i){//creamos las imágenes (DOM)
						var link = $(img).attr('src');
						$(e).append('<div slide="'+i+'" style=" background-image : url('+link+');"></div>');
						controllers.dots++;
					});

					if(imgs.length > 1){
						createArrows();
						createDots(controllers.dots);
					}

					$compile( e )(s);
					refreshPosition(0, 0);
				}

				function createArrows(){
					$(e).append('<figure class="left" ng-click="left()"><svg version="1.1"  x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"> <path fill="#FFFFFF" d="M21.981,13.598c-0.047,0.04-0.089,0.082-0.132,0.123c-3.744,3.694-7.49,7.388-11.234,11.085 c-0.047,0.048-0.092,0.096-0.154,0.161c0.067,0.07,0.117,0.122,0.171,0.175c3.743,3.705,7.489,7.411,11.232,11.117 c0.274,0.27,0.57,0.43,0.966,0.319c0.645-0.184,0.866-0.943,0.421-1.439c-0.055-0.061-0.113-0.118-0.172-0.176 c-3.01-2.978-6.022-5.956-9.033-8.932c-0.062-0.062-0.147-0.099-0.224-0.146c0.02-0.029,0.037-0.06,0.055-0.089h0.278 c8.096,0,16.19,0,24.286-0.002c0.168,0,0.347-0.005,0.509-0.049c0.397-0.11,0.612-0.422,0.587-0.812 c-0.021-0.342-0.295-0.637-0.669-0.705c-0.138-0.025-0.282-0.03-0.424-0.03c-8.103-0.002-16.204-0.002-24.308-0.002H13.8 c0.097-0.101,0.153-0.166,0.215-0.226c3.03-2.996,6.06-5.997,9.093-8.995c0.26-0.256,0.415-0.54,0.316-0.914 C23.256,13.417,22.496,13.174,21.981,13.598z"/> <path fill="#FFFFFF" d="M21.981,13.598c-0.047,0.04-0.089,0.082-0.132,0.123c-3.744,3.694-7.49,7.388-11.234,11.085 c-0.047,0.048-0.092,0.096-0.154,0.161c0.067,0.07,0.117,0.122,0.171,0.175c3.743,3.705,7.489,7.411,11.232,11.117 c0.274,0.27,0.57,0.43,0.966,0.319c0.645-0.184,0.866-0.943,0.421-1.439c-0.055-0.061-0.113-0.118-0.172-0.176 c-3.01-2.978-6.022-5.956-9.033-8.932c-0.062-0.062-0.147-0.099-0.224-0.146c0.02-0.029,0.037-0.06,0.055-0.089h0.278 c8.096,0,16.19,0,24.286-0.002c0.168,0,0.347-0.005,0.509-0.049c0.397-0.11,0.612-0.422,0.587-0.812 c-0.021-0.342-0.295-0.637-0.669-0.705c-0.138-0.025-0.282-0.03-0.424-0.03c-8.103-0.002-16.204-0.002-24.308-0.002H13.8 c0.097-0.101,0.153-0.166,0.215-0.226c3.03-2.996,6.06-5.997,9.093-8.995c0.26-0.256,0.415-0.54,0.316-0.914 C23.256,13.417,22.496,13.174,21.981,13.598z"/> </svg> </figure>');
					$(e).append('<figure class="right" ng-click="right()"><svg version="1.1"  x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve"> <path fill="#FFFFFF" d="M26.576,14.061c-0.099,0.374,0.057,0.658,0.316,0.914c3.033,2.999,6.063,5.999,9.093,8.995c0.062,0.061,0.118,0.125,0.215,0.226h-0.337c-8.104,0-16.205,0-24.308,0.002c-0.142,0-0.286,0.005-0.424,0.03c-0.374,0.068-0.648,0.363-0.669,0.705c-0.024,0.39,0.19,0.702,0.587,0.812c0.162,0.044,0.34,0.049,0.509,0.049c8.095,0.002,16.19,0.002,24.286,0.002h0.278c0.018,0.029,0.035,0.06,0.055,0.089c-0.076,0.047-0.162,0.084-0.224,0.146c-3.011,2.976-6.023,5.954-9.033,8.932c-0.059,0.058-0.117,0.115-0.172,0.176c-0.445,0.496-0.224,1.256,0.421,1.439c0.396,0.11,0.691-0.05,0.966-0.319c3.743-3.706,7.489-7.412,11.232-11.117c0.054-0.053,0.104-0.105,0.171-0.175c-0.063-0.065-0.107-0.112-0.154-0.161c-3.744-3.697-7.49-7.391-11.234-11.085c-0.043-0.042-0.085-0.083-0.132-0.123C27.504,13.174,26.744,13.417,26.576,14.061z"/> <path fill="#FFFFFF" d="M26.576,14.061c-0.099,0.374,0.057,0.658,0.316,0.914c3.033,2.999,6.063,5.999,9.093,8.995c0.062,0.061,0.118,0.125,0.215,0.226h-0.337c-8.104,0-16.205,0-24.308,0.002c-0.142,0-0.286,0.005-0.424,0.03c-0.374,0.068-0.648,0.363-0.669,0.705c-0.024,0.39,0.19,0.702,0.587,0.812c0.162,0.044,0.34,0.049,0.509,0.049c8.095,0.002,16.19,0.002,24.286,0.002h0.278c0.018,0.029,0.035,0.06,0.055,0.089c-0.076,0.047-0.162,0.084-0.224,0.146c-3.011,2.976-6.023,5.954-9.033,8.932c-0.059,0.058-0.117,0.115-0.172,0.176c-0.445,0.496-0.224,1.256,0.421,1.439c0.396,0.11,0.691-0.05,0.966-0.319c3.743-3.706,7.489-7.412,11.232-11.117c0.054-0.053,0.104-0.105,0.171-0.175c-0.063-0.065-0.107-0.112-0.154-0.161c-3.744-3.697-7.49-7.391-11.234-11.085c-0.043-0.042-0.085-0.083-0.132-0.123C27.504,13.174,26.744,13.417,26.576,14.061z"/> </svg></figure>');
				}

				function createDots(n){
					for (var i = 0; i < n; i++) {
						$('dots').append('<figure dot="'+i+'" ng-click="dot('+i+')"></figure>');
					}
				}

				s.left = function(){
					var last = controllers.position;
					if(((controllers.position - 1) < 0)){
						controllers.position = controllers.dots - 1;
					}else{
						controllers.position--;
					}
					refreshPosition(last, controllers.position);
				};
				s.right = function(){
					var last = controllers.position;
					if(((controllers.position + 1) > controllers.dots - 1)){
						controllers.position = 0;
					}else{
						controllers.position++;
					}
					refreshPosition(last, controllers.position);
				};
				s.dot = function(i){
					var last = controllers.position;
					controllers.position = i;
					refreshPosition(last, controllers.position);
				};
				setInterval(function(){
					var last = controllers.position;
					if(((controllers.position + 1) > controllers.dots - 1)){
						controllers.position = 0;
					}else{
						controllers.position++;
					}
					if(!(last === 0 && controllers.position === 0)){
						refreshPosition(last, controllers.position);
					}
					
					
				},3500);
				function refreshPosition(last, next){
					$('[slide="'+last+'"]').css({opacity: 0});
					$('[dot="'+last+'"]').css({'background-color' : 'transparent'});

					$('[slide="'+next+'"]').css({opacity: 1});
					$('[dot="'+next+'"]').css({'background-color' : '#FFFFFF'});

				}
			}

		};
	}]);/*
	.directive('dots', ['$compile', function ($compile){
		return {
			restrict : 'EA',
			require: '^^ngSlide',
			scope : {},
			link : function (s, e, a, controllers) {
				s.dot = function(i){
					
					controllers.position = i;
					s.$parent.testing = i;
				};
				s.$watch( //esperamos que reciba las imágenes de la base de datos
					function(){
						return controllers.dots;
					},
					function(){
						if(controllers.dots !== 0){
							createDots(controllers.dots);
							$compile( e )(s);
						}
					});
				function createDots(n){
					for (var i = 0; i < n; i++) {
						$(e).append('<figure dot="'+i+'" ng-click="dot('+i+')"></figure>');
					}
				}
			}
		};
	}]);*/
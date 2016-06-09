angular.module('app')
	.directive('loading', ['$rootScope', function($rootScope){
		return {
			restrict : 'E',
			templateUrl : '../app/components/loading/loading.html',
			controllerAs : 'loading',
			controller: function ($scope){

			},
			link : function (s, e, a, c){
				//var b = $("#line2").get(0).getTotalLength();
				//console.log(b);
				//paths

				var fp = function(){
					var b = $("#fp").get(0).getTotalLength();
					TweenLite.set("#fp",{'stroke-dasharray' : b, 'stroke-dashoffset': b});
					TweenLite.to("#fp",2,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*2, delay: 0});
					if(!$rootScope.loaded){
						TweenLite.to("#fp",2,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*3, delay: 2, onComplete : function(){
							fp();
						}});
					}
				};
				fp();

				var sp = function(){
					var b = $("#sp").get(0).getTotalLength();
					TweenLite.set("#sp",{'stroke-dasharray' : b, 'stroke-dashoffset': b});
					TweenLite.to('#sp', 0,{'stroke' : '#FFFFFF', delay : 0.8});
					TweenLite.to('#sp', 0,{'stroke' : '#323F4F', delay : 3.9});

					TweenLite.to("#sp",1,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*2, delay: 0.75});
					if(!$rootScope.loaded){
						TweenLite.to("#sp",1,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*3, delay: 2.5, onComplete : function(){
							setTimeout(function(){sp();},500);
							TweenLite.set('#sp',{'stroke' : '#323F4F'});
						}});
					}
				};
				sp();

				var tp = function(){
					var b = $("#tp").get(0).getTotalLength();
					TweenLite.set("#tp",{'stroke-dasharray' : b, 'stroke-dashoffset': b});
					TweenLite.to('#tp', 0,{'stroke' : '#FFFFFF', delay : 0.8});
					TweenLite.to('#tp', 0,{'stroke' : '#323F4F', delay : 3.9});

					TweenLite.to("#tp",1,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*2, delay: 0.75});
					if(!$rootScope.loaded){
						TweenLite.to("#tp",1,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*3, delay: 2.5, onComplete : function(){
							setTimeout(function(){tp();},500);
							TweenLite.set('#tp',{'stroke' : '#323F4F'});
						}});
					}
				};
				tp();

				var line1 = function(){
					var b = $("#line1").get(0).getTotalLength();
					TweenLite.set("#line1",{'stroke-dasharray' : b, 'stroke-dashoffset': b, 'stroke' : '#323F4F'});
					TweenLite.to('#line1', 0,{'stroke' : '#FFFFFF', delay : 0.4});
					TweenLite.to('#line1', 0,{'stroke' : '#323F4F', delay : 3.9});

					TweenLite.to("#line1",0.75,{ ease: Power2.easeInOut, 'stroke-dashoffset':  b*2, delay: 0.25});
					if(!$rootScope.loaded){
						TweenLite.to("#line1",0.75,{ ease: Power2.easeInOut, 'stroke-dashoffset':  b*3, delay: 3, onComplete : function(){
							setTimeout(function(){line1();},250);
							TweenLite.set('#line1',{'stroke' : '#323F4F'});
						}});
					}
				};

				line1();
				var line2 = function(){
					var b = $("#line2").get(0).getTotalLength();
					TweenLite.set("#line2",{'stroke-dasharray' : b, 'stroke-dashoffset': b, 'stroke' : '#323F4F'});
					TweenLite.to('#line2', 0,{'stroke' : '#FFFFFF', delay : 0.4});
					TweenLite.to('#line2', 0,{'stroke' : '#323F4F', delay : 3.9});

					TweenLite.to("#line2",0.75,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*2, delay: 0.25});
					if(!$rootScope.loaded){
						TweenLite.to("#line2",0.75,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*3, delay: 3, onComplete : function(){
							setTimeout(function(){line2();},250);
							TweenLite.set('#line2',{'stroke' : '#323F4F'});
						}});
					}
				};
				line2();
				var line3 = function(){
					var b = $("#line3").get(0).getTotalLength();
					TweenLite.set("#line3",{'stroke-dasharray' : b, 'stroke-dashoffset': b, 'stroke' : '#323F4F'});
					TweenLite.to('#line3', 0,{'stroke' : '#FFFFFF', delay : 0.4});
					TweenLite.to('#line3', 0,{'stroke' : '#323F4F', delay : 3.9});

					TweenLite.to("#line3",0.75,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*2, delay: 0.25, onComplete : function(){
						if($rootScope.loaded){
							unShow();		
						}
					}});
					if(!$rootScope.loaded){
						TweenLite.to("#line3",0.75,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*3, delay: 3, onComplete : function(){
							setTimeout(function(){line3();},250);
							TweenLite.set('#line3',{'stroke' : '#323F4F'});
						}});
					}
				};
				line3();
				//other
				//change default body color
				$('body').css({'background-color' : '#F7F7F7'});

				$rootScope.$watch('loaded', function(){
					if($rootScope.loaded){
						onLoad();		
					}
				});
				function unShow(){
					if(!$rootScope.animated){
						$rootScope.animated = true;
						TweenMax.set('.views-container', {scale: 0.95, opacity : 0.5});

						TweenLite.to(e, 2 ,{scale : 1.5, delay : 1});
						TweenLite.to(e, 0.5 ,{opacity: 0, delay : 1, onComplete: function(){
							TweenLite.set(e,{'display': 'none', delay: 1});
						}});

						TweenMax.to('.views-container', 0.75, { scale: 1, opacity: 1, delay: 1});
					}
				}
				function onLoad(){
					//$(e).css({opacity: 0});
					$('html, body').animate({ scrollTop: 0 }, 0);
					/*$('#line1').addClass('loaded-stroke');
					$('#line2').addClass('loaded-stroke');
					$('#line3').addClass('loaded-stroke');
					$('#sp').addClass('loaded-stroke');
					$('#tp').addClass('loaded-stroke');*/
				}
			}
		};
	}]);


	/*
	//var b = $("#line2").get(0).getTotalLength();
				//console.log(b);
				//paths

				var fp = function(){
					var b = $("#fp").get(0).getTotalLength();
					TweenLite.set("#fp",{'stroke-dasharray' : b, 'stroke-dashoffset': b});
					TweenLite.to("#fp",1.5,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*2, delay: 0});
					TweenLite.to("#fp",1.5,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*3, delay: 1.5, onComplete : function(){
						fp();
					}});
				};
				fp();

				var sp = function(){
					var b = $("#sp").get(0).getTotalLength();
					TweenLite.set("#sp",{'stroke-dasharray' : b, 'stroke-dashoffset': b});
					TweenLite.to('#sp', 0,{'stroke' : '#FFFFFF', delay : 0.6});
					TweenLite.to('#sp', 0,{'stroke' : '#323F4F', delay : 2.9});

					TweenLite.to("#sp",0.75,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*2, delay: 0.5});
					TweenLite.to("#sp",0.75,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*3, delay: 2.25, onComplete : function(){
						sp();
						TweenLite.set('#sp',{'stroke' : '#323F4F'});
					}});
				};
				sp();

				var tp = function(){
					var b = $("#tp").get(0).getTotalLength();
					TweenLite.set("#tp",{'stroke-dasharray' : b, 'stroke-dashoffset': b});
					TweenLite.to('#tp', 0,{'stroke' : '#FFFFFF', delay : 0.6});
					TweenLite.to('#tp', 0,{'stroke' : '#323F4F', delay : 2.9});

					TweenLite.to("#tp",0.75,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*2, delay: 0.5});
					TweenLite.to("#tp",0.75,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*3, delay: 2.25, onComplete : function(){
						tp();
						TweenLite.set('#tp',{'stroke' : '#323F4F'});
					}});
				};
				tp();

				var line1 = function(){
					var b = $("#line1").get(0).getTotalLength();
					TweenLite.set("#line1",{'stroke-dasharray' : b, 'stroke-dashoffset': b, 'stroke' : '#323F4F'});
					TweenLite.to('#line1', 0,{'stroke' : '#FFFFFF', delay : 0.4});
					TweenLite.to('#line1', 0,{'stroke' : '#FFFFFF', delay : 2.9});

					TweenLite.to("#line1",0.5,{ ease: Power2.easeInOut, 'stroke-dashoffset':  b*2, delay: 0.25});
					TweenLite.to("#line1",0.5,{ ease: Power2.easeInOut, 'stroke-dashoffset':  b*3, delay: 2.5, onComplete : function(){
						line1();
						TweenLite.set('#line1',{'stroke' : '#323F4F'});
					}});
				};

				line1();
				var line2 = function(){
					var b = $("#line2").get(0).getTotalLength();
					TweenLite.set("#line2",{'stroke-dasharray' : b, 'stroke-dashoffset': b, 'stroke' : '#323F4F'});
					TweenLite.to('#line2', 0,{'stroke' : '#FFFFFF', delay : 0.4});
					TweenLite.to('#line2', 0,{'stroke' : '#FFFFFF', delay : 2.9});

					TweenLite.to("#line2",0.5,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*2, delay: 0.25});
					TweenLite.to("#line2",0.5,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*3, delay: 2.5, onComplete : function(){
						line2();
						TweenLite.set('#line2',{'stroke' : '#323F4F'});
					}});
				};
				line2();
				var line3 = function(){
					var b = $("#line3").get(0).getTotalLength();
					TweenLite.set("#line3",{'stroke-dasharray' : b, 'stroke-dashoffset': b, 'stroke' : '#323F4F'});
					TweenLite.to('#line3', 0,{'stroke' : '#FFFFFF', delay : 0.4});
					TweenLite.to('#line3', 0,{'stroke' : '#FFFFFF', delay : 2.9});

					TweenLite.to("#line3",0.5,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*2, delay: 0.25});
					TweenLite.to("#line3",0.5,{ ease: Power2.easeInOut, 'stroke-dashoffset': b*3, delay: 2.5, onComplete : function(){
						line3();
						TweenLite.set('#line3',{'stroke' : '#323F4F'});
					}});
				};
				line3();
				//other
				//change default body color
				$('body').css({'background-color' : '#F7F7F7'});

				$rootScope.$watch('loaded', function(){
					if($rootScope.loaded){
						onLoad();		
					}
				});

				function onLoad(){
					//$(e).css({opacity: 0});
				}
	*/
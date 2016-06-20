angular.module('app').directive('ngHeader', function ($location, $document, scrollService, $window) {
  return {
    restrict: 'EA',
    templateUrl: '../app/components/header/header.html',
    controllerAs: 'header',
    controller: function ($scope) {
    	//code
    	
    	$scope.open = false;
    	$scope.textOpenClose = 'Menu';
    	$scope.hideOnScroll = false;
    	$scope.withBackground = false;
    },
    link : function (s,e,a,c){
    	var tl = new TimelineLite();
    	var t3 = new TimelineLite();
    	var t2 = new TimelineLite();

		$document.bind('mousewheel DOMMouseScroll touchmove scroll', function(e){
			if(s.open){
				s.open = false;	
				animateMenu('close');
				animateMenuMobile(s.open);					
			}
			if($(window).scrollTop() < 50){
				printBackground();
				s.hideOnScroll = false;
			}
		});

		$document.bind('touchmove', function(e){
			var dir = scrollService.getDirectionOnTouchMove(e);

			s.hideOnScroll = (dir == "down") ? true : false;
			printBackground();
		});

		function printBackground(){
			var state = $location.$$path.split('/')[1] || 'home';
			s.withBackground = (($(window).scrollTop() > $(window).height()) || state == 'home' || state == 'about' || state == 'services' || state == 'work') ? true : false;
		}

		setTimeout(function(){printBackground();},200);
		

    	s.backHome = function(){
    		s.open = false;
    		t2.to('ul.header-ul',0.4,{
    			x: '50px',
    		   	opacity: '0',
    		    ease:Circ.easeIn,
    		    delay : 0.2
    		});
    		animateMenu('close');

    		if($location.$$path === '/'){
    			$('html, body').animate({ scrollTop: 0 }, 'slow');
    		}
    	};

    	s.menuOpen = function (){
    		var state = $location.$$path.split('/')[1] || 'home';

    		s.open = !s.open;
    		if(s.open){ 
    			tl.set('ul.header-ul li',{x:'650px', opacity: '0'});
				t3.staggerTo('ul.header-ul li', 0.5, {
					x: '0px',
			    	opacity: '0.5',
			    	ease:Circ.easeOut,
			    	onComplete : function(){    		
			    		$('li[state="'+state+'"]').css({
    						opacity: '1'
    					});}
			  	}, 0.06);

			 	t2.set('ul.header-ul', {x: '250px', opacity: '1'});
			   	t2.to('ul.header-ul',0.8,{
			   		x: '0px',
			    	ease:Circ.easeOut
			   	});
				animateMenu('open');
    		}else{
    			t2.to('ul.header-ul',0.4,{
    				x: '50px',
    			   	opacity: '0',
    			    ease:Circ.easeIn,
    			    delay : 0.2
    			});
    			animateMenu('close');
    		}
    	};
    	function animateMenu(state){
    		if(state == 'close'){
    			TweenMax.to("#mov1", 0.5, {attr:{d:"M35,38 C39,38 41,38 45,38"}});
    			TweenMax.to("#mov2", 0.5, {attr:{d:"M45,38 C49,38 51,38 55,38"}});

    			TweenMax.to("#mov3", 0.5, {attr:{x1:"35", 'stroke-opacity' : "1"}});
    			TweenMax.to("#mov4", 0.5, {attr:{x2:"55", 'stroke-opacity' : "1"}});

    			TweenMax.to("#mov5", 0.5, {attr:{d:"M35,52 C39,52 41,52 45,52"}});
    			TweenMax.to("#mov6", 0.5, {attr:{d:"M45,52 C49,52 51,52 55,52"}});
    			s.textOpenClose = 'Menu';
    		}else{
    			TweenMax.to("#mov1", 0.5, {attr:{d:"M35,35 C39,39 41,41 45,45"}});
				TweenMax.to("#mov2", 0.5, {attr:{d:"M45,45 C49,41 51,39 55,35"}});

				TweenMax.to("#mov3", 0.5, {attr:{x1:"45", 'stroke-opacity' : "1"}});
				TweenMax.to("#mov4", 0.5, {attr:{x2:"45", 'stroke-opacity' : "1"}});

				TweenMax.to("#mov5", 0.5, {attr:{d:"M35,55 C39,51 41,49 45,45"}});
				TweenMax.to("#mov6", 0.5, {attr:{d:"M45,45 C49,49 51,51 55,55"}});
				s.textOpenClose = "Close";
    		}
    	}

    	function animateMenuMobile(state){
    		if(state){ //open
    			TweenMax.to("#mov12", 0.5, {attr:{y2:"12", x1: "6"}});
    			TweenMax.to("#mov22", 0.5, {attr:{y1:"12", x2: "18"}});

    			TweenMax.to("#mov32", 0.5, {attr:{x1:"12", 'stroke-opacity' : "0"}});
    			TweenMax.to("#mov42", 0.5, {attr:{x2:"12", 'stroke-opacity' : "0"}});

    			TweenMax.to("#mov52", 0.5, {attr:{y2:"12", x1: "6"}});
    			TweenMax.to("#mov62", 0.5, {attr:{y1:"12", x2: "18"}});

 				s.textOpenClose = "Close";   			
    		}else{//close
    			TweenMax.to("#mov12", 0.5, {attr:{y2:"6", x1: "2"}});
				TweenMax.to("#mov22", 0.5, {attr:{y1:"6", x2: "22"}});

				TweenMax.to("#mov32", 0.5, {attr:{x1:"2", 'stroke-opacity' : "1"}});
				TweenMax.to("#mov42", 0.5, {attr:{x2:"22", 'stroke-opacity' : "1"}});

				TweenMax.to("#mov52", 0.5, {attr:{y2:"18", x1: "2"}});
				TweenMax.to("#mov62", 0.5, {attr:{y1:"18", x2: "22"}});

				s.textOpenClose = 'Menu';
    		}
    	}

    	s.openMobileMenu = function(){
    		s.open = !s.open;
    		animateMenuMobile(s.open);
    		setTimeout(function(){printBackground();},800);
    		if(s.open){
    			var state = $location.$$path.split('/')[1] || 'home';
    			tl.set('ul.header-ul li',{y:'100px', opacity: '0'});
				t3.staggerTo('ul li', 0.3, {
					y: '0px',
			    	opacity: '0.5',
			    	ease:Circ.easeOut,
			    	onComplete : function(){    		
			    		$('li[state="'+state+'"]').css({
    						opacity: '1'
    					});}
			  	}, 0.05);
    		}else{
				t2.staggerTo('ul li', 0.3, {
					y: '100px',
			    	opacity: '0',
			    	ease:Circ.easeIn,
			    	delay: 0.2
			  	}, -0.05);
    		}
    	};
    }
  };
});
/*
d="M29,26.688l10,5"/>
d="M39,31.688l9.8-5"/>
x1="29" y1="31.688" x2="39" y2="31.688"/>
x1="38.8" y1="31.688" x2="48.8" y2="31.688"/>
d="M29,36.688l10-5"/>
d="M39,31.688l9.8,5"/>
*/
angular.module('app')
	.directive('headerState', ['screenService', '$document', '$timeout','$interval', function(screenService, $document, $timeout, $interval) {
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

				function changeHeader(){
					if(scrollHandling.allow){
						scrollHandling.allow = false;
						$timeout(function() {
							scrollHandling.reallow();
							if(s.state != screenService.getHeaderState()){
								TweenLite.to('header-state', 0.35, {opacity: '0', onComplete: function(){
									s.state = screenService.getHeaderState();
									s.$digest();
									TweenLite.to('header-state', 0.35, {opacity: '1'});
								}});
							}
						}, scrollHandling.delay);
					}
				}

				var aa = $interval(function(){
					changeHeader();
				}, 1000);

				$document.bind('mousewheel DOMMouseScroll touchmove scroll', function(){
					changeHeader();
					if(screenService.getHeaderState() !== ""){
						$interval.cancel(aa);
					}
				});
			}
		};
	}]);


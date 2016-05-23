angular.module('app').directive('appHome', function (ContactService, $timeout, $document, $window) {
  return {
    restrict: 'EA',
    templateUrl: '../app/views/home/home.html',
    controllerAs: 'appHome',
    controller: function ($scope) {
    	var state = 0;
    	var delay = 2000; //ms

    	$scope.item1 = {
    		img : "/assets/img/home2.jpg",
    		title : 'UN Women Timeline',
    		subtitle : 'Interactive web'
    	};
    	$scope.item2 = {
    		img : "/assets/img/home2.jpg",
    		title : 'NBA Top Players',
    		subtitle : 'Interactive infographics'
    	};
    	$scope.item3 = {
    		img : "/assets/img/home2.jpg",
    		title : 'UN Women Timeline',
    		subtitle :' Interactive web'
    	};

    	//logos client
    	$scope.client_logos = [
    		"/assets/img/client-1.png", 
    		"/assets/img/client-2.png", 
    		"/assets/img/client-3.png", 
    		"/assets/img/client-4.png"
    	];

    	//logos press
    	$scope.press_logos = [
    		"/assets/img/press-1.png", 
    		"/assets/img/press-2.png", 
    		"/assets/img/press-3.png", 
    		"/assets/img/press-4.png",
    		"/assets/img/press-5.png", 
    		"/assets/img/press-6.png", 
    		"/assets/img/press-7.png", 
    		"/assets/img/press-8.png",
    	];

    	//cites
    	$scope.cites = [
    		{
    			name : "Cristina Justo",
    			job : "Gerente de comunicación",
    			cite : "« ElkanoData utiliza los nuevos formatos para lograrlo. Aúnan profesionalidad y capacidad de innovación. Sin lugar a duda, un partner de calidad. »"
    		},
    		{
    			name : "Cristiano Injusto",
    			job : "Comunicación de gerentes",
    			cite : "« Sapiente numquam, tempora ducimus repudiandae! Illo molestias nulla, alias ullam. Deleniti magni, beatae at sequi recusandae cum odio odit molestias veniam corporis? »"
    		},
    		{
    			name : "Justinio Cristo",
    			job : "El gerente",
    			cite : "« Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat odio laboriosam molestias? »"
    		}
		];
		var anim = function (){
			var time_animation = 0.75;
			//hide
			
			TweenLite.fromTo('article[state="'+state+'"] > cite', time_animation, {left: '0px', opacity:'1'},{left: '-50px', opacity:'0'});
			TweenLite.fromTo('article[state="'+state+'"] > p', time_animation, {y: '0px', opacity:'1'},{y: '30px', opacity:'0', onComplete : function () {TweenLite.set('article[state="'+state+'"]', {'display': 'none'}); if(state >= ($scope.cites.length-1)){state=0;}else{state++;} show();}});
			TweenLite.fromTo('article[state="'+state+'"] > hr', time_animation, {width: '25%', opacity:'1'},{width: '0%', opacity:'0'});
			//state control
			//show
			function show(){
				TweenLite.set('article[state="'+state+'"]', {'display': 'block'});
				TweenLite.fromTo('article[state="'+state+'"] > cite', time_animation, {left: '50px', opacity:'0'},{left: '0px', opacity:'1'});
				TweenLite.fromTo('article[state="'+state+'"] > p', time_animation, {y: '30px', opacity:'0'},{y: '0px', opacity:'1', onComplete : function () {$timeout(function () {anim();},delay);}});
				TweenLite.fromTo('article[state="'+state+'"] > hr', time_animation, {width: '0%', opacity:'0'},{width: '25%', opacity:'1'});	
			}
		};
		anim();
    }
  };
});

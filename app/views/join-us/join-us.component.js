angular.module('app').directive('appJoinUs', function ($rootScope, preloader, $location, $anchorScroll, $sce) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/join-us/join-us.html',
    controllerAs: 'appJoinUs',
    controller: function ($scope) {
        $( window ).load( function(){
            setTimeout(function(){
                $rootScope.loaded = preloader.load('all');  
            },1000);
        });
        $scope.goOffers = function(){
            $("html, body").animate({ scrollTop: $('#join-us-section-3').offset().top }, 1000);
        };
    	$scope.active = function(e){
    		var element = $(e.currentTarget).find('.content');
    		var v = $(e.currentTarget).find('.v');
    		if($(e.currentTarget).hasClass('active')){
    			$(e.currentTarget).removeClass('active');
    			TweenLite.to(v,0.350,{height: "100%"});
    			$( element ).slideUp( 350 , 'easeInOutQuart', function() {
    				// Animation complete.
  				});	
    		}else{
    			$(e.currentTarget).addClass('active');
    			TweenLite.to(v,0.350,{height: "0%"});
    			$( element ).slideDown( 350 , 'easeInOutQuart', function() {
    				// Animation complete.
  				});
    		}
    	};
    	$scope.jobs = [
    	{
    		title: 'Junior illustrator',
    		content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit libero magni quis rem aliquam ipsa eligendi nam! Voluptatum, blanditiis praesentium odit, sit ipsum, nisi qui reprehenderit porro quo beatae nam.'
    	},
    	{
    		title: 'Senior front-end developer',
    		content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia maiores dolorem, quis qui perferendis, hic commodi tenetur ea ad aliquam harum eum sint rem odio omnis, neque! Hic, modi ex.'
    	},    	
    	{
    		title: 'Senior UX-UY designer',
    		content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse suscipit cupiditate quo consectetur impedit sit repellendus dolores nemo. Fuga nostrum facere, natus. Saepe alias ut sit, maiores debitis dolorum nam.'
    	}];

    	$scope.members = [
    	{
    		name: 'Pau Cuervo',
    		job : 'Founder & CEO',
    		video : 'https://player.vimeo.com/external/170437537.sd.mp4?s=22a53709bf844d03a09fcc023126f47df176dbc8&profile_id=164',
            img : '/assets/img/busto-pau.jpg',
    		main : true
    	},
    	{
    		name: 'Michael Richey ',
    		job : 'Creative Director',
    		video : 'https://player.vimeo.com/external/170437617.sd.mp4?s=afeb95db4defdfbec40afbbc63757bd47e2a0e23&profile_id=164',
            img : '/assets/img/busto-michael.jpg',
    		main : false
    	},   
        {
            name: 'Sofia Soldevila',
            job : 'Project Manager',
            video : 'https://player.vimeo.com/external/170437562.sd.mp4?s=fe6c7f7e6f286cf62fb1048cacbf18dd25731503&profile_id=164',
            img : '/assets/img/busto-sofia.jpg',
            main : false
        }, 	
    	{
    		name: 'Cristiam Da Silva',
    		job : 'CTO',
    		video : 'https://player.vimeo.com/external/170437419.sd.mp4?s=62a908795a5bc1d4ee0d9df17c26ba481d61acfa&profile_id=165',
            img : '/assets/img/busto-cristiam.jpg',
    		main : false
    	},
    	{
    		name: 'Oscar Girones',
    		job : 'Lead Motion Designer',
    		video : 'https://player.vimeo.com/external/170437521.sd.mp4?s=0b2c47f41b48db96d6f61d1e48e623ee17445318&profile_id=165',
            img : '/assets/img/busto-oscar.jpg',
    		main : false
    	},
    	{
    		name: 'Andrea',
    		job : 'Illustrator',
    		video : 'https://player.vimeo.com/external/170437337.sd.mp4?s=497639fc770b01dbf918d4f050ab25d1dac56d1d&profile_id=164',
            img : '/assets/img/busto-andrea.jpg',
    		main : false
    	},
    	{
    		name: 'Maud Cassiere',
    		job : 'Lead Designer',
    		video : 'https://player.vimeo.com/external/170437493.sd.mp4?s=d372d9bc1ab93bfdf661c1de31fe7697bb699adb&profile_id=165',
            img : '/assets/img/busto-maud.jpg',
    		main : false
    	},
    	{
    		name: 'Jordi Campeny',
    		job : 'Front End Developer',
    		video : 'https://player.vimeo.com/external/170437480.sd.mp4?s=4e9270cd51895d3e17a515ee7cbf5526f3926d20&profile_id=165',
            img : '/assets/img/busto-jordi.jpg',
    		main : false
    	},
    	{
    		name: 'Berta Terassa',
    		job : 'Motion Designer',
    		video : 'https://player.vimeo.com/external/170437397.sd.mp4?s=fcf6c436cc1b65e86f88b3dd8338ea7c585f5deb&profile_id=165',
            img : '/assets/img/busto-berta.jpg',
    		main : false
    	}];
    
    }
  };
});

angular.module('app').directive('appJoinUs', function () {
  return {
    restrict: 'E',
    templateUrl: '../app/views/join-us/join-us.html',
    controllerAs: 'appJoinUs',
    controller: function ($scope) {

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
    		video : '/assets/img/video-thumb.png',
    		main : true
    	},
    	{
    		name: 'Michael Richey ',
    		job : 'Creative Director',
    		video : '/assets/img/video-thumb.png',
    		main : true
    	},    	
    	{
    		name: 'Cristiam Da Silva',
    		job : 'CTO',
    		video : '/assets/img/video-thumb.png',
    		main : true
    	},
    	{
    		name: 'Oscar Girones',
    		job : 'Senior Motion Designer',
    		video : '/assets/img/video-thumb.png',
    		main : false
    	},
    	{
    		name: 'Andrea',
    		job : 'Illustrator',
    		video : '/assets/img/video-thumb.png',
    		main : false
    	},
    	{
    		name: 'Sofia Soldevila',
    		job : 'Project Manage',
    		video : '/assets/img/video-thumb.png',
    		main : false
    	},
    	{
    		name: 'Maud Cassiere',
    		job : 'Graphic Designer',
    		video : '/assets/img/video-thumb.png',
    		main : false
    	},
    	{
    		name: 'Jordi Campeny',
    		job : 'Front End Developer',
    		video : '/assets/img/video-thumb.png',
    		main : false
    	},
    	{
    		name: 'Berta Terassa',
    		job : 'Motion Designer',
    		video : '/assets/img/video-thumb.png',
    		main : false
    	}];
    
    }
  };
});

angular.module('app').directive('appAbout', function ($rootScope, preloader) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/about/about.html',
    controllerAs: 'appAbout',
    controller: function ($scope) {
	    $( window ).load( function(){
	        setTimeout(function(){
              $rootScope.loaded = preloader.load('all');  
          },1000);
	    });
    }
  };
});

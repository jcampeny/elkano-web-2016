angular.module('app').directive('appContact', function ($location, $rootScope, preloader) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/contact/contact.html',
    controllerAs: 'appContact',
    controller: function ($scope) {
        $( window ).load( function(){
            $rootScope.loaded = preloader.load('all');
        });
    	var state = $location.$$path.split("/");
    	var len = state.length-1;
    	$scope.state = state[len];
    	
    	$scope.$on('$stateChangeSuccess', function(){
			state = $location.$$path.split("/");
			len = state.length-1;
    		$scope.state = state[len];
    	});
    }
  };
});

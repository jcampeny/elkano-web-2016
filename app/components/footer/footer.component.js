angular.module('app').directive('ngFooter', function () {
  return {
    restrict: 'EA',
    templateUrl: '../app/components/footer/footer.html',
    controllerAs: 'footer',
    scope: {
    	value : '@',
    	ref : '@'
    },
    controller: function ($scope) {
    	if($scope.value === undefined){
    		$scope.value = 'Start a project';
    	}
    	if($scope.ref === undefined){
			$scope.ref = 'start-a-project';
    	}
    }
  };
});

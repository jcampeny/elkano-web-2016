angular.module('app').directive('appProject',function ($stateParams) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/project/project.html',
    controllerAs: 'appProject',
    controller: function ($scope) {
    	//$stateParams.slug;
    	$scope.slug = $stateParams.slug;
    }
  };
});

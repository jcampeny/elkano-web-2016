angular.module('app').directive('appProject',function ($stateParams) {
  return {
    restrict: 'E',
    templateUrl: '../app/components/project/project.html',
    controllerAs: 'appProject',
    controller: function ($scope) {
    	//$stateParams.slug;
    }
  };
});

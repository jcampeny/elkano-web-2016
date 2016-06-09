angular.module('app').directive('pressForm', function () {
  return {
    restrict: 'E',
    templateUrl: '../app/views/contact/press/press.html',
    controllerAs: 'pressForm',
    controller: function ($scope) {
    	$scope.msg = {
    		name : '',
    		email : '',
    		phone : '',
    		company : '',
    		hear : '',
    		project_about : '',
    		budget : '',
    		start : '',
    		launch : ''
    	};
    }
  };
});

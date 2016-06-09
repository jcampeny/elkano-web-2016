angular.module('app').directive('careerForm', function () {
  return {
    restrict: 'E',
    templateUrl: '../app/views/contact/career/career.html',
    controllerAs: 'careerForm',
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

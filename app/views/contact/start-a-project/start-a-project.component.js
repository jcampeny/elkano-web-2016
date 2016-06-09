angular.module('app').directive('startAProjectForm', function () {
  return {
    restrict: 'E',
    templateUrl: '../app/views/contact/start-a-project/start-a-project.html',
    controllerAs: 'startAProjectForm',
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

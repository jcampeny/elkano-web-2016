angular.module('app')
	.directive('appProject',['$stateParams', 'DataService', function ($stateParams, DataService) {
		return {
		    restrict: 'E',
		    templateUrl: '../app/views/project/project.html',
		    controllerAs: 'appProject',
		    controller: function ($scope) {
		    	$scope.slug = $stateParams.slug;

		    	DataService.all('project', 'all', 10).then(function(posts) {
		    		angular.forEach(posts, function(customPost, i){
		    			if($stateParams.slug == customPost.slug){
		    				$scope.project = DataService.getInfoFromCategory(customPost);
		    			}
		    		});
		    	});
		    }
		};
	}]);


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

		    	$scope.project = {
		    		title : 'Title 1',
		    		content : 'Client',
		    		img1 : '/assets/img/home1.jpg',
		    		imgColor : 'white',
		    		video : 'aaa',
		    		question : 'Need a Motion?',
		    		title2: 'Title 2',
		    		content2 : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dicta alias illo pariatur ipsa totam itaque, ut unde, est nostrum natus assumenda eaque illum ea nobis eveniet delectus aliquam laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dicta alias illo pariatur ipsa totam itaque, ut unde, est nostrum natus assumenda eaque illum ea nobis eveniet delectus aliquam laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dicta alias illo pariatur ipsa totam itaque, ut unde, est nostrum natus assumenda eaque illum ea nobis eveniet delectus aliquam laborum.',
    				img21 : '/assets/img/home1.jpg',
    				img22 : '/assets/img/home2.jpg',
    				img23 : '/assets/img/contact1.jpg',
		    	};
		    }
		};
	}]);


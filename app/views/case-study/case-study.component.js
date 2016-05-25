angular.module('app').directive('appCaseStudy', function ($stateParams, DataService) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/case-study/case-study.html',
    controllerAs: 'appCaseStudy',
    controller: function ($scope) {
    	$scope.slug = $stateParams.slug;
    	$scope.otherslug = 'UNWomen';
    	$scope.case = {
    		title : 'Title 1',
            content : 'Spotify content',
    		img1 : '/assets/img/home1.jpg',
    		img1color : 'white',
    		title2 : 'Start of a relationship',
    		content2 : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dicta alias illo pariatur ipsa totam itaque, ut unde, est nostrum natus assumenda eaque illum ea nobis eveniet delectus aliquam laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dicta alias illo pariatur ipsa totam itaque, ut unde, est nostrum natus assumenda eaque illum ea nobis eveniet delectus aliquam laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dicta alias illo pariatur ipsa totam itaque, ut unde, est nostrum natus assumenda eaque illum ea nobis eveniet delectus aliquam laborum.',
    		cite : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    		citename : 'Client Name',
    		title3 : 'Challenge',
    		content3 : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla a corporis laudantium deserunt ad quisquam aspernatur quo, eum, nihil, minima perspiciatis nobis. Mollitia ullam quo consectetur qui pariatur quasi voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt dolor commodi ullam sint cupiditate dolorum beatae doloribus. Et, quas ratione. Assumenda earum hic doloremque odit itaque, iure facere, harum consequatur?',
    		img2 : '/assets/img/join-us2.jpg',
    		img3 : '/assets/img/join-us3.jpg',
    		title4 : 'Our response',
    		content4 : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla a corporis laudantium deserunt ad quisquam aspernatur quo, eum, nihil, minima perspiciatis nobis. Mollitia ullam quo consectetur qui pariatur quasi voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt dolor commodi ullam sint cupiditate dolorum beatae doloribus. Et, quas ratione. Assumenda earum hic doloremque odit itaque, iure facere, harum consequatur?',
    	};

    	$scope.lastproject = {
    		title : 'Project 1',
    		category : 'Interactive',
    		img : '/assets/img/home1.jpg',
    		imgcolor : 'white',
    		slug : 'project-1'
    	};

    	$scope.projects = [
    		{
    			title : 'Project Title 1',
    			category : 'Infographics',
    			content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore similique minus sunt dolorum sed inventore iusto cum, ad assumenda, nisi reprehenderit veritatis distinctio alias voluptates provident molestias ex voluptas nobis.',
    			slug : 'random-slug',
    			img : '/assets/img/join-us2.jpg',
    			imgs : ['/assets/img/join-us1.jpg', '/assets/img/join-us3.jpg']
    		},
    		{
    			title : 'Project Title 2',
    			category : 'Interactive',
    			content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore similique minus sunt dolorum sed inventore iusto cum, ad assumenda, nisi reprehenderit veritatis distinctio alias voluptates provident molestias ex voluptas nobis.',
    			slug : 'random-slug',
    			img : '/assets/img/join-us3.jpg',
    			imgs : ['/assets/img/join-us2.jpg', '/assets/img/join-us1.jpg']
    		},
    		{
    			title : 'Project Title 3',
    			category : 'Motion',
    			content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore similique minus sunt dolorum sed inventore iusto cum, ad assumenda, nisi reprehenderit veritatis distinctio alias voluptates provident molestias ex voluptas nobis.',
    			slug : 'random-slug',
    			img : '/assets/img/join-us1.jpg',
    			imgs : ['/assets/img/join-us2.jpg', '/assets/img/join-us1.jpg', '/assets/img/join-us3.jpg']
    		}
    	];
    }
  };
});

var app = angular.module("app",['templates-dist', 'ui.router', 'ui.bootstrap', 'ngAnimate', 'ngResource', 'pascalprecht.translate'])

	.controller("mainController", [ '$scope', 'ArrayService', '$sce', 'DataService', function($scope, ArrayService,$sce,DataService) {
		
		//DataService.all("type", "per_page", "page").then(function(post) {
			//ex: posts , int || "all", int
		//});
		DataService.all("posts", "all", 10).then(function(post) {
			console.log(post);
		});
	}])

	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$resourceProvider', '$httpProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider, $resourceProvider, $httpProvider) {
			$urlRouterProvider.otherwise("/");

			$stateProvider
				.state('app', 				{url:'/', 						templateUrl: '../app/core/main.html', abstract: true})
				.state('app.home', 			{url:'', 						template: '<app-home></app-home>'})
				.state('app.about', 		{url:'about', 					template: '<app-about></app-about>'})
				.state('app.service', 		{url:'service', 				template: '<app-service></app-service>'})
				.state('app.work', 			{url:'work', 					template: '<app-work></app-work>'})
				.state('app.project', 		{url:'work/project/:slug', 		template: '<app-project></app-project>'})
				.state('app.caseStudy', 	{url:'work/case-study/:slug', 	template: '<app-case-study></app-case-study>'})
				.state('app.join', 			{url:'join-us', 				template: '<app-join-us></app-join-us>'})
				.state('app.contact', 		{url:'contact', 				template: '<app-contact></app-contact>'})
				.state('app.startProject',  {url:'start-a-project',			template: '<app-start-project></app-start-project>'});

			$locationProvider.html5Mode(true);
			$resourceProvider.defaults.stripTrailingSlashes = false;

	}])

	.constant("APPLICATION_CONFIG", {
	    "NAME": "ANGULAR_SLIDES"
	})

	.constant("API_CONFIG", {
	    "BASE_URL": ""
	})

	.run(['$rootScope', '$location', '$window', '$state', function($rootScope, $location, $window, $state){
	     $rootScope.$on('$stateChangeSuccess',
	        function(event){
	            if (!$window.ga)
	            return;
	            //$window.ga('send', 'pageview', { page: $location.path() });
	    });

		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, error) {

		});

	}]);

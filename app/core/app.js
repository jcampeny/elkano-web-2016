var app = angular.module("app",['templates-dist', 'ui.router', 'ui.bootstrap', 'ngAnimate', 'ngResource', 'pascalprecht.translate', 'ng.deviceDetector', "com.2fdevs.videogular", "com.2fdevs.videogular.plugins.controls", "com.2fdevs.videogular.plugins.poster"])

	.controller("mainController", [ '$document', '$scope', 'ArrayService', '$sce', 'DataService', function($document, $scope, ArrayService,$sce,DataService, $location, $anchorScroll) {
		
		//DataService.all("type", "per_page", "page").then(function(post) {
			//ex: posts , int || "all", int
		//});

	}])

	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$resourceProvider', '$httpProvider',
		function($stateProvider, $urlRouterProvider, $locationProvider, $resourceProvider, $httpProvider) {
			$urlRouterProvider.otherwise("/");

			$stateProvider
				.state('app', 				{url:'/', 						templateUrl: '../app/core/main.html', abstract: true})
				.state('app.home', 			{url:'', 						template: '<app-home></app-home>'})
				.state('app.about', 		{url:'about', 					template: '<app-about></app-about>'})
				.state('app.services', 		{url:'services', 				template: '<app-service></app-service>'})
				.state('app.work', 			{url:'work', 					template: '<app-work></app-work>'})
				.state('app.project', 		{url:'work/project/:slug', 		template: '<app-project></app-project>'})
				.state('app.caseStudy', 	{url:'work/case-study/:slug', 	template: '<app-case-study></app-case-study>'})
				.state('app.join', 			{url:'join-us', 				template: '<app-join-us></app-join-us>'})
				.state('app.contact',		{url: 'contact', 				template: '<app-contact></app-contact>'})
				.state('app.contact.start',	{url: '/start-a-project', 		template: '<start-a-project-form></start-a-project-form>'})
				.state('app.contact.career',{url: '/career', 				template: '<career-form></career-form>'})
				.state('app.contact.press',	{url: '/press', 				template: '<press-form></press-form>'});

			$locationProvider.html5Mode(true);
			$resourceProvider.defaults.stripTrailingSlashes = false;

	}])

	.constant("APPLICATION_CONFIG", {
	    "NAME": "ANGULAR_SLIDES"
	})

	.constant("API_CONFIG", {
	    "BASE_URL": ""
	})

	.run(['$rootScope', '$location', '$window', '$state', 'stateService', function($rootScope, $location, $window, $state, stateService){
	     $rootScope.$on('$stateChangeSuccess',
	        function(event){
	        	//console.log($location);
	            if (!$window.ga)
	            return;
	            //$window.ga('send', 'pageview', { page: $location.path() });
	    });

		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, error) {
			stateService.setState(event, toState, toParams, fromState, fromParams, error);
		});

	}]);

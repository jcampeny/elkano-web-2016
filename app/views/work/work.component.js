angular.module('app').directive('appWork', function (DataService, $rootScope, preloader) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/work/work.html',
    controllerAs: 'appWork',
    controller: function ($scope) {
        $( window ).load( function(){
            $rootScope.loaded = preloader.load('window');
        });
        DataService.all("case", "all", 0).then(function(cases){
            //pasa por todos los case para comprobar si es el proyecto principal
            angular.forEach(cases, function(caseStudy, i){
                //pasa por todas las categorias
                if(caseStudy.featured_media !== 0){
                    DataService.getItemById('media', caseStudy.featured_media).then(function(img){
                        var caseStudyContent = {
                            img : img.source_url,
                            title : caseStudy.title.rendered,
                            subtitle : (caseStudy.type == "case") ? 'Case Study' : 'Project',
                            slug : caseStudy.slug,
                            color : img.alt_text
                        };
                        $scope.cases.push(caseStudyContent);
                    });                    
                }

            });
        });
        DataService.all("project", "all", 0).then(function(projects){
            //pasa por todos los project para comprobar si es el proyecto principal
            $rootScope.loaded = preloader.load('db');
            angular.forEach(projects, function(project, i){
                //Si tiene featured media la mostraremos
                if(project.featured_media !== 0){
                    DataService.getItemById('media', project.featured_media).then(function(img){
                        var projectContent = {
                            img : img.source_url,
                            title : project.title.rendered,
                            subtitle : DataService.getChildCategory(project),
                            slug : project.slug,
                            color : img.alt_text
                        };
                        $scope.projects.push(projectContent);
                    });                    
                }

            });
        });

    	$scope.cases = [
    	/*{
    		title : 'Case Study 1',
    		content : 'Spotify',
    		img : '/assets/img/home2.jpg'
    	},
    	{
    		title : 'Case Study 2',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	}*/
        ];

    	$scope.projects = [/*
    	{
    		title : 'Project 1',
    		content : 'Spotify',
    		img : '/assets/img/home2.jpg',
    		color : ''
    	},
    	{
    		title : 'Project 2',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	},
    	{
    		title : 'Project 3',
    		content : 'Un Woman',
    		img : '/assets/img/home2.jpg',
    		color: ''
    	},
    	{
    		title : 'Project 4',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	},
    	{
    		title : 'Project 5',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	},
    	{
    		title : 'Project 6',
    		content : 'Un Woman',
    		img : '/assets/img/home2.jpg',
    		color: ''
    	},
    	{
    		title : 'Project 7',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	},
    	{
    		title : 'Project 8',
    		content : 'Un Woman',
    		img : '/assets/img/home2.jpg',
    		color: ''
    	},
    	{
    		title : 'Project 9',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	},
    	{
    		title : 'Project 10',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	}*/];
    }
  };
});

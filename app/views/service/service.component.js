angular.module('app').directive('appService', function ($rootScope, preloader, DataService, htmlToPlaintext) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/service/service.html',
    controllerAs: 'appService',
    controller: function ($scope) {
        $( window ).load( function(){
            $rootScope.loaded = preloader.load('window');
        });

        DataService.all("project", "all", 0).then(function(projects){
            angular.forEach(projects, function(project){

                if(DataService.getParentCategory(project).slug == 'brand'){
                    DataService.getItemById('media', project.featured_media).then(function(img){
                        $scope.item1 = {
                            img : img.source_url,
                            color: img.alt_text,
                            title : htmlToPlaintext(project.title.rendered),
                            subtitle : DataService.getChildCategory(project),
                            slug : project.slug
                        }; 
                    }); 
                }
                if(DataService.getParentCategory(project).slug == 'animation'){
                    DataService.getItemById('media', project.featured_media).then(function(img){
                        $scope.item2 = {
                            img : img.source_url,
                            color: img.alt_text,
                            title : htmlToPlaintext(project.title.rendered),
                            subtitle : DataService.getChildCategory(project),
                            slug : project.slug
                        }; 
                    }); 
                }
                if(DataService.getParentCategory(project).slug == 'interactive'){
                    DataService.getItemById('media', project.featured_media).then(function(img){
                        $rootScope.loaded = preloader.load('db');
                        $scope.item3 = {
                            img : img.source_url,
                            color: img.alt_text,
                            title : htmlToPlaintext(project.title.rendered),
                            subtitle : DataService.getChildCategory(project),
                            slug : project.slug
                        }; 
                    }); 
                }
            });
        });

        $scope.item1 = {
    		/*img : "/assets/img/home2.jpg",
    		title : 'UN Women Timeline',
    		subtitle : 'Interactive web'*/
    	};
    	$scope.item2 = {
    		/*img : "/assets/img/home2.jpg",
    		title : 'NBA Top Players',
    		subtitle : 'Interactive infographics'*/
    	};
    	$scope.item3 = {
    		img : "/assets/img/home2.jpg",
    		title : 'UN Women Timeline',
    		subtitle :' Interactive web'
    	};
    }
  };
});

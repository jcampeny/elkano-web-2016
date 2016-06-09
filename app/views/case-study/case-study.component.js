angular.module('app').directive('appCaseStudy', function ($stateParams, DataService, $location, $sce, mediaManager,$rootScope, preloader) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/case-study/case-study.html',
    controllerAs: 'appCaseStudy',
    controller: function ($scope,  htmlToPlaintext) {
        $( window ).load( function(){
            $rootScope.loaded = preloader.load('window');
        });
        DataService.all('case', 'all', 0).then(function(cases){
            var exists = false;//404
            angular.forEach(cases, function(cs, i){
                //slug existe y estamos en su página
                if(cs.slug == $stateParams.slug){
                    exists = true;
                    $scope.slug = cs.content.rendered;

                    // Común case study
                    $scope.case = {
                        title :  htmlToPlaintext(cs.title.rendered),
                        content : htmlToPlaintext(cs.content.rendered),
                        img1 : (cs.first_img !== '') ? DataService.getAttrFromImg(cs.first_img, 'src') : '',
                        img1color : (cs.first_img !== '') ? DataService.getAttrFromImg(cs.first_img, 'alt') : '',
                        title2 : cs.title_2,
                        content2 : cs.content_2,
                        cite : cs.images.split(';;;')[0],
                        citename : cs.images.split(';;;')[1],
                        title3 : cs.title_3,
                        content3 : cs.content_3,
                        img2 : (cs.gifs !== '') ? DataService.getAttrFromImg(cs.gifs.split(';;;')[0], 'src') : '',
                        img3 : (cs.gifs !== '') ? DataService.getAttrFromImg(cs.gifs.split(';;;')[1], 'src') : '',
                        title4 : cs.title_4,
                        content4 : cs.content_4,
                    };
                    // end común
                    var ids = [];
                    // Projects
                    //get project id
                    angular.forEach(cs.project, function(idProject, j){
                        ids.push(idProject.ID);
                    });

                    DataService.all('project', 'all', 0).then(function(projects){
                        angular.forEach(projects, function (project, j){
                            if(ids.indexOf(project.id) >= 0){
                                if(ids.indexOf(project.id) === 0){//main project
                                    var gifs = mediaManager.detectTypeMedia(project.gifs.split(";;;"));
                                    $scope.lastproject = {
                                        name : htmlToPlaintext(cs.content.rendered),
                                        title : project.title_2,
                                        content : project.content_2,
                                        category : DataService.getChildCategory(project),
                                        img : (project.video !== '') ? DataService.getAttrFromImg(project.video.split(';;;')[1], 'src') : '',
                                        imgcolor : (project.video !== '') ? DataService.getAttrFromImg(project.video.split(';;;')[1], 'alt') : '',
                                        gifs : gifs,
                                        slug : project.slug
                                    }; 
                                    $rootScope.loaded = preloader.load('db');
                                }else{//others
                                    var imgs = mediaManager.detectTypeMedia(project.gifs.split(";;;"));
                                    var img = mediaManager.detectTypeMedia(project.video);
                                    var aProject = {
                                        title : project.title_2,
                                        important : isImportant(project.pure_taxonomies.other),
                                        isPublic : isPublic(project.pure_taxonomies.other),
                                        category : DataService.getChildCategory(project),
                                        content : project.content_2,
                                        slug : project.slug,
                                        img : img,
                                        imgs : imgs
                                    };
                                    $scope.projects.push(aProject);
                                }
                            }
                        });
                    });
                    //end projects
                }else{//the other case study
                    $scope.otherslug = cs.content.rendered;
                } 
                if(!exists && (i == cases.length - 1)){
                    //future 404
                    $location.path('/404');
                }             
            });

        });

        function isImportant(category){
            var important = false;
            if(category !== undefined){
                angular.forEach(category, function(c, i){
                    if(c.slug == 'important'){
                        important = true;
                    }
                });
            }
            return important;
        }
        function isPublic(category){
            var public = true;
            if(category !== undefined){
                angular.forEach(category, function(c, i){
                    if(c.slug == 'private'){
                        public = false;
                    }
                });
            }
            return public;
        }

    	$scope.case = {

        };

    	$scope.lastproject = {

        };

    	$scope.projects = [
 
    	];
    }
  };
});

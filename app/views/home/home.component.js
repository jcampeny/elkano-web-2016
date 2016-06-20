angular.module('app').directive('appHome', function (DataService, ContactService, $timeout, $document, $window, $rootScope, preloader) {
  return {
    restrict: 'EA',
    templateUrl: '../app/views/home/home.html',
    controllerAs: 'appHome',
    controller: function ($scope) {
        var state = 0;
        var delay = 5000; //ms

        //VIDEO
        $scope.videohome1 = "https://player.vimeo.com/external/170926156.hd.mp4?s=a3a58ce19080dfe46b3dce966650ed52bb6b05e8&profile_id=119";
        /*$scope.item1 = {
            img : "/assets/img/home2.jpg",
            title : 'UN Women Timeline',
            subtitle : 'Interactive web',
            slug : 'un-women'
        };
        $scope.item2 = {
            img : "/assets/img/home2.jpg",
            title : 'NBA Top Players',
            subtitle : 'Interactive infographics',
            slug : 'hola'
        };
        $scope.item3 = {
            img : "/assets/img/home2.jpg",
            title : 'UN Women Timeline',
            subtitle :' Interactive web',
            slug : 'hola'
        };*/

        /*
        * Get main case
        */
        //case/?filter[other]=main-case
        $scope.nextSection = function () {
            $('html, body').animate({ scrollTop: $('#home-section-1 article').offset().top }, 1000);
        };
        DataService.all("case", "all", 0).then(function(cases){
            //pasa por todos los case para comprobar si es un main case (category other)
            angular.forEach(cases, function(caseStudy, i) {
                //evita errores si no tiene la categoria other
                if(caseStudy.pure_taxonomies.other !== undefined){
                    //pasa por todas las categorias
                    angular.forEach(caseStudy.pure_taxonomies.other, function (category, j){
                        //si una de ellas tiene la categoria main-case se obtiene 
                        //la imagen principal y se asignan los valores al item principal
                        if(category.slug == 'main-case'){
                           DataService.getItemById('media', caseStudy.featured_media).then(function(img){
                                $scope.item1 = {
                                    img : img.source_url,
                                    title : caseStudy.title.rendered,
                                    subtitle : (caseStudy.type == "case") ? 'Case Study' : 'Project',
                                    slug : caseStudy.slug,
                                    color : img.alt_text
                                };
                            });
                        }
                    });
                //en caso contrario será el case no importante (siempre tendremos 2)
                }else{
                    DataService.getItemById('media', caseStudy.featured_media).then(function(img){
                        $rootScope.loaded = preloader.load('db');

                         $scope.item2 = {
                             img : img.source_url,
                             title : caseStudy.title.rendered,
                             subtitle : (caseStudy.type == "case") ? 'Case Study' : 'Project',
                             slug : caseStudy.slug,
                             color : img.alt_text
                         };
                     });
                }
            });
        });
        DataService.all("project", "all", 0).then(function(projects){
            //pasa por todos los case para comprobar si es el proyecto principal
            angular.forEach(projects, function(project, i){
                if(project.pure_taxonomies.other !== undefined){
                    //pasa por todas las categorias
                    angular.forEach(project.pure_taxonomies.other, function(category, j){
                        //si una de ellas tiene la categoria hame-rpoject se obtiene 
                        //la imagen principal y se asignan los valores al item3
                        if(category.slug == 'home-project'){
                            DataService.getItemById('media', project.featured_media).then(function(img){
                                $scope.item3 = {
                                    img : img.source_url,
                                    title : project.title.rendered,
                                    subtitle : DataService.getChildCategory(project),
                                    slug : project.slug,
                                    color : img.alt_text
                                };
                            });
                        }
                    });
                }
            });
        });
        DataService.all('media', 'all', 0).then(function(imgs){
            angular.forEach(imgs, function(img, i){
                if(img.alt_text == 'client'){
                    $scope.client_logos.push(img.source_url);
                }
                if(img.alt_text == 'press'){
                    $scope.press_logos.push(img.source_url);
                }
            });
        });
    	//logos client
    	$scope.client_logos = [/*
    		"/assets/img/client-1.png", 
    		"/assets/img/client-2.png", 
    		"/assets/img/client-3.png", 
    		"/assets/img/client-4.png"*/
    	];

    	//logos press
    	$scope.press_logos = [
    		"/assets/img/press-1.png", 
    		"/assets/img/press-2.png", 
    		"/assets/img/press-3.png", 
    		"/assets/img/press-4.png",
    		"/assets/img/press-5.png", 
    		"/assets/img/press-6.png", 
    		"/assets/img/press-7.png", 
    		"/assets/img/press-8.png",
    	];

    	//cites
    	$scope.cites = [
    		{
    			name : "Cristina Justo",
    			job : "Gerente de comunicación",
    			cite : "« ElkanoData utiliza los nuevos formatos para lograrlo. Aúnan profesionalidad y capacidad de innovación. Sin lugar a duda, un partner de calidad. »"
    		},
    		{
    			name : "Cristiano Injusto",
    			job : "Comunicación de gerentes",
    			cite : "« Sapiente numquam, tempora ducimus repudiandae! Illo molestias nulla, alias ullam. Deleniti magni, beatae at sequi recusandae cum odio odit molestias veniam corporis? »"
    		},
    		{
    			name : "Justinio Cristo",
    			job : "El gerente",
    			cite : "« Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat odio laboriosam molestias? »"
    		}
		];
		var anim = function (){
			var time_animation = 0.75;
			//hide
			
			TweenLite.fromTo('article[state="'+state+'"] > cite', time_animation, {left: '0px', opacity:'1'},{left: '-50px', opacity:'0'});
			TweenLite.fromTo('article[state="'+state+'"] > p', time_animation, {/*x: '0px',*/ opacity:'1'},{/*x: '-50px',*/ opacity:'0', onComplete : function () {TweenLite.set('article[state="'+state+'"]', {'display': 'none'}); if(state >= ($scope.cites.length-1)){state=0;}else{state++;} show();}});
			TweenLite.fromTo('article[state="'+state+'"] > hr', time_animation, {/*width: '25%',*/ opacity:'1'},{/*width: '0%',*/ opacity:'0'});
			//state control
			//show
			function show(){
				TweenLite.set('article[state="'+state+'"]', {'display': 'block'});
				TweenLite.fromTo('article[state="'+state+'"] > cite', time_animation, {left: '50px', opacity:'0'},{left: '0px', opacity:'1'});
				TweenLite.fromTo('article[state="'+state+'"] > p', time_animation, {/*x: '50px',*/ opacity:'0'},{/*x: '0px',*/ opacity:'1', onComplete : function () {$timeout(function () {anim();},delay);}});
				TweenLite.fromTo('article[state="'+state+'"] > hr', time_animation, {/*width: '0%',*/ opacity:'0'},{/*width: '25%',*/ opacity:'1'});	
			}
		};
        
        $( window ).load( function(){
            anim();
            $rootScope.loaded = preloader.load('window');
        });
    }
  };
});

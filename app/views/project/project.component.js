angular.module('app')
	.directive('appProject',['$stateParams', 'DataService', '$location', '$sce', 'mediaManager', '$rootScope', 'preloader', function ($stateParams, DataService, $location, $sce, mediaManager, $rootScope, preloader) {
		return {
		    restrict: 'E',
		    templateUrl: '../app/views/project/project.html',
		    controllerAs: 'appProject',
		    controller: function ($scope) {
		    	$( window ).load( function(){
		            $rootScope.loaded = preloader.load('window');
		        });
		    	var type = '';
		    	//second section img/video/iframe
		    	$scope.isVideo = function(item){
		    		var d = new DOMParser();
		    		var p = d.parseFromString(item, "text/html");
		    		var imgDOM = $('img', p); 

		    		//is video
		    		if(item !== undefined && imgDOM.length === 0 && typeof item == 'string' && item.substring(1,7) != "iframe" && item.indexOf("player.vimeo") > 0){
		    			type = 'video';
		    			var split = item.split('+++');
		    			$scope.project.video = {
		    				src : split[0],
		    				img : split[1]
		    			};
		    		}else if(imgDOM.length > 0){ //is img
		    			type = 'img';
		    			$scope.project.video = imgDOM[0].src;
		    		}else if(item !== undefined && typeof item == 'string' && item.substring(1,7) == "iframe"){ //is iframe
		    			type = 'iframe';
		    			var f = new DOMParser();
		    			var t = f.parseFromString(item, "text/html");
		    			var iframeDOM = $('iframe', t); 
		    			if(iframeDOM.length > 0){
		    				$scope.project.video = $sce.trustAsResourceUrl(iframeDOM[0].src);
		    			}		    			
		    		}  		
		    		return type;
		    	};

		    	$scope.slug = $stateParams.slug;
		    	$scope.isBrand = false;
				DataService.all('project', 'all', 0).then(function(posts) {
					var exists = false;//404
			    	
			        $rootScope.loaded = preloader.load('db');

					angular.forEach(posts, function (post, i){
						//encontrado el post
						if(post.slug == $scope.slug){
							var category = DataService.getParentCategory(post);
							var images = DataService.getMediaFromCustomPost(post, 'images');
							var gifs = mediaManager.detectTypeMedia(post.gifs.split(";;;"));
							var styleframes = DataService.getMediaFromCustomPost(post, 'styleframes');							
							exists = true;// NOT 404


							//SLIDER IMG/VIDEO
							if(styleframes.length <= 0){ //isnt slide
								if(typeof post.styleframes == 'string' && post.styleframes.indexOf('/external/') > 0){ //is video
									var videoHtml = post.styleframes.split('+++');
									styleframes = {
										src : videoHtml[0],
										img : videoHtml[1],
										value : 'video'
									};
								}else if(typeof post.styleframes == 'string' && post.styleframes.indexOf('iframe') > 0){ //is iframe
									var f = new DOMParser();
									var t = f.parseFromString(post.styleframes, "text/html");
									var iframeDOM = $('iframe', t); 
									if(iframeDOM.length > 0){
										styleframes = {
											src : $sce.trustAsResourceUrl(iframeDOM[0].src),
											value : 'iframe'
										};
									}
								}
							}
							//END SLIDER IMG/VIDEO

							//3 imgs
							var imgs = {
								img1 : (images[0] === undefined) ? '' : images[0].src,
								img2 : (images[1] === undefined) ? '' : images[1].src,
								img3 : (images[2] === undefined) ? '' : images[2].src,
							};

							//detect brand to change template
							if(category.slug == 'brand'){
								$scope.isBrand = true;
								if(images[0].width > images[0].height){
									$('.first-img-brand').css({width : '84%'});
								}else{
									$('.first-img-brand').css({width : '50%', padding: '0 20px;'});
								}
							}

							//create object
					    	$scope.project = {
					    		title : post.content.rendered,
					    		content : post.pure_taxonomies.client[0].name,
					    		img1 : (post.first_img !== '') ? DataService.getAttrFromImg(post.first_img, 'src') : '',
					    		imgColor : (post.first_img !== '') ? DataService.getAttrFromImg(post.first_img, 'alt') : '',
					    		video : post.video.split(';;;')[0],
					    		question : 'Need a '+DataService.getChildCategory(post)+'?',
					    		title2: post.title_2,
					    		content2 : post.content_2,
			    				img21 : imgs.img1,
			    				img22 : imgs.img2,
			    				img23 : imgs.img3,
			    				title3 : post.title_3,
			    				content3 : post.content_3,
			    				gifs : gifs,
			    				title4 : post.title_4,
			    				content4 : post.content_4,
			    				styleFrames : styleframes,
			    				nextProjectSlug : (posts[i + 1]) ? posts[i + 1].slug : getSeqPost(posts, i, "next"),
			    				previousProjectSlug : (posts[i - 1]) ? posts[i - 1].slug : getSeqPost(posts, i, "prev")
					    	};
						}
						if(!exists && (i == posts.length - 1)){
							//future 404
							$location.path('/404');
						}
					});
				});
				
		    	function getSeqPost(posts, position, direction){
		    		var post;
		    		var len = posts.length - 1;
		    		switch(direction) {
		    		    case "next":
			    		    for (var i = len; i >= 0; i--) {
			    		    	position = ((position + 1) > len) ? 0 : position + 1;
			    		    	if(DataService.isPublic(posts[position])){
			    		    		post = posts[position];
			    		    		i = 0;
			    		    	}
			    		    }
		    		        break;
		    		    case "prev":
			    		    for (var j = len; j >= 0; j--) {
			    		    	position = ((position - 1) > 0) ?  position-1 : len;
			    		    	if(DataService.isPublic(posts[position])){
			    		    		post = posts[position];
			    		    		j = 0;
			    		    	}
			    		    }
		    		        break;
		    		}
		    		return post.slug;
		    	}
		    }
		};
	}]);


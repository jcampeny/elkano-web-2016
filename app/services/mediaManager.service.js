angular.module('app')
	.service('mediaManager', ['$sce', function($sce){
		return {
			detectTypeMedia : detectTypeMedia
		};

		function detectTypeMedia(gifs){
			if(typeof gifs == 'object'){
				angular.forEach(gifs, function(value, i){
				    if(value.indexOf('player.vimeo') < 0){ //is image
				        var d = new DOMParser();
				        var p = d.parseFromString(value, "text/html");
				        var imgDOM = $('img', p); 
				        if(imgDOM.length > 0){
				            gifs[i] = imgDOM[0].src;
				        }
				    }else if(value.indexOf('iframe') > 0){ //is iframe
				        var f = new DOMParser();
				        var t = f.parseFromString(value, "text/html");
				        var iframeDOM = $('iframe', t); 
				        if(iframeDOM.length > 0){
				            gifs[i] = {
				                value : 'iframe',
				                src : $sce.trustAsResourceUrl(iframeDOM[0].src)
				            };
				        }
				    }else{//is video
				        var img = value.split('+++');
				        gifs[i] = {
				            value : 'video',
				            src : value,
				            img : img[1]
				        };
				    }
				});	
			}else{
				gifs = gifs.split(';;;')[0];
			    if(gifs.indexOf('player.vimeo') < 0){ //is image
			        var d = new DOMParser();
			        var p = d.parseFromString(gifs, "text/html");
			        var imgDOM = $('img', p); 
			        if(imgDOM.length > 0){
			            gifs = imgDOM[0].src;
			        }
			    }else if(gifs.indexOf('iframe') > 0){ //is iframe
			        var f = new DOMParser();
			        var t = f.parseFromString(gifs, "text/html");
			        var iframeDOM = $('iframe', t); 
			        if(iframeDOM.length > 0){
			            gifs = {
			                value : 'iframe',
			                src : $sce.trustAsResourceUrl(iframeDOM[0].src)
			            };
			        }
			    }else{//is video
			        var img = gifs.split('+++');
			        gifs = {
			            value : 'video',
			            src : gifs,
			            img : img[1] || img[0]
			        };
			    }
			}
			
		    return gifs;
		}
	}]);
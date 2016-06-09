angular.module('app')
    .filter('htmlToPlaintext', function() {
        return function(text) {
            return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
        };
	})
	.service('htmlToPlaintext', function(){
		return function(text){
			return  text ? String(text).replace(/<[^>]+>/gm, '') : ''; 
		};
	});
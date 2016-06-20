app.animation('.views-container', ['stateService', function(stateService) {
	var time = 1;
	
	return {

		enter: function(e, doneFn) {
			//stateService.getState();

			TweenMax.set(e, {scale: 0.95, opacity : 0});
			TweenMax.to(e, time, { scale: 1, opacity: 1, delay: time, onComplete: function() {doneFn();}});
			
		},

		move: function(e, doneFn) {
		},

		leave: function(e, doneFn) {
			TweenMax.set(e, {  top : '0px', opacity: 1});
			TweenMax.to(e, time, { top: '-400px', opacity: 0, onComplete: function() { $('html, body').animate({ scrollTop: 0 }, 0); doneFn();}});

		}
	};

}]);

app.animation('.contact-forms', ['stateService', function(stateService) {
	var time = 1;
	
	return {

		enter: function(e, doneFn) {
			//stateService.getState();
			h = $(e).height() +"px";
			TweenMax.set(e, {opacity : '0', height: '300px', display: 'none'});
			TweenMax.to(e, time, { opacity: '1', height: h, display: 'block', delay : time, onComplete: function() {doneFn();}});
		},

		move: function(e, doneFn) {
		},

		leave: function(e, doneFn) {
			TweenMax.to(e, time, { opacity : '0', height: '300px', onComplete: function() {doneFn();}});

		}
	};

}]);
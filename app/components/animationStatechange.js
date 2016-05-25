app.animation('.views-container', ['stateService', function(stateService) {
	var time = 1;
	
	return {

		enter: function(e, doneFn) {
			//stateService.getState();

			TweenMax.set(e, {opacity : 0});
			TweenMax.to(e, time*2, { opacity: 1, delay: time, onComplete: function() {doneFn();}});
			
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
			TweenMax.set(e, {opacity : '0'});
			TweenMax.to(e, time, { opacity: '1', onComplete: function() {doneFn();}});
		},

		move: function(e, doneFn) {
		},

		leave: function(e, doneFn) {
			TweenMax.set(e, {  left : '0%'});
			TweenMax.to(e, time, { left: '-100%', onComplete: function() {doneFn();}});

		}
	};

}]);
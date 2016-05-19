app.animation('.views-container', ['stateService', function(stateService) {
	var time = 1;
	
	return {

		enter: function(e, doneFn) {
			//stateService.getState();
			TweenMax.set(e, {left : '100%'});
			TweenMax.to(e, time, { left: '0%', onComplete: function() {doneFn();}});
		},

		move: function(e, doneFn) {
		},

		leave: function(e, doneFn) {
			TweenMax.set(e, {  left : '0%'});
			TweenMax.to(e, time, { left: '-100%', onComplete: function() {doneFn();}});

		}
	};

}]);

app.animation('.views-container', function() {
	return {

		enter: function(e, doneFn) {
			TweenMax.set(e, { left : '100%'});
			TweenMax.to(e, 1, { left: '0%', onComplete: function() {doneFn();}});
		},

		move: function(e, doneFn) {

		},

		leave: function(e, doneFn) {
			TweenMax.set(e, { left : '0%'});
			TweenMax.to(e, 1, { left: '-100%', onComplete: function() {doneFn();}});
		}
	};

});
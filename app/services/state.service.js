angular.module('app')
	.service('stateService', [function (){
		var state = {
			event : '',
			toState : '',
			toParams : '',
			fromState : '',
			fromParams : '',
			error : ''
		};
		return {
			getState : getState,
			setState : setState
		};

		function getState (){
			return state;
		}

		function setState (event, toState, toParams, fromState, fromParams, error){
			state = {
				event : event,
				toState : toState,
				toParams : toParams,
				fromState : fromState,
				fromParams : fromParams,
				error : error
			};
		}
	}]);
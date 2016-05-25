angular.module('app').directive('appWork', function () {
  return {
    restrict: 'E',
    templateUrl: '../app/views/work/work.html',
    controllerAs: 'appWork',
    controller: function ($scope) {
    	$scope.cases = [
    	{
    		title : 'Case Study 1',
    		content : 'Spotify',
    		img : '/assets/img/home2.jpg'
    	},
    	{
    		title : 'Case Study 2',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	}];

    	$scope.projects = [
    	{
    		title : 'Project 1',
    		content : 'Spotify',
    		img : '/assets/img/home2.jpg',
    		color : ''
    	},
    	{
    		title : 'Project 2',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	},
    	{
    		title : 'Project 3',
    		content : 'Un Woman',
    		img : '/assets/img/home2.jpg',
    		color: ''
    	},
    	{
    		title : 'Project 4',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	},
    	{
    		title : 'Project 5',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	},
    	{
    		title : 'Project 6',
    		content : 'Un Woman',
    		img : '/assets/img/home2.jpg',
    		color: ''
    	},
    	{
    		title : 'Project 7',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	},
    	{
    		title : 'Project 8',
    		content : 'Un Woman',
    		img : '/assets/img/home2.jpg',
    		color: ''
    	},
    	{
    		title : 'Project 9',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	},
    	{
    		title : 'Project 10',
    		content : 'Un Woman',
    		img : '/assets/img/home1.jpg',
    		color: 'white'
    	}];
    }
  };
});

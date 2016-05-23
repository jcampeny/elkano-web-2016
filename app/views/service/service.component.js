angular.module('app').directive('appService', function () {
  return {
    restrict: 'E',
    templateUrl: '../app/views/service/service.html',
    controllerAs: 'appService',
    controller: function ($scope) {
        $scope.item1 = {
    		img : "/assets/img/home2.jpg",
    		title : 'UN Women Timeline',
    		subtitle : 'Interactive web'
    	};
    	$scope.item2 = {
    		img : "/assets/img/home2.jpg",
    		title : 'NBA Top Players',
    		subtitle : 'Interactive infographics'
    	};
    	$scope.item3 = {
    		img : "/assets/img/home2.jpg",
    		title : 'UN Women Timeline',
    		subtitle :' Interactive web'
    	};
    }
  };
});

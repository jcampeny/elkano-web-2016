angular.module('app').directive('ngFooter', function () {
  return {
    restrict: 'EA',
    templateUrl: '../app/components/footer/footer.html',
    controllerAs: 'footer',
    scope: {
    	value : '@',
    	ref : '@',
        case : '@'
    },
    controller: function ($scope) {
        $scope.isCase = false;
        $scope.caseValues = {
            ref : '',
            value : ''
        };
    	if($scope.value === undefined){
    		$scope.value = 'Start a project';
    	}
    	if($scope.ref === undefined){
			$scope.ref = '/contact/start-a-project';
    	}
        if($scope.case !== undefined){
            $scope.isCase = true;
            $scope.caseValues.ref = 'work/case-study/' + $scope.case;
            $scope.caseValues.value = 'Case Study ' + $scope.case;
        }
        
        $scope.scrollTop = function () {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        };

    }
  };
});

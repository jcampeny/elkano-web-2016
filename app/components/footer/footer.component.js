angular.module('app').directive('ngFooter', function () {
  return {
    restrict: 'EA',
    templateUrl: '../app/components/footer/footer.html',
    controllerAs: 'footer',
    scope: {
    	value : '@',
    	ref : '@',
        case : '@',
        prev : '@',
        next : '@',
        show : '@'
    },
    controller: function ($scope) {
        $scope.isCase = false;
        $scope.isProject = false;
        $scope.caseValues = {
            ref : '',
            value : ''
        };
        $scope.projectSlug = {
            prev: '',
            next: ''
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
        if($scope.prev !== undefined && $scope.next !== undefined){
           $scope.isProject = true;
           $scope.projectSlug.prev = 'work/project/' + $scope.prev;
           $scope.projectSlug.next = 'work/project/' + $scope.next; 
        }
        $scope.$watch(function(){return $scope.prev;}, function(){
            $scope.projectSlug.prev = 'work/project/' + $scope.prev;
            $scope.projectSlug.next = 'work/project/' + $scope.next; 
        });
        $scope.$watch(function(){return $scope.case;}, function(){
            if($scope.case !== undefined){
                $scope.caseValues.ref = 'work/case-study/' + $scope.case.toLowerCase();
                $scope.caseValues.value = 'Case Study ' + $scope.case;
            }

        });
        $scope.scrollTop = function () {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        };

    }
  };
});

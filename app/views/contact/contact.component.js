angular.module('app').directive('appContact', function ($location, $rootScope, preloader) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/contact/contact.html',
    controllerAs: 'appContact',
    controller: function ($scope) {
        $( window ).load( function(){
            setTimeout(function(){
                $rootScope.loaded = preloader.load('all');  
            },1000);
            
        });

    	stateCheck();
    	
    	$scope.$on('$stateChangeSuccess', function(){
            stateCheck();
    	});

        $('a[ng-class]').hover(
            function(){
                if($scope.state == 'contact'){
                    $(this).siblings().css({opacity : '0.2'});
                }else{
                   $(this).siblings().css({opacity : ''});
                }
                
            },
            function(){
                if($scope.state == 'contact'){
                    $(this).siblings().css({opacity : '1'});
                }else{
                    $(this).siblings().css({opacity : ''});
                }
            }
        );

        function stateCheck(){
            state = $location.$$path.split("/");
            len = state.length-1;
            $scope.state = state[len];
            allActive(); 
        }

        function allActive(){
            if($scope.state == 'contact'){
                $('.left-column').addClass('all-active');
            }else{
                $('.left-column').removeClass('all-active');
            }
        }
    }
  };
});

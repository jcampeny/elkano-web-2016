angular.module('app').directive('pressForm', function (ContactService) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/contact/press/press.html',
    controllerAs: 'pressForm',
    controller: function ($scope) {
    	$scope.msg = {
            type : 'press',
    		name : '',
    		email : '',
    		message : ''
    	};
        $scope.btntxt = 'Submit';
        var canSend = true;
        $scope.submitForm = function(){
            if(canSend){
                canSend = false;
                $scope.btntxt = 'Sending...';
                $('#contact_button_send').css({
                    'background-color': '#34393E',
                    color: '#FFFFFF'
                });
                ContactService.sendContact($scope.msg).then(function(response){
                    if(response > 0){
                        $('.contact-forms').animate({height: '300px', opacity: '0'}, 1000);
                        $('#contact_form').animate({height: '300px', opacity: '0'}, 1000, function(){
                            $(this).css({display : 'none'});
                            $('#message').css({display : 'block'});
                            $('.contact-forms').animate({opacity: '1'}, 1000);
                        });
                    }else{
                        canSend = true;
                        $scope.btntxt = 'Retry';
                        $('#contact_button_send').css({
                            'background-color': '#FFFFFF',
                            color: '#34393E'
                        });
                    }
                }); 
            }
        };
    }
  };
});

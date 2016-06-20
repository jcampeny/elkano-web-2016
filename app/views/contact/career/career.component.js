angular.module('app').directive('careerForm', function (ContactService) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/contact/career/career.html',
    controllerAs: 'careerForm',
    controller: function ($scope) {
/*
        $scope.inputfileresume = 'Attach resume';
        $("#contact-file-resume").change(function(){
            $(".resume").css({
                'background-color' : '#34393E'
            });
            $(".resume > span").css({color: '#FFFFFF'});
            $scope.inputfileresume = 'Uploaded';
        });

        $scope.inputfilecover = 'Attach cover letter';
        $("#contact-file-cover").change(function(){
            $(".cover").css({
                'background-color' : '#34393E'
            });
            $(".cover > span").css({color: '#FFFFFF'});
            $scope.inputfilecover = 'Uploaded';
        });
*/
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
    	$scope.msg = {
            type : 'career',
    		name : '',
            last : '',
    		email : '',
    		phone : '',
    		company : '',
    		portofolio : '',
    		linkedin : '',
    		website : '',
    		hear : ''
    	};
    }
  };
});

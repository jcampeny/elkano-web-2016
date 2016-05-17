angular.module('app').directive('appService', function () {
  return {
    restrict: 'E',
    templateUrl: '../app/views/service/service.html',
    controllerAs: 'appService',
    controller: function ($scope) {
    
    }
  };
});

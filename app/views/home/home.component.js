angular.module('app').directive('appHome', function () {
  return {
    restrict: 'E',
    templateUrl: '../app/views/home/home.html',
    controllerAs: 'appHome',
    controller: function ($scope) {
    
    }
  };
});

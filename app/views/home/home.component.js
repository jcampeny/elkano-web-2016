angular.module('app').directive('appHome', function (ContactService) {
  return {
    restrict: 'E',
    templateUrl: '../app/views/home/home.html',
    controllerAs: 'appHome',
    controller: function ($scope) {

    }
  };
});

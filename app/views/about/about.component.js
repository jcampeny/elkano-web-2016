angular.module('app').directive('appAbout', function () {
  return {
    restrict: 'E',
    templateUrl: '../app/views/about/about.html',
    controllerAs: 'appAbout',
    controller: function ($scope) {
    
    }
  };
});

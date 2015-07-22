var app = angular.module('singular');

app.directive('snglrHeader', function () {
  return {
    restrict: 'E',
    scope: {
      title: '='
    },
    templateUrl: 'app/shared/header/viewHeader.html'
  };
});

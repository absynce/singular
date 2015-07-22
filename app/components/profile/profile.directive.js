var app = angular.module('singular');

app.directive('snglrProfile', function () {
  return {
    restrict: 'E',
    scope: {
      profile: '='
    },
    templateUrl: 'app/components/profile/profile.view.html'
  };
});

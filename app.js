angular.module("singular", [])
    .controller("index", ["$scope", function($scope) {
      $scope.title = 'Developer profile';
      $scope.profile = {
        firstName: 'Michael',
        lastName: 'Owen',
        favoriteLanguage: 'C#',
        favoriteFramework: 'Angular 1.x',
        codingSince: new Date(2011, 08, 17)
      };
    }]);

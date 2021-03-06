(function(){

	var app = angular.module('page', []);

	app.controller('PageController', ['$scope', '$location', function($scope, $location){
		$scope.copyDate = 2016;
		$scope.devTeam = 'JBDev';
		$scope.devLink = 'http://jbdev.me';
		$scope.url = $location.path();
		$scope.pageClass = 'page-admin';
		$scope.pageTitle = $scope.url.slice(1).replace(/\-/g, " ");
		$scope.currentYear = new Date().getFullYear();

		if($scope.currentYear > $scope.copyDate) {
			$scope.copyDate = $scope.copyDate + ' - ' + $scope.currentYear;
		}
	}]);

	app.directive('backLink', ['$window', function($window) {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        elem.bind('click', function () {
          $window.history.back();
        });
      }
    };
  }]);

  app.directive('projectHeader', function() {
		return {
		  restrict: 'E',
		  templateUrl: 'app/shared/header/view.html'
		};
  });

  app.directive('projectFooter', function() {
		return {
		  restrict: 'E',
		  templateUrl: 'app/shared/footer/view.html'
		};
  });

  app.directive('userDashboard', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/dashboard/view.html'
    };
  });

})();
(function(){

	var app = angular.module('users', []);

	app.controller('UserController', ['$http', '$scope', function($http, $scope){
		$scope.users = [];
		$scope.url = 'app/fake-db/users.json';

		$http.get($scope.url).success(function(data){
			$scope.users = data;
		}).error(function(status){
      throw "Whoops, looks like we have no data from" + $scope.url;
    });
	}]);

	app.directive('userInfo', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/user/info/view.html'
    };
  });
  app.directive('userSettingsForm', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/user/settings/form.html'
    };
  });

}());
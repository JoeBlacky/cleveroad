(function(){

	var app = angular.module('products', []);

	app.controller('ProductsController', ['$http', '$scope', function($http, $scope){
		$scope.products = [];
    $scope.url = 'app/fake-db/products.json';

		$http.get($scope.url).success(function(data){
			$scope.products = data;
		}).error(function(status){
      throw "Whoops, looks like we have no data from" + $scope.url;
    });

		$scope.viewLimit = 4;

		$scope.nameLimit = 30;

    $scope.viewMore = function(num){
      $scope.viewLimit += num;
    };
	}]);

  app.controller('ProductDetailController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('app/fake-db/products/' + $routeParams.productId + '.json').success(function(data) {
      $scope.product = data;
    });
  }]);

  app.directive('productsList', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/shared/product/list/view.html'
    };
  });

})();
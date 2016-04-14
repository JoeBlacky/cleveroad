(function(){

	var app = angular.module('products', []);

	app.controller('ProductsController', ['$http', '$scope', function($http, $scope){
		$scope.products = [];

		$http.get('app/products.json').success(function(data){
			$scope.products = data;
		}).error(function(status){
      throw "Whoops, looks like we have no data from" + url;
    });

		$scope.viewLimit = 4;
		$scope.viewMore = function(num){
			$scope.viewLimit += num;
		}
		$scope.nameLimit = 30;
		$scope.descending = true;

   	$scope.filters = {
      query: "",
      tags: [
        {
          label: "Punch",
          selected: false
        },
        {
          label: "Orange",
          selected: false
        },
        {
          label: "Chocolate",
          selected: false
        }
      ]
    }
	}]);

	/*app.filter('productsFilter', function(){
		return function (items, filters){
			var filtered = [];
      angular.forEach(items, function (item) {
        var selectedTags = 0;
        var tagsMatched = 0;
        angular.forEach(filters.tags, function (tag) {
          if (tag.selected) {
            selectedTags += 1;
            if (item.tags.indexOf(tag.label) > -1) {
              tagsMatched += 1;
            }
          };
        });
        var matchAnyTag = selectedTags == 0 || tagsMatched > 0;
        if (matchAnyTag) {
          filtered.push(item);
        }
      });
      return filtered;
		}
	});*/

  app.directive('productsList', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/shared/productsList/view.html'
    };
  });

})();
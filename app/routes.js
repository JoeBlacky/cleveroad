(function(){

  var app = angular.module('routes', ['ngRoute']);

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/',{
        templateUrl: 'app/components/login/form.html',
        controller: 'userLoginCrl'
      }).
      when('/ulogin', {
        templateUrl: 'app/components/login/form.html',
        controller: 'userLoginCrl'
      }).
      when('/uforgotpass', {
        templateUrl: 'app/components/forgot-password/form.html',
        controller: 'userForgotpassCtrl'
      }).
      when('/dashboard', {
        templateUrl: 'app/components/dashboard/view.html',
        controller: 'PageController'
      }).
      when('/products', {
        templateUrl: 'app/components/products/view.html',
        controller: 'PageController'
      }).
      when('/404', {
        templateUrl: 'app/components/page-not-found/404.html',
        controller: 'PageNotFoundController'
      }).
      otherwise({
        redirectTo: '/404'
      });
      $locationProvider.html5Mode(true);
  });

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

  app.directive('userDashboard', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/dashboard/view.html'
    };
  });

  app.controller('userLoginCrl', function($scope) {
    $scope.pageClass = 'page-login';
  });

  app.controller('userForgotpassCtrl', function($scope) {
    $scope.pageClass = 'page-forgot-pass';
  });

  app.controller('PageNotFoundController', function($scope) {
    $scope.pageClass = 'page-not-found';
  });

  app.controller('adminController', function($scope) {
    $scope.pageClass = 'page-admin';
  });
})();
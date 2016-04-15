(function(){

  var app = angular.module('routes', ['ngRoute', 'ngAnimate']);

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/',{
        templateUrl: 'app/components/login/form.html',
        controller: 'PageController'
      }).
      when('/uforgotpass', {
        templateUrl: 'app/components/forgot-password/form.html',
        controller: 'PageController'
      }).
      when('/dashboard', {
        templateUrl: 'app/components/dashboard/view.html',
        controller: 'PageController'
      }).
      when('/products', {
        templateUrl: 'app/components/products/view.html',
        controller: 'PageController'
      }).
      when('/products/:productId', {
        templateUrl: 'app/shared/product/view.html',
        controller: 'ProductDetailController'
      }).
      when('/user-settings', {
        templateUrl: 'app/components/user/settings/view.html',
        controller: 'PageController'
      }).
      when('/404', {
        templateUrl: 'app/components/page-not-found/404.html',
        controller: 'PageController'
      }).
      otherwise({
        redirectTo: '/404'
      });
      $locationProvider.html5Mode(true);
  });
})();
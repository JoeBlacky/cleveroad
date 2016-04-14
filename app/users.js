(function(){

	var app = angular.module('users', []);

	app.controller('FormController', function($scope, $location){
		$scope.message = messages;
		$scope.forgotPassTitle = 'Forgot ur pass?';
		$scope.emailLabel = 'Email';
		$scope.passLabel = 'Password';
	});

	var messages = {
		fieldEmpty: 'This field cannot be emty.',
		emailInvalid: 'Looks like email is invalid.',
		emailMismatch: 'Sorry but that email doesn\'t exist in our database.',
		passLength: 'Password length must be 6-16 characters.',
		passPattern: 'Allowed characters for password is a-z, A-Z, 0-9.',
		passMismatch: 'Whoops, looks like password doesn\'t match provided email.'
	};

	app.controller('postController', function($scope, $http) {
      // create a blank object to handle form data.
        $scope.user = {};
      // calling our submit function.
        $scope.submitForm = function() {
        // Posting data to php file
        $http({
          method  : 'POST',
          url     : 'php/passReminder.php',
          data    : $scope.user, //forms user object
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}
         })
          .success(function(data) {
            if (data.errors) {
              // Showing errors.
              $scope.errorName = data.errors.name;
              $scope.errorUserName = data.errors.username;
              $scope.errorEmail = data.errors.email;
            } else {
              $scope.message = data.message;
            }
          });
        };
    });

}());
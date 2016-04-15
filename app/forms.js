(function(){

	var app = angular.module('forms', []);

	app.controller('FormController', function($scope, $location, $http){
		$scope.message = messages;
		$scope.forgotPassTitle = 'Forgot ur pass?';
		$scope.emailLabel = 'Email';
		$scope.passLabel = 'Password';
		$scope.url = $location.path();

		$scope.matchFields = function(){
			if ($scope.field1 != $scope.field2) {
		    $scope.IsMatch = true;
		    return false;
		  }
		  $scope.IsMatch = false;
		}
	});

	var messages = {
		fieldEmpty: 'This field cannot be emty.',
		emailInvalid: 'Looks like email is invalid.',
		emailMismatch: 'Sorry but that email doesn\'t exist in our database.',
		passLength: 'Password length must be 6-16 characters.',
		passPattern: 'Allowed characters for password is a-z, A-Z, 0-9.',
		phonePattern: 'Allowed characters for phone is 0-9.',
		phoneLength: 'Phone length must be 10 characters.',
		passMismatch: 'Whoops, looks like password doesn\'t match provided email.',
		fieldLength: 'This field max length 255 chars, be concise.',
		namePattern: 'Please use a-z, A-Z.'
	};

}());
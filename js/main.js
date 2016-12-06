var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: "template/home.html",
		controller: 'HomeController'
	})
	.when('/settings', {
		templateUrl: "template/settings.html",
		controller: 'SettingsController'
	})
	.otherwise({ redirectTo: '/' });
});

app.controller('HomeController', function($scope) {

});

app.controller('SettingsController', function($scope) {

	$scope.settings = {
		name: 'hao',
		email: 'hao@newland.com',
		age:20
	}

	$scope.updateSettings = function(){

		console.log($scope.settings);
		console.log("updateSettings was called");
	}
});
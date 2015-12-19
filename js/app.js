// initialize application and calling ng route dependency

var myApp = angular.module('myApp', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider,$stateProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('/home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.state('/about', {
			url: '/',
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})
}]);
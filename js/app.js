// initialize application and calling ng route dependency

var myApp = angular.module('myApp', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider',function($urlRouterProvider,$stateProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})
		.state('buy', {
			url: '/buy',
			templateUrl: 'views/buy.html',
			controller: 'BuyController'
		})
}]);
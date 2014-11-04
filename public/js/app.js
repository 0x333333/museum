angular.module("uiRouterExample", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'js/templates/home.tpl.html',
		controller: 'HomeCtrl'
	})
	.state('print', {
		url: '/print',
		templateUrl: 'js/templates/print.tpl.html',
		controller: 'PrintCtrl'
	})
	.state('orders', {
		url: '/orders',
		templateUrl: 'js/templates/orders.tpl.html',
		controller: 'OrdersCtrl'
	})
	.state('user', {
		url: '/user',
		templateUrl: 'js/templates/user.tpl.html',
		controller: 'UserCtrl'
	})
	.state('cloud', {
		url: '/cloud',
		templateUrl: 'js/templates/cloud.tpl.html',
		controller: 'CloudCtrl'
	})

	.state('otherwise', {
		url: '',
		templateUrl: 'js/templates/print.tpl.html',
		controller: 'PrintCtrl'
	})
	.state('404', {
	  url: '/404',
	  templateUrl: 'js/core/templates/404.tpl.html',
	  controller: 'HomeCtrl'
	});

})

.controller("HomeCtrl", function($scope) {
	console.log('-- HomeCtrl');
})

.controller("PrintCtrl", function($scope) {
	console.log('-- PrintCtrl');
})

.controller("OrdersCtrl", function($scope) {
	console.log('-- OrdersCtrl');
})

.controller("UserCtrl", function($scope) {
	console.log('-- UserCtrl');
})

.controller("CloudCtrl", function($scope) {
	console.log('-- CloudCtrl');
})

.controller("PrintCtrl", function($scope) {
	console.log('-- PrintCtrl');
});
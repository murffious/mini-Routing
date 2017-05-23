angular.module('miniRouting', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
$urlRouteProvider.otherwise('/');
//$urlRouteProvider.when('','/');


$stateProvider
.state('home', {
    url: '/',
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
})
.state('settings', {
            url: '/settings',
            templateUrl: 'settings/settings.html',
            controller: 'settingsCtrl'
        })
        .state('products', {
            url: '/products/:id',
            templateUrl: 'js/products/product.html',
            controller: 'productCtrl'
        });

})
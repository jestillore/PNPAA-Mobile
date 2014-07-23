'use strict';

app = angular.module('PNPAA', [
  'ui.router',
  'ngTouch',
  'mobile-angular-ui',
  'Controllers'
])
.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/login");

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html",
      abstract: true
    })
    .state('home.index', {
      url: "/index",
      templateUrl: "partials/index.html"
    })
    .state('home.categories', {
      url: "/categories",
      templateUrl: "partials/categories.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.html",
      controller: 'LoginCtrl'
    })
})
;

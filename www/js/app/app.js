'use strict';

var app;

app = angular.module('PNPAA', [
  'ui.router',
  'ngTouch',
  'mobile-angular-ui',
  'Controllers',
  'Services'
])
.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home/index");

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html",
      abstract: true,
      controller: 'HomeCtrl'
    })
    .state('home.index', {
      url: "/index",
      templateUrl: "partials/index.html"
    })
    .state('home.department', {
      url: "/department/:deptId",
      templateUrl: "partials/department/index.html",
      controller: 'DepCtrl'
    })
})
.value('domain', 'http://pnpaa.herokuapp.com')
;

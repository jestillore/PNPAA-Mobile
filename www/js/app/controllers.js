'use strict';

angular.module('Controllers', [])
.controller('HomeCtrl', function($scope, Department, Post){
  $scope.departments = Department.query();
  $scope.posts = Post.query();
})
;
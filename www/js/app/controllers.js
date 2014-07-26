'use strict';

angular.module('Controllers', ['ui.router'])
.controller('HomeCtrl', function($scope, Department, Post){
  $scope.departments = Department.query();
  $scope.posts = Post.query();
  $scope.user = window.user
  $scope.logout = function(){
    database.empty();
    window.location.reload();
  }
})
.controller('DepCtrl', function($scope){
})
.controller('EventsCtrl', function($scope){
})
.controller('PostCtrl', function($scope, $stateParams, Post){
  $scope.params = $stateParams
  Post.get({id:$stateParams.postId}, function(post){
    $scope.post = post
  })
})
;
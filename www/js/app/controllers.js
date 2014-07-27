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
.controller('DepCtrl', function($scope, $stateParams, Department){
  $scope.department = Department.get({id: $stateParams.deptId})
})
.controller('EventsCtrl', function($scope){

})
.controller('PostCtrl', function($scope, $stateParams, Post, Comment){
  $scope.new_comment = ""
  $scope.params = $stateParams
  Post.get({id:$stateParams.postId}, function(post){
    $scope.post = post
  })
  $scope.postComment = function(){
    var comment = {
      user_id: window.user.id,
      post_id: $stateParams.postId,
      content: $scope.new_comment
    };
    comment = new Comment(comment)
    comment.$save(function(){
      $scope.post.comments.push(comment)
      $scope.new_comment = ""
    }, function(){
      alert('Error submitting comment.')
    })
  }
})
;
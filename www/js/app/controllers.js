'use strict';

angular.module('Controllers', [])
.controller('LoginCtrl', function($scope, $state){
  if (window.localStorage["user_id"] != undefined) {
    $state.go('home.index')
  }
  $scope.login = function(){
    window.localStorage["user_id"] = 1;
  }
})
;
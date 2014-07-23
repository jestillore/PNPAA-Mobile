'use strict';

angular.module('Controllers', [])
.controller('HomeCtrl', function($scope, Department){
  $scope.departments = Department.query()
})
;
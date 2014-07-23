'use strict';

angular.module('Services', ['ngResource'])
.factory('Department', function($resource){
  return $resource('http://pnpaa.herokuapp.com/departments');
})
;
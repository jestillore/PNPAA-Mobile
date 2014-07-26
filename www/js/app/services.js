'use strict';
var domain = "http://pnpaa.herokuapp.com";
var domainPath = function(path){
  return domain + path;
}
angular.module('Services', ['ngResource'])
.factory('Department', function($resource){
  return $resource(domainPath('/departments'));
})
.factory('Post', function($resource){
  return $resource(domainPath('/posts/:id'), {id: '@id'});
})
.factory('User', function($resource){
  return $resource(domainPath('/users/:id'), {id: '@id'});
})
;
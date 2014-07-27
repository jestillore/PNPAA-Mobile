'use strict';
var domain = "http://pnpaa.herokuapp.com";
var domainPath = function(path){
  return domain + path;
}
angular.module('Services', ['ngResource'])
.factory('Department', function($resource){
  return $resource(domainPath('/departments/:id'), {id: '@id'});
})
.factory('Post', function($resource){
  return $resource(domainPath('/posts/:id'), {id: '@id'});
})
.factory('Comment', function($resource){
  return $resource(domainPath('/posts/:postId/comments/:id'), {id: '@id', postId: '@post_id'});
})
.factory('User', function($resource){
  return $resource(domainPath('/users/:id'), {id: '@id'});
})
;
'use strict';

angular.module('myAppAngularApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://hackcultura2014.herokuapp.com/user')
    .success(function(resp){
    	debugger
    });
  });

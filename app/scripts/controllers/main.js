'use strict';

angular.module('myAppAngularApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    debugger
    
    $http.get('http://hackcultura2014.herokuapp.com/user')
    .success(function(resp){
    	debugger
    });
  });

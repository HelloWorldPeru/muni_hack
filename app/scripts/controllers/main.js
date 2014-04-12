'use strict';

angular.module('myAppAngularApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    debugger
    $http.get('http://localhost:1337/user')
    .success(function(resp){
    	debugger
    });
  });

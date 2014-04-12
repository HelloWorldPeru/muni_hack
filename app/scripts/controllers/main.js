'use strict';

angular.module('myAppAngularApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://127.0.0.1:1337/school')
    .success(function(resp){
    	debugger
    });
  });

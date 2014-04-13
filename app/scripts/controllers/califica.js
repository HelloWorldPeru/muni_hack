'use strict';

angular.module('myAppAngularApp')
  .controller('CalificaCtrl', function ($scope, $http) {
  	$http.get('../../obras.json')
  	.success(function(resp) {
  		$scope.items = resp.obras;
  	});
});

'use strict';

angular.module('myAppAngularApp')
  .controller('CalificaCtrl', function ($scope, $http, sessionVariables) {
  	var domain = sessionVariables.mainDomain,
  	url = domain + 'work/';
debugger
  	$http.get(url)
  	.success(function(resp) {
  		// debugger
  		// for(var i=0;i<resp.length;i++) {
  		// 	resp[i].video = $(resp[i].video)[0];
  		// }
  		$scope.items = resp;
  	});
});
//num/total
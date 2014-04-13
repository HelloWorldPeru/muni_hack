'use strict';

angular.module('myAppAngularApp')
  .controller('PerfilCtrl', function ($scope, $http, sessionVariables, $rootScope) {
	var domain = sessionVariables.mainDomain;

  	$scope.user = $rootScope.user;
});
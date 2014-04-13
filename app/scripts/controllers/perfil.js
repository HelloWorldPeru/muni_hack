'use strict';

angular.module('myAppAngularApp')
  .controller('PerfilCtrl', function ($scope, $http, sessionVariables, $rootScope) {
	var domain = sessionVariables.mainDomain;

  	$scope.user = $rootScope.user;

  	$scope.$watch('user', function(newValue, oldValue) {
  		debugger;
        if (newValue){
        	$http.get(domain+'school/'+$scope.user.school)
        		.success(function(resp){
        			debugger;
        			$scope.user.school = resp;
        		});
    	}
	});
});
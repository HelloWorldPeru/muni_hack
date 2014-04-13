'use strict';

angular.module('myAppAngularApp')
  .controller('RegistraCtrl', function ($scope, $http, sessionVariables, $rootScope) {
  	var domain = sessionVariables.mainDomain;
  	$scope.user = $rootScope.user;

  	$scope.getUsers =function(){
		$http.get(domain+'user')
            .success(function(resp){
            	debugger;
            	$scope.listUser = resp;
            });
  	}

  	$scope.addCate = function(cate){
  		$scope.cate = cate
  	}

  	$scope.addParticipate = function(part){
  		$scope.participate.push(part);
  	}

  	$scope.delParticipate = function(participate){

  	}


  	$scope.create = function(){
  		$http.get(domain+'event/create/?name='+$scope.nombre+
  			'&tematica='+$scope.cate+'&cost='+$scope.entrada+
  			'&date='+$scope.fecha+'&limit='+$scope.fechLimit+
  			'&schedule='+$scope.hora+'&photo='+$scope.foto+
  			'&descrip='+$scope.descrip+'&user='+$scope.user.id)
            .success(function(resp){
            	debugger;
            });
  	}


  	$scope.getUsers();

});

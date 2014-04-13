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
  		$scope.cate = cate;

      
      var element = angular.element('.form-features');
        element.slideDown();
        var body = $("html, body");
        body.animate({scrollTop: element.offset().top}, 'slow');
  	}

  	$scope.addParticipate = function(part){
  		debugger
      $scope.participate.push(part);
  	}

  	$scope.delParticipate = function(participate){

  	}

    $scope.showFeatures = function() {
      debugger
      var element = angular.element('.features');
        element.slideDown();
        var body = $("html, body");
        body.animate({scrollTop: element.offset().top-50}, 'slow');
    };

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

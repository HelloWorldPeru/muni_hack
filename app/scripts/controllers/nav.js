'use strict';

angular.module('myAppAngularApp')
  .controller('NavCtrl', function ($scope, $location, $http, sessionVariables) {
    var domain = sessionVariables.mainDomain;
    $scope.user = {}

    $scope.getClass = function(path) {
    	if($location.path() == path)
    		return 'menu-active'
    	else 
    		return ''
    };

    $scope.email = '';
    $scope.login_email = '';
    $scope.login_password = '';
    $scope.password = '';
    $scope.repassword = '';

    $scope.getModal = function(type) {
        angular.element('.panel').hide();
        if(type == 'login') angular.element('.panel1').show();
        if(type == 'signin') angular.element('.panel2').show();
        if(type == 'forgot-password') angular.element('.panel3').show();
    };


    $scope.signup = function(){
        debugger;
        if($scope.password == $scope.repassword){
            $http.get(domain+'signup/?email='+$scope.email+'&password='+$scope.password)
            .success(function(resp){
                $scope.user = resp;
                alert('registro');
            });
        } else { 
            alert('passewerd');
        }
    };

    $scope.login = function(){
        debugger;
        $http.get(domain+'login/?email='+$scope.login_email+'&password='+$scope.login_password)
            .success(function(resp){
                $scope.user = resp;
                alert('logeado');
            });
    };

    $scope.logout = function(){
        $http.get(domain+'logout/?email='+$scope.email+'&password='+$scope.password)
            .success(function(resp){
                $scope.user = {};
            });
    };

  });

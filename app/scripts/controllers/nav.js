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

        var email = this.email,
        password = this.password,
        repassword = this.repassword;
        if(password == repassword){
            $http.get(domain+'signup/?email='+email+'&password='+password)
            .success(function(resp){
                $scope.user = resp;
                $('#myModal').modal('hide')
                window.location.href = "/#/mapa";
            });
        } else { 
            //alert('password');
        }
    };
    $scope.login = function(){
        var email = this.login_email,
        pass = this.login_password;
        $http.get(domain+'login/?email='+email+'&password='+pass)
            .success(function(resp){

                $scope.user = resp;

                if($scope.user.role == 'USER'){
                    $('#myModal').modal('hide')
                    window.location.href = "/#/mapa";
                } 
                if($scope.user.role == 'ARTISTA'){
                    $('#myModal').modal('hide')
                    window.location.href = "/#/registra";
                }
            });
    };

    $scope.logout = function(){
        $scope.user = {};    
    };
  });

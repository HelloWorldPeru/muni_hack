'use strict';

angular.module('myAppAngularApp')
  .controller('NavCtrl', function ($scope, $location, $http) {
    $scope.user = {
    	username: 'John',
    	image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/c40.0.160.160/p160x160/1453501_666291690090209_2049399583_n.jpg',
    	log_in: true
    }
    $scope.getClass = function(path) {
    	if($location.path() == path)
    		return 'menu-active'
    	else 
    		return ''
    };

    $scope.email = '';
    $scope.password = '';
    $scope.getModal = function(type) {
        angular.element('.panel').hide();
        if(type == 'login') angular.element('.panel1').show();
        if(type == 'signin') angular.element('.panel2').show();
        if(type == 'forgot-password') angular.element('.panel3').show();
    };
    $scope.casa = 34;
    $http.get('http://hackcultura2014.herokuapp.com/user')
    .success(function(resp){
        
    });
    // $http.post('http://localhost:1337/signup', {'email': $scope.email, 'password': $scope.password})
    // .success(function(resp){
    //     debugger
    // });
    // $http.post('http://localhost:1337/login', {'email': $scope.email, 'password': $scope.password})
    // .success(function(resp){
    //     debugger
    // });
  });

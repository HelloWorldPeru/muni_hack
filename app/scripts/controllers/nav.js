'use strict';

angular.module('myAppAngularApp')
  .controller('NavCtrl', function ($scope, $location) {
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
  });

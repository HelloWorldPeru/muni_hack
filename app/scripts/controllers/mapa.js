'use strict';

angular.module('myAppAngularApp')
	.controller('MapaCtrl', function ($scope) {
		//Google maps
		$scope.completeLoatedMap = false;
	    $scope.loadMap = function(){
	    	
	        setTimeout(function(){
	            var lating = null,
	                coordinates = '',
	                marker=undefined;
	            if(lating==null || lating == '') {
	                lating = "-34.397, 150.644";
	            }
	            coordinates=lating.split(',');

	            var mapOptions = {
	                zoom: 12,
	                center: new google.maps.LatLng(coordinates[0], coordinates[1])
	            };
	            var map = new google.maps.Map(document.getElementById('gmaps-canvas'),
	                mapOptions);
	            if(lating != ''){
	                var myLatlng = new google.maps.LatLng(coordinates[0], coordinates[1]);
	                marker = new google.maps.Marker({
	                    position: myLatlng,
	                    map: map,
	                    title: 'My Museum'
	                });
	            }
	            $scope.completeLoatedMap = true;
	        }, 500);
	    }

	    $scope.loadMap();
  	});

'use strict';

angular.module('myAppAngularApp')
	.controller('MapaCtrl', function ($scope, $http, sessionVariables) {
		var domain = sessionVariables.mainDomain;
		$scope.paint=true;
		//Google maps
		$scope.completeLoatedMap = false;
		$scope.school = '';
	    $scope.loadSchool = function(){
	    	$scope.paint=true;
	    	//1 : 
	    	var url = domain+'school';
	    	$http.get(url)
    		.success(function(resp) {
    			$scope.school = resp;

    			var mapOptions = {
	                zoom: 12,
	                center: new google.maps.LatLng(-12.063025, -77.035855)
	            };
	            $scope.map = new google.maps.Map(document.getElementById('gmaps-canvas'),
	                mapOptions);

	            var infowindow = new google.maps.InfoWindow();
	            var marker, i, icon;
	            
    			for(var j=1; j<=$scope.school.length;j++) {
    				try{
    					if($scope.school[j].type == '1')
	    					icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
	    				if($scope.school[j].type == '2')
	    					icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
		                marker = new google.maps.Marker({
		                    position: new google.maps.LatLng($scope.school[j].latitude, $scope.school[j].longitude),
		                    map: $scope.map,
		                    icon: icon
		                });
		                google.maps.event.addListener(marker, 'click', (function(marker, j) {
					        return function() {
				          		infowindow.setContent($scope.school[j].name);
					          	infowindow.open($scope.map, marker);
				        	}
				      	})(marker, j));
			            $scope.completeLoatedMap = true;
    				} catch(err){

    				}
		        }
    		});
	    }

	    $scope.markMap = function(data){
	    	var latitude = data.latitude,
	    		longitude = data.longitude;	
	    	debugger;
	    	$scope.map.setCenter(new google.maps.LatLng( latitude, longitude ) );

	    }

	    $scope.loadEvents = function(){
	    	$scope.paint=false;
	    	var url = domain+'event';
	    	$http.get(url)
    		.success(function(resp) {
    			debugger
    			$scope.point = resp;

    			var mapOptions = {
	                zoom: 12,
	                center: new google.maps.LatLng(-12.063025, -77.035855)
	            };
	            $scope.map = new google.maps.Map(document.getElementById('gmaps-canvas'),
	                mapOptions);

	            var infowindow = new google.maps.InfoWindow();
	            var marker, i, icon;
	            
    			for(var j=1; j<=$scope.point.length;j++) {
    				try{
    					if($scope.point[j].status == '3')
	    					icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
	    				if($scope.point[j].status == '1')
	    					icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
	    				if($scope.point[j].status == '2')
	    					icon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
		                marker = new google.maps.Marker({
		                    position: new google.maps.LatLng($scope.point[j].latitude, $scope.point[j].longitude),
		                    map: $scope.map,
		                    icon: icon
		                });
		                google.maps.event.addListener(marker, 'click', (function(marker, j) {
					        return function() {
				          		infowindow.setContent($scope.point[j].name);
					          	infowindow.open($scope.map, marker);
				        	}
				      	})(marker, j));
			            $scope.completeLoatedMap = true;
    				} catch(err){

    				}
		        }
    		});
	    }

	    $scope.loadSchool();
	    $scope.seeListSearchOptions = false;
	    
	    $scope.searchListToggle = function() {

	    	$scope.seeListSearchOptions = !$scope.seeListSearchOptions;

	    	var element = angular.element('.search-map');
	    	if($scope.seeListSearchOptions) {
	    		element.animate({width: '23%', marginLeft: 0}, 'slow');	
	    	}
	    	else {
	    		element.animate({width: '0', marginLeft: '-200px'}, 'fast');
	    	}
	    	
	    };
  	});

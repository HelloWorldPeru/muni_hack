'use strict';

angular.module('myAppAngularApp')
	.controller('MapaCtrl', function ($scope, $http) {
		//Google maps
		$scope.completeLoatedMap = false;
		$scope.school = '';
		$scope.hola = 'hola';
	    $scope.loadMap = function(){
	    	$http.get('../../musica_arte.json')
    		.success(function(resp) {
    			$scope.school = resp.result;

    			var mapOptions = {
	                zoom: 12,
	                center: new google.maps.LatLng(-12.063025, -77.035855)
	            };
	            var map = new google.maps.Map(document.getElementById('gmaps-canvas'),
	                mapOptions);

	            var infowindow = new google.maps.InfoWindow();
	            var marker, i, icon;
	            

    			for(var j=1; j<=$scope.school.length;j++) {
    				try{
    					if($scope.school[j][8] == '1')
	    					icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
	    				if($scope.school[j][8] == '2')
	    					icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
	    				if($scope.school[j][8] == '3')
	    					icon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
		                marker = new google.maps.Marker({
		                    position: new google.maps.LatLng($scope.school[j][6], $scope.school[j][7]),
		                    map: map,
		                    icon: icon
		                });
		                google.maps.event.addListener(marker, 'click', (function(marker, j) {
					        return function() {
				          		infowindow.setContent($scope.school[j][3]);
					          	infowindow.open(map, marker);
				        	}
				      	})(marker, j));
			            $scope.completeLoatedMap = true;
    				} catch(err){

    				}
		        }
    		});
	    }


	    $scope.loadSchool = function(){

	    }

	    $scope.loadEvents = function(){

	    }

	    $scope.loadMap();
	    $scope.seeListSearchOptions = false;
	    
	    $scope.searchListToggle = function() {
	    	debugger

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

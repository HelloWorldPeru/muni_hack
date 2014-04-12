'use strict';

angular.module('myAppAngularApp')
	.controller('MapaCtrl', function ($scope, $http) {
		//Google maps
		$scope.completeLoatedMap = false;
		$scope.points = '';
	    $scope.loadMap = function(){
	    	$http.get('../../musica_arte.json')
    		.success(function(resp) {
    			$scope.points = resp.result;

    			var mapOptions = {
	                zoom: 12,
	                center: new google.maps.LatLng(-12.063025, -77.035855)
	            };
	            var map = new google.maps.Map(document.getElementById('gmaps-canvas'),
	                mapOptions);

	            var infowindow = new google.maps.InfoWindow();
	            var marker, i, icon;
	            

    			for(var j=1; j<=$scope.points.length;j++) {
    				if($scope.points[j][8] == '1')
    					icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
    				if($scope.points[j][8] == '2')
    					icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    				if($scope.points[j][8] == '3')
    					icon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
	                marker = new google.maps.Marker({
	                    position: new google.maps.LatLng($scope.points[j][6], $scope.points[j][7]),
	                    map: map,
	                    icon: icon
	                });
	                google.maps.event.addListener(marker, 'click', (function(marker, j) {
				        return function() {
			          		infowindow.setContent($scope.points[j][3]);
				          	infowindow.open(map, marker);
			        	}
			      	})(marker, j));
		            $scope.completeLoatedMap = true;
		        }
    		});
	    }

	    $scope.loadMap();
	    
  	});

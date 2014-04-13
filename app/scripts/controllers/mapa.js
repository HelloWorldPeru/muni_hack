'use strict';

angular.module('myAppAngularApp')
	.controller('MapaCtrl', function ($scope, $http) {
		//Google maps
		$scope.completeLoatedMap = false,
		$scope.points = '',
		$scope.events = '',
		$scope.currentMarker = [];
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
    				if($scope.points[j][10] == '1')
    					icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
    				if($scope.points[j][10] == '2')
    					icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    				if($scope.points[j][10] == '3')
    					icon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
	                marker = new google.maps.Marker({
	                    position: new google.maps.LatLng($scope.points[j][8], $scope.points[j][9]),
	                    map: map,
	                    icon: icon
	                });
	                google.maps.event.addListener(marker, 'click', (function(marker, j) {
				        return function() {
		    				map.setCenter(marker.getPosition());
			          		infowindow.setContent($scope.points[j][3]);
				          	infowindow.open(map, marker);
				          	showInformationAboutInstitute($scope.points[j]);
			        	}
			      	})(marker, j));
		            $scope.completeLoatedMap = true;

		        }   
		        function showInformationAboutInstitute(points) {
			    	$scope.currentMarker = points;
			    	$scope.$apply();
			    	var element = angular.element('.description_option');
			    	element.slideDown();
			    	var body = $("html, body");
					body.animate({scrollTop: element.offset().top-50}, 'slow');
			    } 		
		    });
	    }
	    $scope.loadMap();
	    $scope.seeListSearchOptions = false;
	    
	    $scope.searchListToggle = function() {
	    	$scope.seeListSearchOptions = !$scope.seeListSearchOptions;
	    };
	    $scope.closeMoreInformationInstitute = function() {
	    	angular.element('.description_option').slideUp();
	    	var body = $("html, body");
			body.animate({scrollTop: 0}, 'slow');
	    };
	    $http.get('../../events.json')
	    .success(function(resp) {
	    	$scope.itemsEvents = resp.events;
	    	showSlider();
	    });
	    function showSlider() {
	    	var items = [],
		    slide = Math.ceil($scope.itemsEvents.length/2);
		    for (var i = 0; i <slide; i++) {
				items[i] = {};
				items[i].page = [];
			};	
			debugger
			for(var i=0; i<slide; i++){
				for(var j=0; j<2; j++){
					if(items[i].page.length < 3){
						items[i].page.push($scope.itemsEvents.shift());					
					}	
				}
			}
			debugger
			$scope.events = items;
	    }

  	});

'use strict';

angular.module('myAppAngularApp')
	.controller('MapaCtrl', function ($scope) {
		//Google maps
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
	                    title: 'My store'
	                });
	            }

		        //Click
		        // google.maps.event.addListener(map, 'click', function(e) {
		        //     if(marker != undefined){
		        //         marker.setPosition(e.latLng);
		        //         $scope.store.latlng = e.latLng.lat()+','+e.latLng.lng();
		        //     } else {
		        //         marker = new google.maps.Marker({
		        //             position: e.latLng,
		        //             map: map,
		        //             title: 'My store'
		        //         });

		        //         $scope.store.latlng = e.latLng.lat()+','+e.latLng.lng();
		        //     }
		        // });
	        }, 500);
	    }

	    $scope.loadMap();
  	});

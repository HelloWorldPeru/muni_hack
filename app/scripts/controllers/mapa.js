'use strict';

angular.module('myAppAngularApp')
	.controller('MapaCtrl', function ($scope, $http, sessionVariables) {
		var domain = sessionVariables.mainDomain;
		$scope.paint=true;
		//Google maps
		$scope.completeLoatedMap = false;
		$scope.school = '',
		$scope.events = '',
		$scope.currentMarker = [];
	    $scope.loadSchool = function(){
	    	$scope.paint=true;
	    	//1 : 
	    	var url = domain+'school';
	    	$http.get(url)
    		.success(function(resp) {
    			debugger
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
					        	$scope.map.setCenter(marker.getPosition());
				          		infowindow.setContent($scope.school[j].name);
					          	infowindow.open($scope.map, marker);
					          	debugger
					          	showInformationAboutInstitute($scope.school[j]);	
				        	}
				      	})(marker, j));
			            $scope.completeLoatedMap = true;
					} catch(err){}
		        }
		        function showInformationAboutInstitute(points) {
		        	debugger
			    	$scope.currentMarker = points;
			    	$scope.$apply();
			    	var element = angular.element('.description_option');
			    	element.slideDown();
			    	var body = $("html, body");
					body.animate({scrollTop: element.offset().top-50}, 'slow');
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
					        	debugger
				          		infowindow.setContent($scope.point[j].name);
					          	infowindow.open($scope.map, marker);				          	
				        	}
				      	})(marker, j));
			            $scope.completeLoatedMap = true;
    				} catch(err){}
		        }		
    		});
	    }

	    $scope.loadSchool();
	    $scope.seeListSearchOptions = false;
	    
	    $scope.searchListToggle = function() {
	    	$scope.seeListSearchOptions = !$scope.seeListSearchOptions;
	    };
	    $scope.closeMoreInformationInstitute = function() {
	    	angular.element('.description_option').slideUp();
	    	var body = $("html, body");
			body.animate({scrollTop: 0}, 'slow');
	    };
	    var url = domain+'event';
	    $http.get(url)
	    .success(function(resp) {
	    	$scope.itemsEvents = resp;
	    	debugger
	    	// showSlider();
	    });
	  //   function showSlider() {
	  //   	debugger
	  //   	var items = [],
		 //    slide = Math.ceil($scope.itemsEvents.length/2);
		 //    for (var i = 0; i <slide; i++) {
			// 	items[i] = {};
			// 	items[i].page = [];
			// };	
			// debugger
			// for(var i=0; i<slide; i++){
			// 	for(var j=0; j<2; j++){
			// 		if(items[i].page.length < 3){
			// 			items[i].page.push($scope.itemsEvents.shift());					
			// 		}	
			// 	}
			// }
			// debugger
			// $scope.events = items;
	  //   }
	  	$scope.showPanelHelp = function(type) {
	  		angular.element('.form-panel-help').hide();
	  		if(type == 'dinero') angular.element('.form-panel-help1').show();
	  		// if(type == 'materiales') angular.element('.form-panel-help2').show();
	  		if(type == 'otros') angular.element('.form-panel-help3').show();
	  	};
  	});

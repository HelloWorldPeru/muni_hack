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
	    // $scope.loadSchool = function(){
	    // 	$scope.paint=true;
	    // 	//1 : 
	    // 	var url = domain+'school';
	    // 	$http.get(url)
    	// 	.success(function(resp) {
    	// 		$scope.school = resp;

    	// 		var mapOptions = {
	    //             zoom: 12,
	    //             center: new google.maps.LatLng(-12.063025, -77.035855)
	    //         };
	    //         $scope.map = new google.maps.Map(document.getElementById('gmaps-canvas'),
	    //             mapOptions);

	    //         var infowindow = new google.maps.InfoWindow();
	    //         var marker, i, icon;
	            
    	// 		for(var j=1; j<=$scope.school.length;j++) {
    	// 			try{
    	// 				if($scope.school[j].type == '1')
	    // 					icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
	    // 				if($scope.school[j].type == '2')
	    // 					icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
		   //              marker = new google.maps.Marker({
		   //                  position: new google.maps.LatLng($scope.school[j].latitude, $scope.school[j].longitude),
		   //                  map: $scope.map,
		   //                  icon: icon
		   //              });
		   //              google.maps.event.addListener(marker, 'click', (function(marker, j) {
					//         return function() {
					//         	$scope.map.setCenter(marker.getPosition());
				 //          		infowindow.setContent($scope.school[j].name);
					//           	infowindow.open($scope.map, marker);
				
					//           	showInformationAboutInstitute($scope.school[j]);	
				 //        	}
				 //      	})(marker, j));
			  //           $scope.completeLoatedMap = true;
					// } catch(err){}
		   //      }
	    //     	function showInformationAboutInstitute(points) {
			  //   	$scope.currentMarker = points;
			  //   	$scope.$apply();
			  //   	var element = angular.element('.description_option');
			  //   	element.slideDown();
			  //   	var body = $("html, body");
					// body.animate({scrollTop: element.offset().top-50}, 'slow');
			  //   } 
    	// 	});
	    // }

	    $scope.markMap = function(data){
	    	var latitude = data.latitude,
	    		longitude = data.longitude;	
	    	$scope.map.setCenter(new google.maps.LatLng( latitude, longitude ) );

	    }

	    $scope.loadEvents = function(type, filter){
	    	$scope.state=false;
	    	if(filter == 'free'){
	    		$scope.state=true;
	    	}
debugger
	    	var url = domain+'event/'+type+'/?filter='+filter;
	    	debugger
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
	            debugger
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
				          		$scope.map.setCenter(marker.getPosition());
				          		infowindow.setContent($scope.point[j].name);
					          	infowindow.open($scope.map, marker);
					          	showInformationAboutInstitute($scope.point[j]);					          	
				        	}
				      	})(marker, j));
			            $scope.completeLoatedMap = true;
    				} catch(err){}
		        }
		        function showInformationAboutInstitute(points) {
			    	$scope.currentMarker = points;
			    	$http.get('http://127.0.0.1:1337/donation/event/'+$scope.currentMarker.id)
			    		.success(function(resp) {
			    			$scope.currentMarker.calculate = resp;
			    			$scope.currentMarker.calculate.percentaje = Math.round($scope.currentMarker.calculate.percentaje)
			    	});
			    	$scope.$apply();
			    	var element = angular.element('.description_option');
			    	element.slideDown();
			    	var body = $("html, body");
					body.animate({scrollTop: element.offset().top-50}, 'slow');
			    } 		
    		});
	    }
	    
	    //$scope.loadSchool();
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
	    	$scope.loadEvents('free', '');
	    	$scope.itemsEvents = resp;

	    	// showSlider();
	    });
	  //   function showSlider() {
	 
	  //   	var items = [],
		 //    slide = Math.ceil($scope.itemsEvents.length/2);
		 //    for (var i = 0; i <slide; i++) {
			// 	items[i] = {};
			// 	items[i].page = [];
			// };	
		
			// for(var i=0; i<slide; i++){
			// 	for(var j=0; j<2; j++){
			// 		if(items[i].page.length < 3){
			// 			items[i].page.push($scope.itemsEvents.shift());					
			// 		}	
			// 	}
			// }
		
			// $scope.events = items;
	  //   }
	  	$scope.showPanelHelp = function(type) {
	  		angular.element('.form-panel-help').hide();
	  		if(type == 'dinero') angular.element('.form-panel-help1').show();
	  		// if(type == 'materiales') angular.element('.form-panel-help2').show();
	  		if(type == 'otros') angular.element('.form-panel-help3').show();
	  	};

	  	$scope.donateMoneyHelp = function() {
	  		// $scope.$apply();
	  		$scope.currentMarker.calculate.percentaje += $scope.money_help/$scope.currentMarker.cost;
	  		$scope.money_help = '';
	  		// $scope.$apply();
	  		debugger
	  		angular.element('.main-progress-bar').css('width',$scope.currentMarker.calculate.percentaje+"%");
	  		$('#myModal2').modal('hide');
	  	};
	  	$scope.donateOtherHelp = function() {
	  		$scope.other_help = '';
	  		$scope.descriptionOtherHelp = '';
	  		$('#myModal2').modal('hide');	
	  	}
  	});

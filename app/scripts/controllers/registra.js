'use strict';

angular.module('myAppAngularApp')
  .controller('RegistraCtrl', function ($scope, $http, sessionVariables, $rootScope) {
  	var domain = sessionVariables.mainDomain;
  	$scope.user = $rootScope.user;
  	$scope.participates = [];

  	$scope.getUsers =function(){
		$http.get(domain+'user')
            .success(function(resp){
            	$scope.listUser = resp;
            });
  	}

  	$scope.addCate = function(cate){
      
    $scope.cate = cate;
  		this.cate = cate;

      
      var element = angular.element('.form-features');
        element.slideDown();
        var body = $("html, body");
        body.animate({scrollTop: element.offset().top}, 'slow');
  	}

  	$scope.addParticipate = function(){
      $scope.participates.push($scope.part);
  	}

  	$scope.delParticipate = function(participate){

  	}

    $scope.showFeatures = function() {
      var element = angular.element('.features');
        element.slideDown();
        var body = $("html, body");
        body.animate({scrollTop: element.offset().top-50}, 'slow');
    };

  	$scope.createProject = function(){
  		
  		var  url = domain+'event/create/?name='+$scope.nombre+'&tematica='+$scope.cate+'&cost='+$scope.entrada+'&date='+$scope.fecha+'&limit='+$scope.fechLimit+
  			'&schedule='+$scope.hora+'&photo='+$scope.foto+
  			'&descrip='+$scope.descrip+'&user='+$scope.user.id+
  			'&status=3'+'&longitude='+$scope.longitude+'&latitude='+$scope.latitude;
        
      $http.get(url)
      .success(function(resp){
      	debugger
        var body = $("html, body");
        body.animate({scrollTop: 0}, 'slow');
        $scope.nombre = '';
        $scope.cate = '';
        $scope.entrada = '';
        $scope.fecha = '';
        $scope.fechLimit = '';
        $scope.foto = '';
        $scope.hora = '';
        $scope.descrip = '';
        $scope.presu = '';
        alert('Guardado!');

      });
  	}


  	$scope.getUsers();

    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(-12.063025, -77.035855)
    };
    $scope.map = new google.maps.Map(document.getElementById('gmaps-canvas'),
        mapOptions);

    var infowindow = new google.maps.InfoWindow();
    var marker, i, icon;
    // for(var j=1; j<=$scope.school.length;j++) {
    try{
      
      // if($scope.school[j].type == '1')
      //   icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
      // if($scope.school[j].type == '2')
        icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
        
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(-12.063025, -77.035855),
            map: $scope.map,
            icon: icon
        });

        google.maps.event.addListener($scope.map, 'click', function(event) {
          
           marker.setMap(null);   
           marker = new google.maps.Marker({
                position: event.latLng, 
                map: $scope.map
            });
           $scope.latitude = event.latLng.k;
           $scope.longitude = event.latLng.A;
        });
        // google.maps.event.addListener(marker, 'click', function(marker) {
        
        //   $scope.map.setCenter(marker.getPosition());
        //     // infowindow.setContent($scope.school[j].name);
        //     infowindow.open($scope.map, marker);  
        
        // });
    } catch(err){}
});

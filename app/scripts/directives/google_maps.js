angular.module('myAppAngularApp')
.directive('googleplace', function() {
    return {
        restrict:'A',
        replace:true,
        scope: {store:'='},
        link: function($scope, element, attrs){

            var autocomplete = new google.maps.places.Autocomplete(element[0], {});
            google.maps.event.addListener(autocomplete, 'place_changed', function() {
                var place = autocomplete.getPlace();
                var country_peru = place.address_components;
                if(country_peru[country_peru.length-1].long_name == "Peru" || country_peru[country_peru.length-2].long_name == "Peru"){
                    for(var i in place.address_components){
                        var add = place.address_components[i];
                        if(add.types[0] == 'administrative_area_level_2'){
                            $scope.store.city = add.long_name;
                        }else if(add.types[0] == 'country'){
                            $scope.store.country = add.long_name;
                        }
                    }
                    $scope.store.state = 'All city';
                    console.log('peru');
                }
                else{
                    for(var i in place.address_components){
                        var add = place.address_components[i];
                        if(add.types[0] == 'locality'){
                            $scope.store.city = add.long_name;
                        }else if(add.types[0] == 'administrative_area_level_1'){
                            $scope.store.state = add.long_name;
                        }else if(add.types[0] == 'country'){
                            $scope.store.country = add.long_name;
                        }
                    }
                    console.log('ee.uu && china');
                }

                $scope.store.latlng = place.geometry.location.lat()+','+place.geometry.location.lng();
                $scope.$emit('', true);
                $scope.$apply();
            });
        }
    }
});

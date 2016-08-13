angular.module('LoopIn')

  .factory('GoogleMap', function($rootScope, $compile, $ionicLoading){

    var map = null;

    function initMap() {
      var options = {
        timeout : 10000,
        enableHighAccuracy : true
      };


    //     navigator.geolocation.getCurrentPosition(function(pos) {
    //       $scope.geocode = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

    //       $scope.map.setCenter($scope.geocode);
    //       console.log($scope.geocode.lat()  + '   ' + $scope.geocode.lng() );
    //       $scope.marker.setPosition($scope.geocode);
    //       $ionicLoading.hide();


    //     }, function(error) {
    //       alert('Unable to get location: ' + error.message);
    //       $ionicLoading.hide();
    //     });


      navigator.geolocation.getCurrentPosition(function(position){
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var mapOptions = {
            center: latlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = new google.maps.Map(document.getElementById("map"),
              mapOptions);

        console.log('!!!')


        /// wait until the map is loaded

        google.maps.event.addListenerOnce(map, 'idle', function(){
          loadMarkers();
          enableMap();
        })

      },
      function(error){
        console.log('could not get location');
        $ionicLoading.hide();
      });

    }

    function enableMap(){
      $ionicLoading.hide();
    }

    function disableMap(){
      $ionicLoading.show({
        template: 'map is disabled'
      });
    }

    function loadGoogleMaps(){
      $ionicLoading.show({
        template: 'Loading Google Maps'
      });

      initMap();

    }

    function loadMarkers(){
      console.log('load marker here')
    }

    return {
      init: function(){
        loadGoogleMaps();
      }
    }

    })

angular.module('LoopIn.settings')
  .controller('settingsController', function($scope, $state, $localStorage, UserService, $ionicLoading, $compile) {

    $scope.user = {};
    $scope.user.email = $localStorage.user.email
    $scope.user.token = $localStorage.user.token;

    $scope.logout = function(){

      UserService.logout().success(function(data){
        console.log(JSON.stringify(data));

      })
      .error(function(data){
        console.log(JSON.stringify(data));
      });

      $localStorage.user.token = {};

      $state.go('login');
    }



//------------------------------

$scope.map = {};
$scope.marker = {};
//12 mehan lane, dix hills, ny 11746
$scope.data = {};
$scope.geocode = {};

var geocoder= new google.maps.Geocoder();


function initialize() {
  $scope.geocode = new google.maps.LatLng(40.7515345,-73.9435012);

  var mapOptions = {
    center: $scope.geocode,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"),
      mapOptions);

  //Marker + infowindow + angularjs compiled ng-click
  var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
  var compiled = $compile(contentString)($scope);

  var infowindow = new google.maps.InfoWindow({
    content: compiled[0]
  });

  $scope.marker = new google.maps.Marker({
    position: $scope.geocode,
    map: map,
    title: 'Uluru (Ayers Rock)',
    draggable: true
  });

  google.maps.event.addListener($scope.marker, 'click', function() {
    infowindow.open(map, $scope.marker);
  });

  $scope.map = map;
}
// google.maps.event.addDomListener(window, 'load', initialize);

ionic.Platform.ready(initialize);

$scope.centerOnMe = function(currentLocation) {
  if(!$scope.map) {
    return;
  }

  $ionicLoading.show({
    template: 'Getting current location...',
    showBackdrop: false
  });


  if (currentLocation == true) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      $scope.geocode = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

      $scope.map.setCenter($scope.geocode);
      console.log($scope.geocode.lat()  + '   ' + $scope.geocode.lng() );
      $scope.marker.setPosition($scope.geocode);
      $ionicLoading.hide();


    }, function(error) {
      alert('Unable to get location: ' + error.message);
      $ionicLoading.hide();
    });
  }
  else {
    console.log($scope.address);
    geocoder.geocode({'address': $scope.data.address}, function(results, status) {
      if (status === 'OK') {
        $scope.geocode = results[0].geometry.location;

        $scope.map.setCenter($scope.geocode);
        console.log($scope.geocode.lat()  + '   ' + $scope.geocode.lng() );
        $scope.marker.setPosition($scope.geocode);
        $ionicLoading.hide();

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
        $ionicLoading.hide();
      }
    });
  }



    // this create a new marker

  //   var marker = new google.maps.Marker({
  //     position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
  //     map: $scope.map,
  //    title: 'MY LOCATION'
  // });


    // this move the old marker


};


$scope.clickTest = function() {
  alert('Example of infowindow with ng-click')
};




  })

<<<<<<< HEAD
// Global variables // 
var map, infoWindow;
=======
     var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 15
        });
        infoWindow = new google.maps.InfoWindow;
>>>>>>> ab37a93d65663d03666ee8576214fba92add6e2c

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: 'Hello World!'
    });
  
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

<<<<<<< HEAD
// call google maps API //
function initMap() {
    var options = {
// options for map starting point //         
    zoom:15,
    // Riverside starting location // 
    center:{lat:33.9806, lng:-117.3755}
}
// create map object // 

var map = new google.maps.Map(document.getElementById('map'), options);

infoWindow = new google.maps.InfoWindow;
//current location // 
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
// variable for postion //
var pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
};

infoWindow.setPosition(pos)
infoWindow.setContent('You are here.');
infoWindow.open(map);
// map.setContent(pos);
    })
}else{
    // if no geolocation is supported on browser //
    handleLocationError(false, infoWindow, map.getCenter());
   }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 
                            'Error: The Geolocation Service Failed.' :
                            'Error: Your browser does not support geolocation');
    infoWindow.open(map);   
}
=======
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
>>>>>>> ab37a93d65663d03666ee8576214fba92add6e2c

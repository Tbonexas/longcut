// Global variables // 
var infoWindow;


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
infoWindow.setPosition(pos);
infoWindow.setContent('Location Found.');
infoWindow.open(map);
map.setContent(pos);
    })
}else{
    // if no geolocation is supported on broswer //
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
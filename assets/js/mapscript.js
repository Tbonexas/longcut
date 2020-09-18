// call google map api // 

function initMap() {

    var options = {
    zoom:15,
    // Riverside starting location // 
    center:{lat:33.9806, lng:-117.3755}
}
// create map object // 
var map = new google.maps.Map(document.getElementById('map'), options);
}
function showFavorites() {
    var favDiv = document.getElementById("fave");
    var routeDiv = document.getElementById("route");
    var mapDiv = document.getElementById("map");

    favDiv.style.display = 'block';
    routeDiv.style.display = 'none';
    mapDiv.style.display = 'none';
}

function showRoutes() {
    var favDiv = document.getElementById("fave");
    var routeDiv = document.getElementById("route");
    var mapDiv = document.getElementById("map");

    routeDiv.style.display = 'block'; 
    favDiv.style.display = 'none';
    mapDiv.style.display = 'none';
}

function showMap() {
    var favDiv = document.getElementById("fave");
    var routeDiv = document.getElementById("route");
    var mapDiv = document.getElementById("map");

    mapDiv.style.display = 'block';
    favDiv.style.display = 'none';
    routeDiv.style.display = 'none';
}
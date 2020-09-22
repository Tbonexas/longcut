function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
function showFavorites() {
    var favDiv = document.getElementById("fave");
    var routeDiv = document.getElementById("route");
    var mapDiv = document.getElementById("map");
    var favButton = document.getElementById("favButton");
    var routeButton = document.getElementById("routeButton");
    var mapButton = document.getElementById("mapButton");

    favDiv.style.display = 'block';
    favButton.style.textDecoration = 'underline';
    favButton.style.textDecorationColor = "#ffffff";
    favButton.style.textDecorationStyle = "double";
    routeDiv.style.display = 'none';
    routeButton.style.textDecoration = 'none';
    mapDiv.style.display = 'none';
    mapButton.style.textDecoration = 'none';
}

function showRoutes() {
    var favDiv = document.getElementById("fave");
    var routeDiv = document.getElementById("route");
    var mapDiv = document.getElementById("map");
    var favButton = document.getElementById("favButton");
    var routeButton = document.getElementById("routeButton");
    var mapButton = document.getElementById("mapButton");

    routeDiv.style.display = 'block';
    routeButton.style.textDecoration = 'underline';
    routeButton.style.textDecorationColor = "#ffffff";
    routeButton.style.textDecorationStyle = "double";
    favDiv.style.display = 'none';
    favButton.style.textDecoration = 'none';
    mapDiv.style.display = 'none';
    mapButton.style.textDecoration = 'none';
}

function showMap() {
    var favDiv = document.getElementById("fave");
    var routeDiv = document.getElementById("route");
    var mapDiv = document.getElementById("map");
    var routeButton = document.getElementById("routeButton");
    var mapButton = document.getElementById("mapButton");

    mapDiv.style.display = 'block';
    mapButton.style.textDecoration = 'underline';
    mapButton.style.textDecorationColor = "#ffffff";
    mapButton.style.textDecorationStyle = "double";
    favDiv.style.display = 'none';
    favButton.style.textDecoration = 'none';
    routeDiv.style.display = 'none';
    routeButton.style.textDecoration = 'none';
}

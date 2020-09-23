"use strict";

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 50,
    center: {
      lat: 33.9737,
      lng: -117.328
    },
    backgroundColor: '',
  });
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    draggable: true,
    map,
    panel: document.getElementById("right-panel")
  });
  directionsRenderer.addListener("directions_changed", () => {
    computeTotalDistance(directionsRenderer.getDirections());
  });
  displayRoute(
    "6R62+52 La Cañada Flintridge, California",
    "GX4C+CG Palmdale, California",
  
    directionsService,
    directionsRenderer
  );
}

function displayRoute(origin, destination, service, display) {
  service.route(
    {
      origin: origin,
      destination: destination,
        waypoints: [
        {
          location: "7R43+X6 Glendale, California"
        },
        // {
        //   location: "CA-2, Palmdale, CA 93550, USA"
        // }
      ], 
      travelMode: google.maps.TravelMode.DRIVING,
      avoidTolls: true
    },
    (result, status) => {
      if (status === "OK") {
        display.setDirections(result);
      } else {
        alert("Could not display directions due to: " + status);
      }
    }
  );
}

function computeTotalDistance(result) {
  let total = 0;
  const myroute = result.routes[0];

  for (let i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].distance.value;
  }

  total = total / 1000;
  document.getElementById("total").innerHTML = total + " miles";
}
"use strict";

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 50,
    center: {
      lat: 33.9737,
      lng: -117.328
    } //California
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
    "W5F6+FP Brea, California",
    "X55V+8R Brea, California",
    directionsService,
    directionsRenderer
  );
}

function displayRoute(origin, destination, service, display) {
  service.route(
    {
      origin: origin,
      destination: destination,
   /*    waypoints: [
        {
          location: "Fawnskin, CA"
        },
        {
          location: "Boulder Bay, CA"
        }
      ], */
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
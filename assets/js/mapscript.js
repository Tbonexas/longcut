//  var map, infoWindow;
    //   function initMap() {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //       center: {lat: -34.397, lng: 150.644},
    //       zoom: 15
    //     });
    //     infoWindow = new google.maps.InfoWindow;

    //     // Try HTML5 geolocation.
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(function(position) {
    //         var pos = {
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude
    //         };
    // var marker = new google.maps.Marker({
    //   position: pos,
    //   map: map,
    //   title: 'Hello World!'
    // });
  
    //         infoWindow.open(map);
    //         map.setCenter(pos);
    //       }, function() {
    //         handleLocationError(true, infoWindow, map.getCenter());
    //       });
    //     } else {
    //       // Browser doesn't support Geolocation
    //       handleLocationError(false, infoWindow, map.getCenter());
    //     }
    //   }

    //   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //     infoWindow.setPosition(pos);
    //     infoWindow.setContent(browserHasGeolocation ?
    //                           'Error: The Geolocation service failed.' :
    //                           'Error: Your browser doesn\'t support geolocation.');
    //     infoWindow.open(map);
    //   }







    // function initMap() {
    //     const directionsService = new google.maps.DirectionsService();
    //     const directionsRenderer = new google.maps.DirectionsRenderer();
    //     const map = new google.maps.Map(document.getElementById("map"), {
    //       zoom: 7,
    //       center: { lat: 41.85, lng: -87.65 }
    //     });
    //     directionsRenderer.setMap(map);
      
    //     const onChangeHandler = function() {
    //       calculateAndDisplayRoute(directionsService, directionsRenderer);
    //     };
    //     document.getElementById("start").addEventListener("change", onChangeHandler);
    //     document.getElementById("end").addEventListener("change", onChangeHandler);
    //   }
      
    //   function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    //     directionsService.route(
    //       {
    //         origin: {
    //           query: document.getElementById("start").value
    //         },
    //         destination: {
    //           query: document.getElementById("end").value
    //         },
    //         travelMode: google.maps.TravelMode.DRIVING
    //       },
    //       (response, status) => {
    //         if (status === "OK") {
    //           directionsRenderer.setDirections(response);
    //         } else {
    //           window.alert("Directions request failed due to " + status);
    //         }
    //       }
    //     );
    //   }


    
    function initMap() {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 41.85, lng: -87.65 }
      });
      directionsRenderer.setMap(map);
      document.getElementById("submit").addEventListener("click", () => {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
      });
    }
    
    function calculateAndDisplayRoute(directionsService, directionsRenderer) {
      const waypts = [];
      const checkboxArray = document.getElementById("waypoints");
    
      for (let i = 0; i < checkboxArray.length; i++) {
        if (checkboxArray.options[i].selected) {
          waypts.push({
            location: checkboxArray[i].value,
            stopover: true
          });
        }
      }
      directionsService.route(
        {
          origin: document.getElementById("start").value,
          destination: document.getElementById("end").value,
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING
        },
        (response, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(response);
            const route = response.routes[0];
            const summaryPanel = document.getElementById("directions-panel");
            summaryPanel.innerHTML = "";
    
            // For each route, display summary information.
            for (let i = 0; i < route.legs.length; i++) {
              const routeSegment = i + 1;
              summaryPanel.innerHTML +=
                "<b>Route Segment: " + routeSegment + "</b><br>";
              summaryPanel.innerHTML += route.legs[i].start_address + " to ";
              summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
              summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
            }
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    }
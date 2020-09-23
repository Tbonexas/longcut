// Security issue causing this to not work to local storage on chrome//


// var nameInput = document.querySelector("#userName");
// var routeNumber = document.querySelector("#routeNum");
// var location = document.querySelector("#location");
// var emailInput = document.querySelector("#email");
// var signUpButton = document.querySelector("#infoBtn");
// var msgDiv = document.querySelector("#msg");
// var userName = document.querySelector("#name");
// var inputRoute= document.querySelector("#routes");
// var  currentLocation= document.querySelector("#currentLocation");
// var currentEmail = document.querySelector("#currentEmail");


// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();
  
//   // create user object from submission
//   var user = {
//     name: nameInput.value.trim(),
//     route: routeNumber.value.trim(),
//     locate: location.value.trim(),
//     email: emailInput.value.trim()
//   };

//   console.log(user);
  
//   // validate the fields
//   if (user.name === "") {
//     displayMessage("error", "Name cannot be blank");
//   } else if (user.locate === "") {
//     displayMessage("error", "Location cannot be blank");
//   } else if (user.email === "") {
//     displayMessage("error", "Email cannot be blank");
//   }else {
//     displayMessage("success", "Registered successfully");

//     // set new submission
//     localStorage.setItem("user", JSON.stringify(user));
    
//     // get most recent submission
//     var lastUser = JSON.parse(localStorage.getItem("user"));
//     userName.textContent = lastUser.name;
//     inputRoute.textContent = lastUser.route;
//     currentLocation.textContent = lastUser.locate;
//     currentEmail.textContent = lastUser.email;
    
//   }
// });

var x = document.getElementById("demo");

let latitude = null;
let longitude = null;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  x.innerHTML = "Latitude: " + latitude +
    "<br>Longitude: " + longitude;
}

function openMap() {
  if (latitude && longitude) {
    const link = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(link, "_blank");
  } else {
    alert("Please click FIND ME first!");
  }
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "Location access denied.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "Request timed out.";
      break;
    default:
      x.innerHTML = "Unknown error.";
  }
}
// Function to handle location change
function handleLocationChange() {
  var locationDropdown = document.getElementById("locationDropdown");
  locationDropdown.addEventListener("change", function () {
    var selectedLocation = this.value;
    // Update data based on selected location
    console.log("Selected location: ", selectedLocation);
    // Add your logic to fetch and update data here
  });
}

// Call the function to add the event listener
handleLocationChange();

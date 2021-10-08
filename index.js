const port = `http://localhost:3000`;
const tripCall = new TripService(port);
const locationCall = new LocationService(port);
const dropdown = document.getElementById("location-dropdown")
const ul = document.getElementById('trip-list');
const form = document.getElementById("trip-form")
const nameValue = document.getElementById("trip-name")
const addressValue = document.getElementById("trip-address")
const budgetValue = document.getElementById("trip-budget")
const locNameValue = document.getElementById("location-name")

tripCall.getTrips()
locationCall.getLocations()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    tripCall.createTrips()
    // debugger
    e.target.reset();  //after creating to clear the data
}
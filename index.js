const port = `http://localhost:3000`;
const tripCall = new TripService(port);
const locationCall = new LocationService(port);
const form = document.getElementById("trip-form")
const dropDown = document.getElementById("location-dropdown")
const nameValue = document.getElementById("trip-name")
const addressValue = document.getElementById("trip-address")
const budgetValue = document.getElementById("trip-budget")

tripCall.getTrips()
locationCall.getLocations()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    tripCall.createTrips()
    // debugger
}
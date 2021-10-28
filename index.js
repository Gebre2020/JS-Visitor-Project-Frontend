const port = `http://localhost:3000`;
const tripCall = new TripService(port);
const locationCall = new LocationService(port);

const oneWord = document.getElementById("one-word")

const form = document.getElementById("trip-form")
const dropdown = document.getElementById("location-dropdown")
const ul = document.getElementById('trip-list');

const nameValue = document.getElementById("trip-name")
const addressValue = document.getElementById("trip-address")
const budgetValue = document.getElementById("trip-budget")
const locNameValue = document.getElementById("location-name")

tripCall.getTrips()
locationCall.getLocations()

form.addEventListener('submit', handleSubmit) 

oneWord.addEventListener('click', oneWordRender)

function handleSubmit(e) {
    e.preventDefault();
    tripCall.createTrips()
    // debugger
    e.target.reset();  //after creating to clear the data
}

function oneWordRender () {
    for(const t of Trip.all){
        if(t.name.indexOf(' ') < 0){
            t.element.style.display =""               
        }else {
            t.element.style.display = "none"
        }
    }
}


class Location {
    constructor({city, state, id, trips }) {
        // debugger
        this.city = city
        this.state = state
        this.id = id
        this.trips = trips
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.city
        dropDown.appendChild(option)
    }
}
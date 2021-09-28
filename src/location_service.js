class LocationService {
    constructor(port) {
        this.port = port
    }

    getLocations() {
        fetch(`${this.port}/locations`)
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {
                //debugger
                //dropDown.value
                const l = new Location(element)
                //debugger
                l.addToDropDown()

            })
          
        })
    }

}
class LocationService {
    constructor(port) {
        this.port = port
    }

    getLocations() {
        fetch(`${this.port}/locations`)
        .then(response => response.json())
        .then(json => {
            //debugger
            for(const location of json.data) {
                let l = new Location({id: location.id, ...location.attributes})
           // json.forEach(element => {
            //json["data"].forEach(element => {
              //debugger
                //dropDown.value
                //const l = new Location(element)
                //debugger
                // const l = new Location({id: element.id, ...element.attributes})
                l.addToDom()
                l.addToDropDown()
            }        
        })
    }

}
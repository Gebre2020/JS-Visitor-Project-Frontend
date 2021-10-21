class TripService {
    constructor(port){
        this.port = port
    }

    // render trips 
    getTrips() {
        fetch(this.port + `/trips`)
        .then(response => response.json())
        .then(json => {
           //debugger
            for(const trip of json.data) {
               let t = new Trip({id: trip.id, ...trip.attributes})
              // debugger
               t.attachToDom()
            }
        })
    }
    
    
    createTrips() {
        //debugger
        const tripInfo = {
            
            trip: {            
                name: nameValue.value,
                address: addressValue.value,
                budget: budgetValue.value,
                location_id: dropdown.value,
                location_name: locNameValue.value               
            }          
        }
        //debugger
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(tripInfo)
        }

        //debugger
       fetch(this.port + `/trips`, configObject)    
       .then(response => response.json())
       // .then(json => console.log(json))
       .then(json => {
        let t = new Trip({id: json.data.id, ...json.data.attributes})
        const findLoc = Location.all.find(l => parseInt(l.id) === t.locationId)
       
        if (!findLoc) {
            const locObj = new Location({
                id: json.data.attributes.location_id, 
                name: json.data.attributes.location_name        
            })
            locObj.addToDom()
            locObj.addToDropDown()
        }
        t.attachToDom()
       })
    }

    updateTrip(trip) {
        const {name, address, budget, id} = trip
        const tripInfo = {
            name,
            address,
            budget
        }

        const configObject = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(tripInfo)
        }
        //debugger
        fetch(`${this.port}/trips/${id}`, configObject)
        .then( trip.render() )
        // .then(data => {
        //  //const t = new Trip(data)
        //  trip.render()
        // })
    }

    deleteTrip(e) {
        // debugger
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(`${this.port}/trips/${id}`, {method: 'DELETE'})
       .then(response => response.json())
       .then(json => alert(json.message))
    }

}
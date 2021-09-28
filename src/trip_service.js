class TripService {
    constructor(port){
        this.port = port
    }

    getTrips() {
        fetch(this.port + `/trips`)
        .then(response => response.json())
        .then(data => {
            for(const trip of data) {
               let t = new Trip(trip)
               t.attachToDom()
            }
        })
        .catch()
    }

    createTrips() {
        const tripInfo = {
            //debugger
            trip: {
                name: nameValue.value,
                address: addressValue.value,
                budget: budgetValue.value,
                location_id: dropDown.value
            }
        }
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
       .then(data => {
        const t = new Trip(data)
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

    

}
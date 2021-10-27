class Trip {
    static all = [];
    static tripsContainer = document.getElementById("trips-container")  
    constructor({name, address, budget, id, location_id}) {
        this.name =name
        this.address =address
        this.budget = budget
        this.id =id
        this.locationId = location_id
        
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `trip-${id}`;
        this.element.addEventListener('click', this.handleClick)
        Trip.all.push(this)
        // debugger
    }

    static filteredByLocation(filteredLocation) {
        if(filteredLocation) {
            for(const t of Trip.all){
                if(t.locationId === parseInt(filteredLocation.id)){
                    t.element.style.display =""               
                }else {
                    t.element.style.display = "none"
                }
            }
        }else {
            for(const t of Trip.all){
                t.element.style.display = ""
            }
        }
         // debugger
    // or
    //    if(filteredLocation){
    //        const filteredTrips = Trip.all.filter((t) => {
    //            //debugger
    //            return t.locationId === parseInt(filteredLocation.id)
    //        })
    //        Trip.tripsContainer.innerHTML = "";
    //        for(const trip of filteredTrips) {
    //            trip.renderTrip()
    //        }
    //     }else{ 
    //         Trip.tripsContainer.innerHTML = "";
    //         for(const trip of Trip.all) {
    //             trip.renderTrip()
    //         }    
    //    }
    }
    
    render() {
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h3 class="name">${this.name}</h3>
        Address: <span class="address">${this.address}</span>
        Budget: $<span class="budget">${this.budget}</span>
        </div>
        <button class="edit" data-id=${this.id}>Edit Trip</button>
        <button class="delete" data-id=${this.id}>X</button>
        
        `
        return this.element
    }

    updatedTripInfo() {
        //debugger
        this.name = this.element.querySelector(".edit-name").value;
        this.address = this.element.querySelector(".edit-address").value;
        this.budget = this.element.querySelector(".edit-budget").value;
        tripCall.updateTrip(this)
        // debugger
    }

    handleClick = e => {
        if(e.target.innerText === "Edit Trip") {
            console.log(e.target)
            e.target.innerText = "Save Trip"
            this.createEditForm()
        }else if(e.target.innerText === "X") {
            console.log(e.target)
            tripCall.deleteTrip(e)
        }else if(e.target.innerText === "Save Trip") {
            console.log("Save works")
            e.target.innerText = "Edit Trip"
            this.updatedTripInfo()
        }
    }

    createEditForm() {
        const div = this.element.querySelector('div');
        for(const element of div.children) {
            let inputValue = element.innerText;
            let name = element.classList[0];
            element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}"/>`
        }
        // debugger
    }

    attachToDom() {   // renderTrip()
        //debugger
        Trip.tripsContainer.appendChild(this.render())
    }

}
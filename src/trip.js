class Trip {
    static all = [];
    static cont = document.getElementById("trips-cont")
    constructor({name, address, id, budget, location_id, location}) {
        this.name =name
        this.address =address
        this.id =id
        this.budget = budget
        this.location_id = location_id
        this.location = location
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `trip-${id}`;
        this.element.addEventListener('click', this.handleClick)
        Trip.all.push(this)
        // debugger
    }
    
    render() {
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="name">${this.name}</h2>
        <p class="address">${this.address}</p>
        <p class="budget">${this.budget}</p>
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

    

}
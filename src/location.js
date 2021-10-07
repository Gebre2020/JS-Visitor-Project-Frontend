class Location {
    static all = [];
    static locationContainer = document.getElementById('loc-container');

    constructor({name, id, trips}) {
        // debugger
        this.name = name   
        this.id = id
        this.trips = trips
        
        this.active = false

        this.element = document.createElement('button')
        Location.all.push(this)
    }

    render() {
        this.element.innerText = this.name       
        this.element.id = `location-${this.id}`
        return this.element
    }

    addToDom(){
        Location.locationContainer.append(this.render())
        this.addListeners()
    }

    addListeners(){
        this.element.addEventListener('click', this.setActiveLocation)
    }

    setActiveLocation = (e) => {
        //event listener set location 
        //add filter method 
        //remove the current trips replace with new list of trips
        
        let filteredLocation
        // let body = document.querySelector('body');
        // body.style.backgroundColor = "pink"
        Location.all.forEach(l => {
            //debugger
            if(l.element === this.element && !this.active){
                // debugger
                l.element.classList.add('activated')
                l.active = true
                filteredLocation = l          
            }else{
                l.element.classList.remove('activated')   
                l.active = false
            }
            Trip.filteredByLocation(filteredLocation)  
        }) 
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.name
        dropdown.appendChild(option)
    }
}
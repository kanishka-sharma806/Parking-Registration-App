import Vehicle from "./Vehicle.js"
class Bike extends Vehicle{
    constructor(id,owner){
        super(id,owner)
        this.type = "bike"
        this.priceOptions = {
            daily : 10,
            monthly : 100,
            yearly : 1000
        } 
    }
}
export default Bike
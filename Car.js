import Vehicle from "./Vehicle.js"
class Car extends Vehicle{
    constructor(id,owner){
        super(id,owner)
        this.type = "car"
        this.priceOptions = {
            daily : 50,
            monthly : 500,
            yearly : 5000
        }  
    }
}
export default Car
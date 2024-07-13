import Vehicle from "./Vehicle.js"
class Cycle extends Vehicle{
    constructor(id,owner){
        super(id,owner)
        this.type = "cycle"
        this.priceOptions = {
            daily : 5,
            monthly : 50,
            yearly : 500
        }  
    }
}
export default Cycle
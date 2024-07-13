import Pass from "./Pass.js"
class Monthly extends Pass{
    constructor(vehicle){
        super(vehicle)
            this.price = vehicle.type === 'bike' ? 100 : (vehicle.type === 'cycle' ? 50 : 500)
            let timeStamp = new Date()
            timeStamp.setMonth(timeStamp.getMonth() + 1)
            this.expiry = timeStamp
    }
}
export default Monthly
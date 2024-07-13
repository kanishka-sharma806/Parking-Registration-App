import Daily from "./pass/Daily.js"
import Monthly from "./pass/Monthly.js"
import Yearly from "./pass/Yearly.js"
import Faculty from "./user/Faculty.js"
import Student from "./user/Student.js"
import Bike from "./vehicle/Bike.js"
import Car from "./vehicle/Car.js"
import Cycle from "./vehicle/Cycle.js"

document.addEventListener("DOMContentLoaded",() => {
    const Name=document.getElementById("userName")
    const Contact=document.getElementById("userContact")
    const role=document.getElementById("role")
    const saveUserBtn=document.getElementById("saveUserBtn")
    saveUserBtn.addEventListener("click",(e) => {
        e.preventDefault()
        const user = role.value === 'student' ? new Student(Name.value,Contact.value) : new Faculty(Name.value,Contact.value);
        alert(`Congratulations ${user.name} !! you are registered`)
        console.log(user)
        document.querySelector('.user').style.display = 'none'

        const vehicleId = document.getElementById('vehicleId')
        const vehicleType = document.getElementById('vehicleType')
        const vehicleSaveBtn = document.getElementById('vehicleSaveBtn')

        vehicleSaveBtn.addEventListener('click', (e) => {
            e.preventDefault()
            let vehicle = null
            switch(vehicleType.value){
                case'bike':
                    vehicle = new Bike(vehicleId.value, user)
                break;
                case 'cycle':
                    vehicle = new Cycle(vehicleId.value, user)
                break
                case 'car':
                    vehicle = new Car(vehicleId.value, user)
                break
            }
            alert(`Congratulations ${user.name} !! your vehicle is registered with the id ${vehicle.id}`)
            console.log(vehicle)
            document.querySelector('.vehicle').style.display = 'none'

            const passChoiceForm = document.querySelector('.passChoice')
            const dailyPass = new Daily(vehicle)
            const dailyPassBtn = document.createElement('INPUT')
            dailyPassBtn.setAttribute('type','button')
            dailyPassBtn.setAttribute('value', `Daily : ${dailyPass.price}`)
            passChoiceForm.appendChild(dailyPassBtn)
            dailyPassBtn.addEventListener('click', () => {
                dailyPass.print()
            })

            const monthlyPass = new Monthly(vehicle)
            const monthlyPassBtn = document.createElement('INPUT')
            monthlyPassBtn.setAttribute('type','button')
            monthlyPassBtn.setAttribute('value',`Monthly : ${monthlyPass.price}`)
            passChoiceForm.appendChild(monthlyPassBtn)
            monthlyPassBtn.addEventListener('click', () => {
                monthlyPass.print()
            })

            const yearlyPass = new Yearly(vehicle)
            const yearlyPassBtn = document.createElement('INPUT')
            yearlyPassBtn.setAttribute('type','button')
            yearlyPassBtn.setAttribute('value', `Yearly : ${yearlyPass.price}`)
            passChoiceForm.appendChild(yearlyPassBtn)
            yearlyPassBtn.addEventListener('click', () => {
                yearlyPass.print()
            })

        });
    });
});



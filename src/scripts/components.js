import { API } from "./api/api.js"
import { targetContainer } from "./main.js";
// import { event } from "./events.js"

let components = {

    createInterestsComp: function (data) {
        return `
        <fieldset>
        <legend><h3>Current Interests</h3></legend>
        Name: ${data.name}
        <br>
        Description: ${data.description}
        <br>
        Cost: $${data.cost}
        <br>
        Review: ${data.review}
        <br>
        Place: ${data.place.name}
        </fieldset>
        `
    },
    newInterestForm: function (place) {
        let el = document.createElement("div")
        let divInDiv = document.createElement("div")
        let svnBtn = document.createElement("button")

        el.setAttribute("id", "input-form")
        svnBtn.setAttribute("id", "save-btn")
        svnBtn.textContent = "save"

        divInDiv.innerHTML = `
        <fieldset>
        <legend><h3>Interest</h3></legend>
        <label for="name-input"><strong>Interest Name: </stong></label>
        <input id="name-input" type="text">
        <br>
        <br>
        <label for="description-input"><strong>Interest Description: </strong></label>
        <input id="description-input" type="text">
        <br>
        <br>
        <label for="cost-input"><strong>Interest Cost: </strong></label>
        <input id="cost-input" type="number">
        <br>
        <br>
        <label for="places-input"><strong>Place : </trong></label>
        <select id="places-input">
        <option value="${place[0].id}">${place[0].name}</option>
        <option value="${place[1].id}">${place[1].name}</option>
        <option value="${place[2].id}">${place[2].name}</option>
        </select>
        <br>
        </fieldset>
        `

        el.appendChild(divInDiv)
        el.appendChild(svnBtn)
        svnBtn.addEventListener("click", () => {
            console.log("it works!")
        })
        // targetContainer.appendChild(el)

        return el
    },
    interestsToDom: function () {
        API.getFromApi("interests", "_expand=place")
            .then(info => {
                info.forEach(data => {
                    console.log(data)
                    targetContainer.innerHTML += this.createInterestsComp(data)
                });

            })
    // },
    // saveInterestBtn: function () {
    //     let saveBtn = document.querySelector("#save-btn")
    //     saveBtn.addEventListener("click", () => {
    //         // console.log("saveBtn", "save button works")
    //     })
    },
    pushFormtoDom: function () {
        API.getFromApi("places")
            .then(info => {
                console.log("info", info)
                targetContainer.appendChild(this.newInterestForm(info))
                // debugger
            })
    }

}


export { components }


import { API } from "./api/api.js"
import { targetContainer } from "./main.js";

let components = {

    createInterestsComp: function (data) {
        return `
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
        `
    },
    newInterestForm: function (place) {
        return `
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
        <button id="save-interest">Save</button>
        </fieldset>

        `
    },
    interestsToDom: function () {
        API.getFromApi("interests", "_expand=place")
            .then(info => {
                info.forEach(data => {
                    console.log(data)
                    targetContainer.innerHTML += this.createInterestsComp(data)
                });

            })
    },
    pushPlacestoDom: function () {
        API.getFromApi("places")
        .then(info => {
            console.log("info", info)
            // info.forEach(data => {
                targetContainer.innerHTML = this.newInterestForm(info)

            // })
        })
    }
}


export { components }


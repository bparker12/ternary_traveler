import { API } from "./api/api.js"
import { targetContainer } from "./main.js";

let components = {

    createInterestsComp: function (data) {
        return `
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
        <label for="name-input">Interest Name: </label>
        <input id="name-input" type="text">
        <label for="description-input">Interest Description: </label>
        <input id="description-input" type="text">
        <label for="cost-input">Interest Cost: </label>
        <input id="cost-input" type="number">
        <label for="places-input">Interest : </label>
        <select id="places-input">
            <option value="${place.id}">${place.name}</option>
            <option value="${place.id}">${place.name}</option>
            <option value="${place.id}">${place.name}</option>
        </select>
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
}


export { components }


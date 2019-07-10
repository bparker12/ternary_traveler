
let helpers = {

    factoryFUnc: function (newInterest) {
        return `
        "id": ${newInterest.id},
        "placeId": ${newInterest.place},
        "name": ${newInterest.name},
        "description": ${newInterest.description},
        "cost": ${newInterest.cost},
        "review": null
        `
    }

}
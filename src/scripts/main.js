console.log("Your Webpack application is set up and ready to go. Please start writing code.")
import { components } from "./components.js"

let targetContainer = document.querySelector("#container")

components.interestsToDom()

export { targetContainer }
import { GovernorsDropdown } from "./governors.js"
import { getState } from "./TransientState.js"
import { FacilitiesDropdown } from "./facilities.js"


const container = document.querySelector("#container")

const render = async () => {
    const govHTML = await GovernorsDropdown()
    
    container.innerHTML = `
        ${govHTML}`
}

render()



//example asyc await from indiana jeans
// import { JeanChoices } from "./JeanChoices.js"
// import { LocationChoices } from "./LocationChoices.js"

// const container = document.querySelector("#container")

// const render = async () => {
//     const jeansHTML = JeanChoices()
//     const locationsHTML = await LocationChoices()
    
//     container.innerHTML = `
//         ${jeansHTML}
//         ${locationsHTML}
//     `
// }

// render()


// // Entry point: initial render
// export const render = () => {

//     // Basic structure
//     const body = document.querySelector("body")
//     body.innerHTML = `
//         <header>
//             <h1>Solar System Mining Marketplace</h1>
//         </header>

//         <article class="selections">
//             <section class="governor_selections" id="governors"></section>
//         </article>

//         <p>Selected Governor ID: <span id="currentGovernor">None</span></p>
        
//     `

//     // Render the dropdown inside #governors
//     GovernorsDropdown()

//     // Listen for state changes and update display
//     document.addEventListener("stateChanged", () => {
//         const state = getState()
//         const display = document.getElementById("currentGovernor")
//         display.textContent = state.selectedGovernor ?? "None"
//     })
// }

// // Run initial render
// render()

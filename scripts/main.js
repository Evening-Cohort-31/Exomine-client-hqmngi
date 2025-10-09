import { FacilitiesDropdown } from "./facilities.js"
import { GovernorsDropdown } from "./governors.js"
import { displayMinerals } from "./minerals.js"

const govSection = document.querySelector("#governors")
const facilitySection = document.querySelector("#facilities")
const mineralSelection = document.querySelector("#minerals")


const render = async () => {
    const govHTML = await GovernorsDropdown()
    const facilitiesHTML = await FacilitiesDropdown()
    
    govSection.innerHTML = `
        ${govHTML} `
        
    facilitySection.innerHTML = `
        ${facilitiesHTML}`

    
}

// Re-render facilities only when state changes
document.addEventListener("stateChanged", async () => {
  const facilitiesHTML = await FacilitiesDropdown()
  facilitySection.innerHTML = `${facilitiesHTML}`

// Render Minerals HTML only when facility is selected
document.addEventListener("facilityStateChanged", async () => {
  const mineralsHTML = await displayMinerals()
  mineralSelection.innerHTML = `${mineralsHTML}`
  render()
    

})  
})

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

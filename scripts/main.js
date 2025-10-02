import { GovernorsDropdown } from "./governors.js"
import { getState } from "./TransientState.js"
import { FacilitiesDropdown } from "./facilities.js"



// Initial render
document.getElementById("governors").innerHTML = GovernorsDropdown()
FacilitiesDropdown()  // initial render

document.addEventListener("stateChanged", () => {
    const state = getState()
    

    // Re-render facilities dropdown if governor changes
    FacilitiesDropdown()
})

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

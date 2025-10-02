// Each human habitation colony in the Solar System (Earth, Mars, Europa, etc...) has a governor. To keep each colony running efficiently, the governor has to purchase essential minerals from lightly staffed mining facilities that have been established on asteroids, moons, and rocky planets.
// From time to time, governors take leaves of absence, so their status can change from active to inactive. Only active governors should be displayed in the UI. By law, any person is eligible to become a Governor, but can only be a Governor of a since colony at any point in time.


// if loop that starts with boolean for active?


import { getGovernors } from "./database.js"
import { setGovernor } from "./TransientState.js"

// Render the dropdown inside a container (e.g., a div with id="governors")
export const GovernorsDropdown = () => {
    const container = document.getElementById("governors")
    const governors = getGovernors().filter(gov => gov.is_active) // only active governors

    // Build the dropdown HTML
    let html = `<select id="governorSelect">
        <option value="">Select a Governor</option>` // default empty option

    governors.forEach(gov => {
        html += `<option value = "${gov.id}">${gov.name}</option>`
    })

    html += `</select>`
    return html
}

// Listen for user selection
document.addEventListener("change", (event) => {
    if (event.target.id === "governorSelect") {
        const selectedId = parseInt(event.target.value)
        setGovernor(selectedId) // update Transient State & trigger stateChanged
    }
})

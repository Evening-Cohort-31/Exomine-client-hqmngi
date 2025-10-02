import { getFacilities, getGovernors } from "./database.js"
import { setFacility, getState } from "./TransientState.js"

export const FacilitiesDropdown = () => {
    const container = document.getElementById("facilities")
    const { selectedGovernor, selectedFacility } = getState()

    if (!selectedGovernor) {
        // No governor selected → show placeholder or disabled dropdown
        container.innerHTML = `<select id="facilitySelect" disabled>
                                    <option value="">Select a Governor first</option>
                               </select>`
        return
    }

// Find the colony of the selected governor
    const governor = getGovernors().find(gov => gov.id === selectedGovernor)
    const colonyId = governor.colony_id

    // Filter facilities by colony + active
    // Assuming your database has a property like 'colony_id' on facilities
    const facilities = getFacilities().filter(facility => facility.is_active && facility.colonies_id === colonyId)

    let html = `<select id="facilitySelect">
                    <option value="">Select a Facility</option>`
    facilities.forEach(facility => {
        // mark selected if it matches state.selectedFacility
        const selected = facility.id === selectedFacility ? "selected" : ""
        html += `<option value="${facility.id}" ${selected}>${facility.name}</option>`
    })
    html += `</select>`

    container.innerHTML = html
}

// Handle selection
document.addEventListener("change", (event) => {
    if (event.target.id === "facilitySelect") {
        const selectedId = parseInt(event.target.value)
        setFacility(selectedId)
    }
})
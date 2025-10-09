import { setFacility, getState } from "./TransientState.js"

//step 1: be able to handle facility selection changing by updating transient state
const handleFacilityChange = (changeEvent) => {
    if (changeEvent.target.name === "facilitySelect") {
        const facilitySelection = changeEvent.target.value
        setFacility(facilitySelection)
    }
}

//step 2: build dropdown html
export const FacilitiesDropdown = async () => {
    //fetch data from api 
    const response = await fetch("http://localhost:8088/facilities?_expand=colony")
    const facilityoptions = await response.json()
    //listen for a change event and if there is one, envoke handleGovChange to update transient state.
    document.addEventListener("change", handleFacilityChange)
    
    const currentState = getState()
    //build dropdown selection using database for array of options
    //facilityoptions.colonie.id
    let html = facilityoptions
        .filter(opt => opt.is_active === true)
        .filter(opt => opt.colonyId === currentState.selectedGovernor?.colonyId)
        .map(opt => {
            return `<option value = "${opt.id}"> ${opt.name} </option>`
            })
        .join("")

    return `<label for ="facilitySelect"> Select a facility: </label>
            <select id="facilitySelect" name ="facilitySelect">
                ${html}
            </select}`
}

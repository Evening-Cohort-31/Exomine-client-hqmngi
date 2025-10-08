import { getFacilities, getGovernors } from "./database.js"

const state = {
    selectedGovernor: null,
    selectedFacility: null,
    selectedMineral: null
}

export const setGovernor = (governorId) => {
    state.selectedGovernor = governorId
    state.selectedFacility = null // reset facility and mineral when governor changes
    state.selectedMineral = null
//     document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setFacility = (facilityId) => {
    state.selectedFacility = facilityId
    state.selectedMineral = null // reset mineral when facility changes
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setMineral = (mineralId) => {
    state.selectedMineral = mineralId
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}


export const getState = () => ({ ...state })





export const purchaseMineral = (colonyMinerals, facilityMinerals) => {
    
    const { selectedGovernor, selectedFacility, selectedMineral } = state

        // if (!selectedGovernor || !selectedFacility || !selectedMineral) return

    // Find the governor's colony
    const governorColony = getGovernors().find(gov => gov.id === selectedGovernor).colony_id

    // Check if colony already has this mineral
    let colonyMineral = colonyMinerals.find(
        cm => cm.colony_id === governorColony && cm.mineral_id === selectedMineral
    )

    if (colonyMineral) {
        // Use PUT: increment quantity
        colonyMineral.quantity += 1
    } else {
        // Use POST: create a new entry for this colony/mineral
        colonyMinerals.push({
            colony_id: governorColony,
            mineral_id: selectedMineral,
            quantity: 1
        })
    }

    // Reduce facility inventory by 1
    const facilityMineral = facilityMinerals.find(
        fm => fm.facility_id === selectedFacility && fm.mineral_id === selectedMineral
    )
    if (facilityMineral) {
        facilityMineral.quantity -= 1
    }

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

import { getFacilities, getGovernors } from "./database.js"

const state = {
    selectedGovernor: null,
    selectedFacility: null,
    selectedMineral: null
}

export const setGovernor = async (governorId) => {
    const response = await fetch(`http://localhost:8088/governors/${governorId}`)
    const governor = await response.json()
    state.selectedGovernor = governor
    state.selectedFacility = null // reset facility and mineral when governor changes
    state.selectedMineral = null
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setFacility = (facilityId) => {
    state.selectedFacility = facilityId
    state.selectedMineral = null // reset mineral when facility changes
    //document.dispatchEvent(new CustomEvent("stateChanged"))
}


// export const setMineral = (mineralId) => {
//     state.selectedMineral = mineralId
//     // document.dispatchEvent(new CustomEvent("stateChanged"))
// }



export const getState = () => state



// export const purchaseMineral = (colonyMinerals, facilityMinerals) => {
    
    
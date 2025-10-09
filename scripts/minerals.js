import { getState } from "./TransientState.js"



export const displayMinerals = async () => {

    const state = getState()
    const facilityID = parseInt(state.selectedFacility)

    const allMinerals = await fetch ("http://localhost:8088/facilityMineralQuantities?_expand=facility&_expand=mineral")
    const mineralOptions = await allMinerals.json()

    let html = ''

    const mineralDisplayHTML = mineralOptions
        .filter(opt => parseInt(opt.facility.id) === facilityID)
        .map(opt =>  `${opt.mineral.name} ${opt.quantity}`)
        .join("")
        

    html += mineralDisplayHTML

    return html


}

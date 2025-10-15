import { getState, addMineralToCart } from "./TransientState.js"

const handleMineralChoice = (changeEvent) => {
    if (changeEvent.target.name === "mineral") {
        const mineralSelection = changeEvent.target.value
        addMineralToCart(mineralSelection)
    }

}





export const displayMinerals = async () => {

    document.addEventListener("change", handleMineralChoice)

    const state = getState()
    const facilityID = parseInt(state.selectedFacility)

    const allMinerals = await fetch ("http://localhost:8088/facilityMineralQuantities?_expand=facility&_expand=mineral")
    const mineralOptions = await allMinerals.json()

    let html = '<h2>Facility Minerals</h2>'

    const mineralDisplayHTML = mineralOptions
        .filter(opt => parseInt(opt.facility.id) === facilityID)
        .map(opt =>  ` <input type="radio" name="mineral" value=${opt.mineral.id}> ${opt.quantity} tons of ${opt.mineral.name}`)
        .join("")
        

    html += mineralDisplayHTML

    return html


}

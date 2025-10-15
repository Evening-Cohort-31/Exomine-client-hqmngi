import { addMineralToCart, getState } from "./TransientState.js"


export const cartMinerals = async () => {

    const state = getState()
    const chosenMineralId = parseInt(state.selectedMineral)
    
    const allMinerals = await fetch ("http://localhost:8088/minerals")
    const mineralOptions = await allMinerals.json()

    let html = ""

    const cartMineralHTML = mineralOptions
       .filter(opt => parseInt(opt.id) === chosenMineralId)
       .map(opt =>`Purchase 1 ton of ${opt.name}`)
    
    html += cartMineralHTML

    return html 
}

export const orderButton = async () => {

    const cartMineralHTML = await cartMinerals()


    let html = `<div id="cartminerals">${cartMineralHTML}</div>`

    html += `<button id="purchase">Purchase Mineral</button>`


    return html


}
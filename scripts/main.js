// import {getGovernors} from "./governors.js"
// import {getFacilities} from "./facilities.js"
// import {getColonies} from "./minerals.js"
// import {inventoryFacilities} from "./colonies.js"
// import {inventoryCart} from "./TransientState.js"


export const render = () => {


    const html = `
        <header>
            <h1> Solar System Mining Marketplace </h1>
        </header>

        <article class="selections">
            <section class="governor_selections">
                ${getGovernors()}
            </section>
        
            <section class="facility_selections">
                ${getFacilities()}
            </section>
        </article>
        
        <article class="colony_selections">
                ${getColonies()}
        </article>
        
        <article class="facilities_inventory">
                ${inventoryFacilities()}
        </article>
        
        <article class="cart_inventory">
                ${inventoryCart()}
        </article> 
    `


    const body = document.querySelector("body")
    body.innerHTML = html
}

render()
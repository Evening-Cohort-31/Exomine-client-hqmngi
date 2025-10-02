// import {getGovernors} from "./governors.js"
// import {getFacilities} from "./facilities.js"
// import {getColonies} from "./minerals.js"
// import {inventoryFacilities} from "./colonies.js"
// import {inventoryCart} from "./TransientState.js"
import { facilityDropdown } from "./facilities.js"

export const render = async () => {

    const facilityDropdownHTML = await facilityDropdown()


    const html = `
        <header>
            <h1> Solar System Mining Marketplace </h1>
        </header>

        <article class="selections">
            <section class="governor_selections">
               
            </section>
        
            <section class="facility_selections">
                Choose a facility...
                ${facilityDropdownHTML}
            </section>
        </article>
        
        <article class="colony_selections">
               
        </article>
        
        <article class="facilities_inventory">
               
        </article>
        
        <article class="cart_inventory">
              
        </article> 
    `


    const body = document.querySelector("body")
    body.innerHTML = html
}

render()
// Each human habitation colony in the Solar System (Earth, Mars, Europa, etc...) has a governor. To keep each colony running efficiently, the governor has to purchase essential minerals from lightly staffed mining facilities that have been established on asteroids, moons, and rocky planets.
// From time to time, governors take leaves of absence, so their status can change from active to inactive. Only active governors should be displayed in the UI. By law, any person is eligible to become a Governor, but can only be a Governor of a since colony at any point in time.


// if loop that starts with boolean for active?


import { getGovernors } from "./database.js"
import { setGovernor } from "./TransientState.js"

//step 0: be able to handle governor selection changing by updating transient state
const handleGovChange = (changeEvent) => {
    if (changeEvent.target.name === "govSelect") {
        const govSelection = changeEvent.target.value
        setGoverner(govSelection)
    }
}

//step 1: governors coming from database.js (not API)
export const GovernorsDropdown = async () => {
    //fetch data from api 
    const response = await fetch("http://localhost:8088/governors")
    const govoptions = await response.json()
    //listen for a change event and if there is one, envoke handleGovChange to update transient state.
    document.addEventListener("change", handleGovChange)
    
    //build dropdown selection using database for array of options
    let html = govoptions
        .map(opt => {
            return `<option value = "${opt.id}"> ${opt.name} </option>`
        })
        .join("")

    return `<label for ="govSelect"> Select a governor: </label>
            <select id="govSelect"> name ="govSelect">
                ${html}
            </select}`
}



//step 2: change it up for governors coming from API (async/await)
// export const GovernorsDropdown = async () => {
//     // 1. Fetch data from your API
//     const response = await fetch("http://localhost:8088/governors");
//     const governors = await response.json();

//   //listen for a change event and if there is one, envoke handleGovChange to update transient state.
        // document.addEventListener("change", handleGovChange)
//     // 2. Start building the HTML
//     let html = `
//         <div class="dropdown-container">
//             <label for="governorSelect">Select a governor:</label>
//             <select id="governorSelect" name="governorSelect">
//     `;

//     // 3. Add an option for each governor
//     for (const gov of governors) {
//         html += `<option value="${gov.id}">${gov.name}</option>`;
//     }

//     // 4. Close the select and div
//     html += `
//             </select>
//         </div>
//     `;

//     // 5. Return the full HTML string
//     return html;
// };





// Listen for user selection

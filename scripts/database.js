// database.js

const database = {
    colonies: [
        { id: 1, name: "Earth", active: true },
        { id: 2, name: "Mars", active: true },
        { id: 3, name: "Europa", active: true },
        { id: 4, name: "Ganymede", active: false }
    ],

    governors: [
        { id: 1, name: "Aiko Tanaka", is_active: true, colony_id: 1 },
        { id: 2, name: "Luis Ortega", is_active: true, colony_id: 1 },
        { id: 3, name: "Sanaa El-Hassan", is_active: true, colony_id: 2 },
        { id: 4, name: "Ravi Narang", is_active: false, colony_id: 2 },
        { id: 5, name: "Ingrid Holm", is_active: true, colony_id: 3 },
        { id: 6, name: "Mateo Alvarez", is_active: true, colony_id: 4 }
    ],

    facilities: [
        { id: 1, name: "Ceres-Alpha", is_active: true, colonies_id: 1 },
        { id: 2, name: "Ceres-Beta", is_active: true, colonies_id: 1 },
        { id: 3, name: "Luna Mare Tranquillitatis", is_active: true, colonies_id: 1 },
        { id: 4, name: "Phobos Yard", is_active: true, colonies_id: 2 },
        { id: 5, name: "Deimos Outpost", is_active: true, colonies_id: 2 },
        { id: 6, name: "Vesta-North", is_active: true, colonies_id: 2 },
        { id: 7, name: "Europa Ridge-7", is_active: true, colonies_id: 3 },
        { id: 8, name: "Pallas-Station", is_active: false, colonies_id: 3 },
        { id: 9, name: "Callisto Forge", is_active: true, colonies_id: 3 },
        { id: 10, name: "Ganymede Basin", is_active: false, colonies_id: 4 },
        { id: 11, name: "Ganymede Deepworks", is_active: true, colonies_id: 4 },
        { id: 12, name: "Io-Vulcan Forge", is_active: true, colonies_id: 4 }
    ],

    minerals: [
        { id: 1, name: "Iron" },
        { id: 2, name: "Magnesium" },
        { id: 3, name: "Nickel" },
        { id: 4, name: "Cobalt" },
        { id: 5, name: "Platinum" },
        { id: 6, name: "Palladium" },
        { id: 7, name: "Silicates" },
        { id: 8, name: "Water Ice" },
        { id: 9, name: "Helium-3" },
        { id: 10, name: "Rare Earth Elements" }
    ],

    facility_mineral_quantities: [
        { id: 1, facility_id: 1, mineral_id: 1, quantity: 50 },
        { id: 2, facility_id: 1, mineral_id: 2, quantity: 30 },
        { id: 3, facility_id: 2, mineral_id: 3, quantity: 20 },
        { id: 4, facility_id: 3, mineral_id: 9, quantity: 40 },
        { id: 5, facility_id: 4, mineral_id: 1, quantity: 25 },
        { id: 6, facility_id: 4, mineral_id: 4, quantity: 15 },
        { id: 7, facility_id: 5, mineral_id: 3, quantity: 10 },
        { id: 8, facility_id: 6, mineral_id: 2, quantity: 20 },
        { id: 9, facility_id: 7, mineral_id: 8, quantity: 60 },
        { id: 10, facility_id: 7, mineral_id: 10, quantity: 12 },
        { id: 11, facility_id: 9, mineral_id: 5, quantity: 8 },
        { id: 12, facility_id: 11, mineral_id: 6, quantity: 14 },
        { id: 13, facility_id: 12, mineral_id: 7, quantity: 25 },
        { id: 14, facility_id: 12, mineral_id: 9, quantity: 18 }
    ],

    colony_mineral_quantities: []

// There are two options for colony_mineral quantities. Start with it empty like above, or pre-seed it. 

// Here is how we would pre-seed: 
// mineral_quantities_at_colonies: (() => {
//         let idCounter = 1    //We want to give every entry an ID
//         const rows = []
//         for (let colony_id = 1; colony_id <= 4; colony_id++) {
//             for (let mineral_id = 1; mineral_id <= 10; mineral_id++) {
//                 rows.push({
//                     id: idCounter++,
//                     colony_id,
//                     mineral_id,
//                     mineral_quantity: 0
//                 })
//             }
//         }
//         return rows
//     })
// I decided not to pre-seed because it doesnt seem to be used in practice from my research. 
// We will want to POST new data into here when a colony makes a purchase.
}

// Exports
// Also not sure if structuredClone makes sense anymore since we are actually touching the data. We will see.
export const getColonies = () => structuredClone(database.colonies)
export const getGovernors = () => structuredClone(database.governors)
export const getFacilities = () => structuredClone(database.facilities)
export const getMinerals = () => structuredClone(database.minerals)
export const getFacilityMinerals = () => structuredClone(database.mineral_quantities_at_facility)
export const getColonyMinerals = () => structuredClone(database.mineral_quantities_at_colonies)

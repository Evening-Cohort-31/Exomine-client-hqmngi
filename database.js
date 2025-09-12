// database.js

const database = {
    colonies: [
        { id: 1, name: "Earth", active: true },
        { id: 2, name: "Mars", active: true },
        { id: 3, name: "Europa", active: true },
        { id: 4, name: "Ganymede", active: false }
    ],

    governors: [
        { id: 1, person_name: "Aiko Tanaka", active: true, started_on: "2125-01-03", ended_on: null, colony_id: 1 },
        { id: 2, person_name: "Luis Ortega", active: true, started_on: "2126-05-21", ended_on: null, colony_id: 1 },
        { id: 3, person_name: "Sanaa El-Hassan", active: true, started_on: "2124-08-15", ended_on: null, colony_id: 2 },
        { id: 4, person_name: "Ravi Narang", active: false, started_on: "2120-02-10", ended_on: "2125-03-01", colony_id: 2 },
        { id: 5, person_name: "Ingrid Holm", active: true, started_on: "2126-11-12", ended_on: null, colony_id: 3 }
    ],

    miningFacilities: [
        { id: 1, name: "Ceres-Alpha", location: "Ceres Main Belt", active: true },
        { id: 2, name: "Ceres-Beta", location: "Ceres Main Belt", active: true },
        { id: 3, name: "Vesta-North", location: "Vesta Main Belt", active: true },
        { id: 4, name: "Pallas-Station", location: "Pallas Main Belt", active: false },
        { id: 5, name: "Luna Mare Tranquillitatis", location: "Moon (Earth)", active: true },
        { id: 6, name: "Phobos Yard", location: "Phobos (Mars)", active: true },
        { id: 7, name: "Deimos Outpost", location: "Deimos (Mars)", active: true },
        { id: 8, name: "Europa Ridge-7", location: "Europa", active: true },
        { id: 9, name: "Ganymede Basin", location: "Ganymede", active: false },
        { id: 10, name: "Callisto Forge", location: "Callisto", active: true }
    ],

    minerals: [
        { id: 1, name: "Iron", category: "Metal" },
        { id: 2, name: "Magnesium", category: "Metal" },
        { id: 3, name: "Nickel", category: "Metal" },
        { id: 4, name: "Cobalt", category: "Metal" },
        { id: 5, name: "Platinum", category: "PGM" },
        { id: 6, name: "Palladium", category: "PGM" },
        { id: 7, name: "Silicates", category: "Silicate" },
        { id: 8, name: "Water Ice", category: "Volatile" },
        { id: 9, name: "Helium-3", category: "Isotope" },
        { id: 10, name: "Rare Earth Elements", category: "Lanthanide" }
    ],

    // Junction tables as arrays
    facilityMinerals: [
        { facility_id: 1, mineral_id: 1 },
        { facility_id: 1, mineral_id: 2 },
        { facility_id: 2, mineral_id: 3 },
        { facility_id: 3, mineral_id: 4 },
        { facility_id: 5, mineral_id: 9 },
        { facility_id: 8, mineral_id: 8 },
        { facility_id: 8, mineral_id: 10 },
        { facility_id: 10, mineral_id: 5 }
    ],

    colonyMinerals: [
        { colony_id: 1, mineral_id: 9 },
        { colony_id: 1, mineral_id: 5 },
        { colony_id: 2, mineral_id: 1 },
        { colony_id: 2, mineral_id: 3 },
        { colony_id: 3, mineral_id: 8 },
        { colony_id: 3, mineral_id: 10 }
    ]
}

// Exports for use in other modules
export const getColonies = () => structuredClone(database.colonies)
export const getGovernors = () => structuredClone(database.governors)
export const getFacilities = () => structuredClone(database.miningFacilities)
export const getMinerals = () => structuredClone(database.minerals)
export const getFacilityMinerals = () => structuredClone(database.facilityMinerals)
export const getColonyMinerals = () => structuredClone(database.colonyMinerals)

// main.js
import { GovernorsDropdown } from "./governors.js";
import { FacilitiesDropdown } from "./facilities.js";
import { FacilityMinerals, ColonyMinerals } from "./minerals.js";
import { wirePurchaseButton } from "./purchase.js";

const governorsSection = document.querySelector("#governors");
const facilitiesSection = document.querySelector("#facilities");
const facilityMineralsSection = document.querySelector("#facilityMinerals");
const colonyMineralsSection = document.querySelector("#colonyMinerals");

const render = async () => {
  governorsSection.innerHTML = await GovernorsDropdown();
  facilitiesSection.innerHTML = await FacilitiesDropdown();
  facilityMineralsSection.innerHTML = await FacilityMinerals();
  colonyMineralsSection.innerHTML = await ColonyMinerals();
  wirePurchaseButton();
};

// Re-render on state changes
document.addEventListener("stateChanged", render);

// Initial render when page loads
render();

// minerals.js
import { getState, setMineral } from "./transientState.js";

export const FacilityMinerals = async () => {
  const { selectedFacility } = getState();
  if (!selectedFacility) {
    return "<p>Select a facility to view available minerals.</p>";
  }

  const [mineralsResponse, quantitiesResponse] = await Promise.all([
    fetch("http://localhost:8088/minerals"),
    fetch(`http://localhost:8088/facility_mineral_quantities?facility_id=${selectedFacility.id}`)
  ]);

  const mineralsArray = await mineralsResponse.json();
  const facilityMineralQuantities = await quantitiesResponse.json();

  const mineralListHTML = facilityMineralQuantities
    .filter((quantityRecord) => quantityRecord.quantity > 0)
    .map((quantityRecord) => {
      const mineralObject = mineralsArray.find(
        (mineralItem) => mineralItem.id === quantityRecord.mineral_id
      );
      return `
        <label>
          <input type="radio" name="mineral" value="${mineralObject.id}">
          ${mineralObject.name} — ${quantityRecord.quantity} tons
        </label>
      `;
    })
    .join("<br/>");

  const handleMineralSelection = (event) => {
    if (event.target.name === "mineral") {
      const mineralId = event.target.value;
      setMineral(mineralId);
    }
  };

  document.removeEventListener("change", handleMineralSelection);
  document.addEventListener("change", handleMineralSelection);

  return mineralListHTML || "<p>No minerals available at this facility.</p>";
};

export const ColonyMinerals = async () => {
  const { selectedGovernor } = getState();
  if (!selectedGovernor) {
    return "<p>Select a governor to view their colony's mineral inventory.</p>";
  }

  const colonyId = selectedGovernor.colonieId;

  const [mineralsResponse, colonyQuantitiesResponse] = await Promise.all([
    fetch("http://localhost:8088/minerals"),
    fetch(`http://localhost:8088/colony_mineral_quantities?colony_id=${colonyId}`)
  ]);

  const mineralsArray = await mineralsResponse.json();
  const colonyMineralQuantities = await colonyQuantitiesResponse.json();

  if (colonyMineralQuantities.length === 0) {
    return `<p>${selectedGovernor.name}'s colony currently has no minerals stored.</p>`;
  }

  const colonyInventoryHTML = colonyMineralQuantities
    .map((quantityRecord) => {
      const mineralObject = mineralsArray.find(
        (mineralItem) => mineralItem.id === quantityRecord.mineral_id
      );
      return `${mineralObject.name}: ${quantityRecord.quantity} tons`;
    })
    .join("<br/>");

  return `<div>${colonyInventoryHTML}</div>`;
};

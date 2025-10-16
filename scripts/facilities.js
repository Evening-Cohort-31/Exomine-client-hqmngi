// facilities.js
import { getState, setFacility } from "./transientState.js";

const handleFacilityChange = (event) => {
  if (event.target.id === "facilitySelect") {
    const facilityId = event.target.value;
    setFacility(facilityId);
  }
};

export const FacilitiesDropdown = async () => {
  const response = await fetch("http://localhost:8088/facilities");
  const facilitiesArray = await response.json();

  const currentState = getState();
  const selectedFacility = currentState.selectedFacility;

  document.removeEventListener("change", handleFacilityChange);
  document.addEventListener("change", handleFacilityChange);

  const optionsHTML = facilitiesArray
    .filter((facilityObject) => facilityObject.is_active)
    .map((facilityObject) => {
      const selected =
        selectedFacility?.id === facilityObject.id ? "selected" : "";
      return `<option value="${facilityObject.id}" ${selected}>${facilityObject.name}</option>`;
    })
    .join("");

  return `
    <label for="facilitySelect">Select a Facility:</label>
    <select id="facilitySelect" name="facilitySelect">
      <option value="">Choose a facility</option>
      ${optionsHTML}
    </select>
  `;
};


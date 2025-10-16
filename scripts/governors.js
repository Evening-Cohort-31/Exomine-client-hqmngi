// governors.js
import { setGovernor, getState } from "./transientState.js";

const handleGovernorChange = (event) => {
  if (event.target.id === "governorSelect") {
    const governorId = event.target.value;
    setGovernor(governorId);
  }
};

export const GovernorsDropdown = async () => {
  const response = await fetch("http://localhost:8088/governors");
  const governorsArray = await response.json();

  document.removeEventListener("change", handleGovernorChange);
  document.addEventListener("change", handleGovernorChange);

  const currentState = getState();
  const selectedGovernor = currentState.selectedGovernor;

  const optionsHTML = governorsArray
    .filter((governorObject) => governorObject.is_active)
    .map((governorObject) => {
      const selected =
        selectedGovernor?.id === governorObject.id ? "selected" : "";
      return `<option value="${governorObject.id}" ${selected}>${governorObject.name}</option>`;
    })
    .join("");

  return `
    <label for="governorSelect">Select a Governor:</label>
    <select id="governorSelect" name="governorSelect">
      <option value="">Choose a governor</option>
      ${optionsHTML}
    </select>
  `;
};

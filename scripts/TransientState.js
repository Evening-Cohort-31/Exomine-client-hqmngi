// transientState.js
// ------------------------------------------------------
// Holds the user's current selections during interaction
// ------------------------------------------------------

const transientState = {
  selectedGovernor: null,
  selectedFacility: null,
  selectedMineral: null,
};

// Return a reference to the transient state
export const getState = () => transientState;

// ---------------- GOVERNOR ----------------
export const setGovernor = async (governorId) => {
  if (!governorId) {
    transientState.selectedGovernor = null;
    document.dispatchEvent(new CustomEvent("stateChanged"));
    return;
  }

  const response = await fetch(`http://localhost:8088/governors/${governorId}`);
  const governorObject = await response.json();

  const previousGovernorId = transientState.selectedGovernor?.id;
  if (previousGovernorId !== governorObject.id) {
    transientState.selectedGovernor = governorObject;
    transientState.selectedFacility = null;
    transientState.selectedMineral = null;

    document.dispatchEvent(new CustomEvent("stateChanged"));
  }
};

export const setFacility = async (facilityId) => {
  if (!facilityId) {
    transientState.selectedFacility = null;
    document.dispatchEvent(new CustomEvent("stateChanged"));
    return;
  }

  const response = await fetch(`http://localhost:8088/facilities/${facilityId}`);
  const facilityObject = await response.json();

  const previousFacilityId = transientState.selectedFacility?.id;
  if (previousFacilityId !== facilityObject.id) {
    transientState.selectedFacility = facilityObject;
    transientState.selectedMineral = null;

    document.dispatchEvent(new CustomEvent("stateChanged"));
  }
};

export const setMineral = (mineralId) => {
  transientState.selectedMineral = Number(mineralId);
};

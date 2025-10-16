// purchase.js
import { getState } from "./transientState.js";

export const wirePurchaseButton = () => {
  const purchaseButton = document.querySelector("#purchaseBtn");
  if (!purchaseButton) return;

  purchaseButton.onclick = async () => {
    // 1) Read current selections
    const { selectedGovernor, selectedFacility, selectedMineral } = getState();

    // 2) Fallback: if transientState has no mineral, read from DOM
    let mineralId = selectedMineral;
    const checkedRadio = document.querySelector('input[name="mineral"]:checked');
    if (!mineralId && checkedRadio) {
      mineralId = Number(checkedRadio.value);
    }

    // 3) Validate
    if (!selectedGovernor || !selectedFacility || !mineralId) {
      alert("Pick a governor, facility, and mineral first.");
      return;
    }

    const colonyId = selectedGovernor.colonieId;      // note: your FK is "colonieId"
    const facilityId = selectedFacility.id;

    try {
      // 4) Read current facility quantity row for this mineral
      const facilityRowsResponse = await fetch(
        `http://localhost:8088/facility_mineral_quantities?facility_id=${facilityId}&mineral_id=${mineralId}`
      );
      const facilityRows = await facilityRowsResponse.json();
      const facilityRow = facilityRows[0];

      if (!facilityRow || facilityRow.quantity < 1) {
        alert("That mineral is out of stock at this facility.");
        return;
      }

      // 5) Read (or create) colony quantity row for this mineral
      const colonyRowsResponse = await fetch(
        `http://localhost:8088/colony_mineral_quantities?colony_id=${colonyId}&mineral_id=${mineralId}`
      );
      const colonyRows = await colonyRowsResponse.json();
      const colonyRow = colonyRows[0];

      // 6) Apply updates
      // Facility: decrement
      await fetch(`http://localhost:8088/facility_mineral_quantities/${facilityRow.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: facilityRow.quantity - 1 })
      });

      // Colony: increment or create
      if (colonyRow) {
        await fetch(`http://localhost:8088/colony_mineral_quantities/${colonyRow.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: colonyRow.quantity + 1 })
        });
      } else {
        await fetch(`http://localhost:8088/colony_mineral_quantities`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            colony_id: colonyId,
            mineral_id: mineralId,
            quantity: 1
          })
        });
      }

      // 7) Re-render everything so lists and counts update
      document.dispatchEvent(new CustomEvent("stateChanged"));
    } catch (error) {
      console.error("Purchase failed:", error);
      alert("Purchase failed. Check the console for details.");
    }
  };
};

export const facilityDropdown = async () => {

    const response = await fetch("http://localhost:8088/miningFacilities")

    const facilityOptions = await response.json()

    let html = `<select id="resource">
                    <option value="0">Choose a facility...</option>`


    const facilityChoicesHTML = facilityOptions.map(
        (facility) => {
            return `
                <option value="${facility.id}">${facility.name}</option>`
        }
    )

    html += facilityChoicesHTML.join("")

    html += `</select>`

    return html
             
}


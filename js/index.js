let plantsObj = [];

if(localStorage.getItem("plants")){
    plantsObj = JSON.parse(localStorage.getItem("plants"));
}

function testInitialize() {
    plantsObj.push({
        "plantid": 0,
        "plantdetails": {
            "picture": "",
            "name": "plantZero",
            "place": "Living Room",
            "waterTime": "12:30",
        }
    });
    plantsObj.push({
            "plantid": 1,
            "plantdetails": {
                "picture": "",
                "name": "plantOne",
                "place": "Corridor",
                "waterTime": "02:00",
            }
    });
    plantsObj.push({
            "plantid": 2,
            "plantdetails": {
                "picture": "",
                "name": "plantTwo",
                "place": "Guests Room",
                "waterTime": "09:25",
            }
    });
    localStorage.setItem("plants", JSON.stringify(plantsObj));
}

function getData() {
    let result = "";
    if (localStorage.getItem("plants")) {
        result = localStorage.getItem("plants");
    }
    return JSON.parse(result);
}

function setSelectedPlant(plant) {
    sessionStorage.setItem("selectedPlant", plant);
    return console.log("Selected plant #" + plant);
}

function addPlant() {
    let plant = {
        "picture": "",
        "name": document.getElementById("modalPlantName").value,
        "place": document.getElementById("modalPlantPlace").value,
        "waterTime": document.getElementById("modalPlantWaterTime").value,
    }

    if (plant) {
        plantsObj.push({
            "plantid": plantsObj.length,
            "plantdetails": {
                "picture": plant.picture,
                "name": plant.name,
                "place": plant.place,
                "waterTime": plant.waterTime,
            }
        });
        localStorage.setItem("plants", JSON.stringify(plantsObj));
        console.log("Added plant #" + (plantsObj.length - 1) + "!");
        window.location.reload();
    } else {
        console.log("Failed to add plant.");
    }
}

function loadPlantsTable() {
    // testInitialize();
    let plants = "";
    if(plantsObj[0]){
        plants = getData();
        for (let i = 0; i < plants.length; i++) {
            let htmlContentToAppend = `
                <tr class="plantsrow" onclick=setSelectedPlant(` + plants[i].plantid + `)>
                    <td scope="row">
                        <img src="` + plants[i].plantdetails.picture + `" alt="Plant picture ` + [i] + `">
                    </td>
                    <td>` + plants[i].plantdetails.name + `</td>
                    <td>` + plants[i].plantdetails.place + `</td>
                    <td>` + plants[i].plantdetails.waterTime + `</td>
                </tr>
            `;
            document.getElementById("plantstable").innerHTML += htmlContentToAppend;
        };
        return console.log("Finished loading all " + plants.length + " plants!");
    }
    else{
        return console.log("There are no plants to be loaded.");
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    loadPlantsTable();
    document.getElementById("modalSaveButton").addEventListener("click", function () {
        addPlant();
    });
});
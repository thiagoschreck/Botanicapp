function testInitialize(){
    let plantsObj = JSON.stringify(
        [
            {
                "plantid": 0,
                "plantdetails": {
                    "picture": "",
                    "name": "plantZero",
                    "place": "Living Room",
                    "waterTime": "12:30",
                }
            },
            {
                "plantid": 1,
                "plantdetails": {
                    "picture": "",
                    "name": "plantOne",
                    "place": "Corridor",
                    "waterTime": "02:00",
                }
            },
            {
                "plantid": 2,
                "plantdetails": {
                    "picture": "",
                    "name": "plantTwo",
                    "place": "Guests Room",
                    "waterTime": "09:25",
                }
            },
        ],
    );
    localStorage.setItem("plants", plantsObj);
}

function getData(){
    let result = "";
    if (localStorage.getItem("plants")){
        result = localStorage.getItem("plants");
    }
    return JSON.parse(result);
}

function setSelectedPlant(plant){
    sessionStorage.setItem("selectedPlant", plant);
    return console.log("Selected plant #" + plant);
}

function loadPlantsTable(){
    testInitialize();
    let plants = getData();
    for(let i=0; i<plants.length; i++){
        let htmlContentToAppend = `
            <tr class="plantsrow" onclick=setSelectedPlant(`+ plants[i].plantid +`)>
                <td scope="row">
                    <img src="`+ plants[i].plantdetails.picture +`" alt="Plant picture `+ [i] +`">
                </td>
                <td>`+ plants[i].plantdetails.name +`</td>
                <td>`+ plants[i].plantdetails.place +`</td>
                <td>`+ plants[i].plantdetails.waterTime +`</td>
            </tr>
        `;
        document.getElementById("plantstable").innerHTML += htmlContentToAppend;
    };
    return console.log("Finished loading all " + plants.length + " plants!");
}
function getData(){
    let result = "";
    if (localStorage.getItem("plants")){
        result = localStorage.getItem("plants");
    }
    return result;
}

function loadPlantsTable(){
    let plants = getData();
    let htmlContentToAppend = `
        <tr class="plantsrow">
            <td scope="row">
                <img src="`+ plants.picture +`" alt="Plant picture">
            </td>
            <td>`+ plants.name +`</td>
            <td>`+ plants.place +`</td>
            <td>`+ plants.waterTime +`</td>
        </tr>
    `;
    alert(plants);
    document.getElementById("plantstable").innerHTML += htmlContentToAppend;
    return htmlContentToAppend;
}
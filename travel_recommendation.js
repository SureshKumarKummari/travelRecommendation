let data = {};


fetch("travel_recommendation_api.json")
.then(response => response.json())
.then(result => {
    data = result;
    console.log(data);
});


function searchPlaces(){

    const keyword = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const results = document.getElementById("results");

    results.innerHTML = "";


    if(keyword.includes("beach")){

        data.beaches.forEach(place => {
            showPlace(place);
        });

    }

    else if(keyword.includes("temple")){

        data.temples.forEach(place => {
            showPlace(place);
        });

    }

    else if(keyword.includes("country")){

        data.countries.forEach(country => {

            country.cities.forEach(city => {
                showPlace(city);
            });

        });

    }

}



function showPlace(place){

    const results = document.getElementById("results");

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${place.imageUrl}">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
    `;

    results.appendChild(card);

}



function clearResults(){

    document.getElementById("results").innerHTML = "";
}
function printSearchResults(search) {
    document.querySelector("#search-results").innerHTML = ""
    for (let i = 0; i < search.data.length; i++) {
        let card = `<img src=${search.data[i].images.small} class="card-image" />`
        document.querySelector("#search-results").innerHTML += card
    }
}

//printSearchResults(search)

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    //Valores de los input
    let cardName = document.getElementById("search-input").value
    console.log(document.getElementById("search-input").value);
    let formatValue = document.getElementById("format").value
    console.log(document.getElementById("format").value);
    let supertypesValue = document.getElementById("supertypes").value
    console.log(document.getElementById("supertypes").value);


    //Filtros para la búsqueda
    let filterFormat = ""
    let filterSupertypes = ""

    if (supertypesValue == "Pokémon") {
        filterSupertypes = "supertype:pokemon"
    } else if (supertypesValue == "Entrenadores") {
        filterSupertypes = "supertype:trainer"
    } else if (supertypesValue == "Energías") {
        filterSupertypes = "supertype:energy"
    } else filterSupertypes = ""

    if (formatValue == "Estándar") {
        filterFormat = "legalities.standard:legal"
    } else if (formatValue == "Expandido") {
        filterFormat = "legalities.expanded:legal"
    } else if (formatValue == "Unlimited") {
        filterFormat = "legalities.unlimited:legal"
    } else filterFormat = "legalities.unlimited:legal"



    console.log(`https://api.pokemontcg.io/v2/cards?q=name:"${cardName}" ${filterSupertypes} ${filterFormat}&orderBy=-set.releaseDate`)

    fetch(`https://api.pokemontcg.io/v2/cards?q=name:"${cardName}" ${filterSupertypes} ${filterFormat}&orderBy=-set.releaseDate`)
        .then(res => res.json())
        .catch((error) => console.error("Error:", error))
        .then(search => printSearchResults(search))

})

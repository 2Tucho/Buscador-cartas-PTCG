//Creo variable vacía con mis resultados del fetch
let searchResults = {}

function printSearchResults(search) {
    document.querySelector("#search-results").innerHTML = ""; //Vacío el interior del div para que no se acumulen búsquedas
    let arrayList = []
    for (let i = 0; i < search.data.length; i++) {
        let card = `<section class="card-container">
                        <img src=${search.data[i].images.small} class="card-image"/>
                        <button id="${search.data[i].id}" class="open-modal-button">Ampliar</button>
                    </section>`;
        document.querySelector("#search-results").innerHTML += card
        arrayList.push(search.data[i].id) //Relleno array con los datos buscados
    }
    console.log(arrayList)
    arrayList.map(id => {
        document.getElementById(`${id}`).addEventListener("click", function (event) {
            let modal = document.getElementById("modal-box");
            modal.style.display = "block";
            let cardToPrint = searchResults.data.filter(elem => elem.id == id)
            //Llamada a la función que pinta la tarjeta en el Modal con argumento = cardToPrint: printCardData(cardToPrint)
        })
    })

};

function printCardData(param) {
    //document.getElementsByClassName("modal-content")[0].innerHTML += `<p>HOLA CARACOLA</p>`
    
}
//printCardData()

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    //Valores de los input
    let cardName = document.getElementById("search-input").value;
    console.log(document.getElementById("search-input").value);
    let formatValue = document.getElementById("format").value;
    console.log(document.getElementById("format").value);
    let supertypesValue = document.getElementById("supertypes").value;
    console.log(document.getElementById("supertypes").value);


    //Filtros para la búsqueda
    let filterFormat = "";
    let filterSupertypes = "";

    if (supertypesValue == "Pokémon") {
        filterSupertypes = "supertype:pokemon"
    } else if (supertypesValue == "Entrenadores") {
        filterSupertypes = "supertype:trainer"
    } else if (supertypesValue == "Energías") {
        filterSupertypes = "supertype:energy"
    } else filterSupertypes = "";

    if (formatValue == "Estándar") {
        filterFormat = "legalities.standard:legal"
    } else if (formatValue == "Expandido") {
        filterFormat = "legalities.expanded:legal"
    } else if (formatValue == "Unlimited") {
        filterFormat = "legalities.unlimited:legal"
    } else filterFormat = "legalities.unlimited:legal";

    console.log(`https://api.pokemontcg.io/v2/cards?q=name:"${cardName}" ${filterSupertypes} ${filterFormat}&orderBy=-set.releaseDate`);

    fetch(`https://api.pokemontcg.io/v2/cards?q=name:"${cardName}" ${filterSupertypes} ${filterFormat}&orderBy=-set.releaseDate`)
        .then(res => res.json())
        .catch((error) => console.error("Error:", error))
        .then(search => {
            searchResults = search;
            printSearchResults(searchResults)
        })
});

//MODAL
// Ventana modal
let modal = document.getElementById("modal-box");
console.log(modal)

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
let span = document.getElementById("close-modal");
console.log(span);

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click", function () {
    modal.style.display = "none";
    console.log("Hey existo")
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        console.log("Hey funciono")
    }
});



/* function displayModalBox() {
    let data = `<div id="modal-box" class="modal">
                <div class="modal-content">
                    <span id="close-modal">&times;</span>
                    <h2>Ventana modal</h2>
                    <p>Esto es el texto de la ventana</p>
                </div>
            </div>`
    document.getElementById("search-results").innerHTML += data

    // Ventana modal
    let modal = document.getElementById("modal-box");

    // Hace referencia al elemento <span> que tiene la X que cierra la ventana
    let span = document.getElementById("close-modal");

    // Si el usuario hace click en la x, la ventana se cierra
    span.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Si el usuario hace click fuera de la ventana, se cierra.
    window.addEventListener("click", function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
} */
//printSearchResults(search)
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
            console.log(cardToPrint)
            printCardData(cardToPrint) //Llamada a la función que pinta la tarjeta en el Modal con argumento = cardToPrint
        })
    })

};

function printCardData(data) {
    //atk = data[0].attacks[1]
    function attacksCost(atk) {
        if(atk == undefined) {
            return ""
        } else return data[0].attacks[1].cost
    }
    function attackName(atk) {
        if(atk == undefined) {
            return ""
        } else return data[0].attacks[1].name
    }
    function attackDamage(atk) {
        if(atk == undefined) {
            return ""
        } else return data[0].attacks[1].damage
    }
    function attackText(atk) {
        if(atk == undefined) {
            return ""
        } else return data[0].attacks[1].text
    }

    document.getElementById("modal-content").innerHTML += `<div id="modal-data-content">
    <section id="modal-inner-image">
        <img src="${data[0].images.large}" alt="${data[0].name}">
    </section>
        <article id="card-basic-info">  
            <article>
                <p>${data[0].name}</p>
                <p>${data[0].supertype} - ${data[0].subtypes}</p>
            </article>
            <p>HP ${data[0].hp} ${data[0].types}</p>
        </article>
        <article id="card-attacks-info">
            <h6>ATTACKS</h6>
            <p>${data[0].attacks[0].cost} ${data[0].attacks[0].name} ${data[0].attacks[0].damage}</p>
            <p>${data[0].attacks[0].text}</p>
            <p>${attacksCost(data[0].attacks[1])} ${attackName(data[0].attacks[1])} ${attackDamage(data[0].attacks[1])}</p>
            <p>${attackText(data[0].attacks[1])}</p>
            <p>${attacksCost(data[0].attacks[2])} ${attackName(data[0].attacks[2])} ${attackDamage(data[0].attacks[2])}</p>
            <p>${attackText(data[0].attacks[2])}</p>
        </article>
        <article id="card-rules-info">
            <p>${data[0].rules}</p>
        </article>
        <article id="">
            <section class="card-bottom-info">
                <h6>WEAKNESS</h6>
                <p>${data[0].weaknesses.type} ${data[0].weaknesses.value}</p>
            </section>
            <section class="card-bottom-info">
                <h6>RESISTANCES</h6>
                <p>${data[0].resistances.type} ${data[0].resistances.value}</p>
            </section>
            <section class="card-bottom-info">
                <h6>RETREAT COST</h6>
                <p>${data[0].retreatCost}</p>
            </section>
            <section class="card-bottom-info">
                <h6>ARTIST</h6>
                <p>${data[0].artist}</p>
            </section>
            <section class="card-bottom-info">
                <h6>RARITY</h6>
                <p>${data[0].rarity}</p>
            </section>
            <section class="card-bottom-info">
                <h6>SET</h6>
                <p>${data[0].set.name}</p>
            </section>
            <section class="card-bottom-info">
                <h6>NUMBER</h6>
                <p>${data[0].number} / ${data[0].set.printedTotal}</p>
            </section>
            <section class="card-bottom-info">
                <h6>REGULATION MARK</h6>
                <p>${data[0].regulationMark}</p>
            </section>
        </article>
        <article id="card-regulations-info">
            <section id="card-regulations-standard">
                <button>Standard</button>
                <button>${data[0].legalities.standard}</button>
            </section>
            <section id="card-regulations-expanded">
                <button>Expanded</button>
                <button>${data[0].legalities.expanded}</button>
            </section>
            <section id="card-regulations-unlimited">
                <button>Unlimited</button>
                <button>${data[0].legalities.unlimited}</button>
            </section>
        </article>

    <section id="modal-inner-data">

    </section>
</div>`
    
}

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
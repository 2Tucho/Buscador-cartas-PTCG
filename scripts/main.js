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
    //atk = data[0].attacks[1]; atk = data[0].attacks[2]
    function attacksCost(atk) {
        if(atk == undefined) {
            return ""
        } else return atk.cost
    }
    function attackName(atk) {
        if(atk == undefined) {
            return ""
        } else return atk.name
    }
    function attackDamage(atk) {
        if(atk == undefined) {
            return ""
        } else return atk.damage
    }
    function attackText(atk) {
        if(atk == undefined) {
            return ""
        } else return atk.text
    }

    // rule = data[0].rules
    function rules(rule) {
        if(rule == undefined) {
            return ""
        } else return data[0].rules
    }

    // weak = data[0].weaknesses
    function weaknessType(weak) {
        if(weak[0].type == "Colorless") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">'
        } else if (weak[0].type == "Darkness") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
        } else if (weak[0].type == "Dragon") {return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/dragon-3445aa07cd2c2380ae8e61f4ec47c7d678b4ab4268db16f95f66a04ecdd5200f.png">'
        } else if (weak[0].type == "Fighting") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">'
        } else if (weak[0].type == "Fire") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">'
        } else if (weak[0].type == "Grass") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">'
        } else if (weak[0].type == "Lightning") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">'
        } else if (weak[0].type == "Metal") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">'
        } else if (weak[0].type == "Psychic") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">'
        } else if (weak[0].type == "Water") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">'
        } else ""
    }
    function weaknessValue(res) {
        if(res == undefined) {
            return ""
        } else return data[0].weaknesses[0].value
    }

    // res = data[0].resistances
    function resistanceType(res) {
        if(res[0].type == "Colorless") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">'
        } else if (res[0].type == "Darkness") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
        } else if (res[0].type == "Dragon") {return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/dragon-3445aa07cd2c2380ae8e61f4ec47c7d678b4ab4268db16f95f66a04ecdd5200f.png">'
        } else if (res[0].type == "Fighting") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">'
        } else if (res[0].type == "Fire") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">'
        } else if (res[0].type == "Grass") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">'
        } else if (res[0].type == "Lightning") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">'
        } else if (res[0].type == "Metal") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">'
        } else if (res[0].type == "Psychic") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">'
        } else if (res[0].type == "Water") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">'
        } else "N/A"
    }
    function resistanceValue(res) {
        if(res == undefined) {
            return ""
        } else return data[0].resistances[0].value
    }

    // Retreat Cost
    function retreatCost(rc) {
        let newArr = rc.map(elem => elem = '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">')
        return newArr.toString().replaceAll(',', ' ')
    }
    
    // Cambiar logos por tipos de data[0].types
    function changeTypes(type) {
        
        if(type == "Colorless") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">'
        } else if (type == "Darkness") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
        } else if (type == "Dragon") {return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/dragon-3445aa07cd2c2380ae8e61f4ec47c7d678b4ab4268db16f95f66a04ecdd5200f.png">'
        } else if (type == "Fighting") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">'
        } else if (type == "Fire") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">'
        } else if (type == "Grass") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">'
        } else if (type == "Lightning") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">'
        } else if (type == "Metal") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">'
        } else if (type == "Psychic") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">'
        } else if (type == "Water") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">'
        } else ""
    }
    
    document.getElementById("modal-content").innerHTML = ""
    document.getElementById("modal-content").innerHTML += `<div id="modal-data-content">
                                                                <section id="modal-inner-image">
                                                                    <img src="${data[0].images.large}" alt="${data[0].name}">
                                                                </section id="modal-inner-data">
                                                                    <article id="card-basic-info">  
                                                                        <article>
                                                                            <p>${data[0].name}</p>
                                                                            <p>${data[0].supertype} - ${data[0].subtypes}</p>
                                                                        </article>
                                                                        <p>HP ${data[0].hp} ${changeTypes(data[0].types)}</p>
                                                                    </article>
                                                                    <article id="card-attacks-info">
                                                                        <h6>ATTACKS</h6>
                                                                        <section>
                                                                            <p>${data[0].attacks[0].cost} ${data[0].attacks[0].name} ${data[0].attacks[0].damage}</p>
                                                                            <p>${data[0].attacks[0].text}</p>
                                                                        </section>
                                                                        <section>
                                                                            <p>${attacksCost(data[0].attacks[1])} ${attackName(data[0].attacks[1])} ${attackDamage(data[0].attacks[1])}</p>
                                                                            <p>${attackText(data[0].attacks[1])}</p>
                                                                        </section>
                                                                        <section>
                                                                            <p>${attacksCost(data[0].attacks[2])} ${attackName(data[0].attacks[2])} ${attackDamage(data[0].attacks[2])}</p>
                                                                            <p>${attackText(data[0].attacks[2])}</p>
                                                                        </section>                                                                                                
                                                                    </article>
                                                                    <article id="card-rules-info">
                                                                        <p>${rules(data[0].rules)}</p>
                                                                    </article>
                                                                    <article id="weak-res-reat-raw">
                                                                        <section class="card-bottom-info">
                                                                            <h6>WEAKNESS</h6>
                                                                            <p>${weaknessType(data[0].weaknesses)} ${weaknessValue(data[0].weaknesses)}</p>
                                                                        </section>
                                                                        <section class="card-bottom-info">
                                                                            <h6>RESISTANCES</h6>
                                                                            <p>${resistanceType(data[0].resistances)} ${resistanceValue(data[0].resistances)}</p>
                                                                        </section>
                                                                        <section class="card-bottom-info">
                                                                            <h6>RETREAT COST</h6>
                                                                            <p>${retreatCost(data[0].retreatCost)}</p>
                                                                        </section>
                                                                    </article>
                                                                    <article>
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
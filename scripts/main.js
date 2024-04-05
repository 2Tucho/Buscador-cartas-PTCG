//Creo variable vacía con mis resultados del fetch
let searchResults = {};

//Envía lo recibido en los 3 input para hacer la petición fetch a la API
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    //Valores de los input
    let cardName = document.getElementById("search-input").value;
    let formatValue = document.getElementById("format").value;
    let supertypesValue = document.getElementById("supertypes").value;

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

    fetch(`https://api.pokemontcg.io/v2/cards?q=name:"${cardName}" ${filterSupertypes} ${filterFormat}&orderBy=-set.releaseDate`)
        .then(res => res.json())
        .catch((error) => console.error("Error:", error))
        .then(search => {
            searchResults = search;
            printSearchResults(searchResults);
        })
});

//Muestra las cartas que coinciden con el nombres y los filtros de búsqueda
function printSearchResults(search) {
    document.querySelector("#search-results").innerHTML = ""; //Vacío el interior del div para que no se acumulen búsquedas
    let arrayList = [];
    for (let i = 0; i < search.data.length; i++) {
        let card = `<section class="card-container">
                        <img src=${search.data[i].images.small} class="card-image"/>
                        <button id="${search.data[i].id}" class="open-modal-button">Ampliar</button>
                    </section>`;
        document.querySelector("#search-results").innerHTML += card;
        arrayList.push(search.data[i].id); //Relleno array con los datos buscados
    };
    arrayList.map(id => {
        document.getElementById(`${id}`).addEventListener("click", function (event) {
            let modal = document.getElementById("modal-box");
            modal.style.display = "block";
            let cardToPrint = searchResults.data.filter(elem => elem.id == id);
            printCardData(cardToPrint); //Llamada a la función que pinta la tarjeta en el Modal con argumento = cardToPrint
            window.scrollTo(0, 0); //Lleva la pantalla al principio para poder ver la información sin scrollear
        })
    })
};

//Pinta los datos de la carta seleccionada en la Modal Box
function printCardData(data) {
    //Los símbolos de los tipos 
    let colorlessEnergy = '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
    let darknessEnergy = '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">';
    let dragonType = '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/dragon-3445aa07cd2c2380ae8e61f4ec47c7d678b4ab4268db16f95f66a04ecdd5200f.png">';
    let fightingEnergy = '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
    let fireEnergy = '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
    let grassEnergy = '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
    let lightningEnergy = '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
    let metalEnergy = '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
    let psychicEnergy = '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
    let waterEnergy = '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
    
    //Comprobar si hay o no habilidad --> data[0].abilities[0]
    function hasAbilityType(abi) {
        if(abi == undefined) {
            return ""
        } else return (abi[0].type).toUpperCase()
    };
    function hasAbilityName(abi) {
        if(abi == undefined) {
            return ""
        } else return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/ability-3a07d6b5dd74f26907cdb84381784e2a81e24e33442be9de262a1f29a1dfa785.png"></img>' + ' ' + abi[0].name
    };
    function hasAbilityText(abi) {
        if(abi == undefined) {
            return ""
        } else return abi[0].text
    };

    //Cambia las energías de los ataques por los simbolitos
    function attacksCost(num) {
        let cost = "";
        if(data[0].attacks == undefined) {
            return ""
        } else if(data[0].attacks[num] == undefined) {
            return ""
        } else {
            for(let i = 0; i < data[0].attacks[num].cost.length; i++) {
                switch (data[0].attacks[num].cost[i]) { //Hay un switch por cada posible energía de coste de un ataque. La cambia por el simbolito que represente
                    case "Colorless":
                        cost += colorlessEnergy;
                        break;
                    case "Darkness":
                        cost += darknessEnergy;
                        break;
                    case "Fighting":
                        cost += fightingEnergy;
                        break;
                    case "Fire":
                        cost += fireEnergy;
                        break;
                    case "Grass":
                        cost += grassEnergy;
                        break;
                    case "Lightning":
                        cost += lightningEnergy;
                        break;
                    case "Metal":
                        cost += metalEnergy;
                        break;
                    case "Psychic":
                        cost += psychicEnergy;
                        break;
                    case "Water":
                        cost += waterEnergy;
                        break;
                    default:
                        cost += ""
                        break;
                }
                cost += " "
            }
            return cost;  
        }
    };

    //num = 0/1/2/
    function attackName(num) {
        if(data[0].attacks == undefined) {
            return ""
        } else if(data[0].attacks[num] == undefined) {
            return ""
        } else return data[0].attacks[num].name
    };
    function attackDamage(num) {
        if(data[0].attacks == undefined) {
            return ""
        } else if(data[0].attacks[num] == undefined) {
            return ""
        } else return data[0].attacks[num].damage
    };
    function attackText(num) {
        if(data[0].attacks == undefined) {
            return ""
        } else if(data[0].attacks[num] == undefined) {
            return ""
        } else return data[0].attacks[num].text
    };
    

    // rule = data[0].rules
    function rules(rule) {
        if(rule == undefined) {
            return ""
        } else return data[0].rules
    };
    
    // weak = data[0].weaknesses
    function weaknessType(weak) {
        if(weak == undefined) {
            return ""
        } else if(weak[0].type == "Colorless") {
            return colorlessEnergy
        } else if (weak[0].type == "Darkness") {
            return darknessEnergy
        } else if (weak[0].type == "Dragon") {
            return dragonType
        } else if (weak[0].type == "Fighting") {
            return fightingEnergy
        } else if (weak[0].type == "Fire") {
            return fireEnergy
        } else if (weak[0].type == "Grass") {
            return grassEnergy
        } else if (weak[0].type == "Lightning") {
            return lightningEnergy
        } else if (weak[0].type == "Metal") {
            return metalEnergy
        } else if (weak[0].type == "Psychic") {
            return psychicEnergy
        } else if (weak[0].type == "Water") {
            return waterEnergy
        } else ""
    };
    function weaknessValue(res) {
        if(res == undefined) {
            return ""
        } else return data[0].weaknesses[0].value
    };
    
    // res = data[0].resistances
    function resistanceType(res) {
        if(res == undefined) {
            return ""
        } else if(res[0].type == "Colorless") {
            return colorlessEnergy
        } else if (res[0].type == "Darkness") {
            return darknessEnergy
        } else if (res[0].type == "Dragon") {
            return dragonType
        } else if (res[0].type == "Fighting") {
            return fightingEnergy
        } else if (res[0].type == "Fire") {
            return fireEnergy
        } else if (res[0].type == "Grass") {
            return grassEnergy
        } else if (res[0].type == "Lightning") {
            return lightningEnergy
        } else if (res[0].type == "Metal") {
            return metalEnergy
        } else if (res[0].type == "Psychic") {
            return psychicEnergy
        } else if (res[0].type == "Water") {
            return waterEnergy
        } else "N/A"
    };
    function resistanceValue(res) {
        if(res == undefined) {
            return ""
        } else return data[0].resistances[0].value
    };

    // Retreat Cost
    function retreatCost(rc) {
        if(rc == undefined) return "";
        let newArr = rc.map(elem => elem = colorlessEnergy);
        return newArr.toString().replaceAll(',', ' ');
    };
   
    // Cambiar logos por tipos de data[0].types
    function changeTypes(type) {
        if(type == "Colorless") {
            return colorlessEnergy
        } else if (type == "Darkness") {
            return darknessEnergy
        } else if (type == "Dragon") {
            return dragonType
        } else if (type == "Fighting") {
            return fightingEnergy
        } else if (type == "Fire") {
            return fireEnergy
        } else if (type == "Grass") {
            return grassEnergy
        } else if (type == "Lightning") {
            return lightningEnergy
        } else if (type == "Metal") {
            return metalEnergy
        } else if (type == "Psychic") {
            return psychicEnergy
        } else if (type == "Water") {
            return waterEnergy
        } else ""
    };

    //Poner imagen con la letra de la regulation mark
    function regMark(mark) {
        if(mark == undefined) {
            return ""
        } else if(mark == "D") {
            return '<h6>REGULATION MARK</h6><img id="pokemon-regulationMark-image" src="https://pokemontcg.guru/assets/regulation_d-ffef24baefd43eecaa97601535a93c5daddaabd24a52cbb7833f8e76fd2cf069.png">'
        } else if(mark == "E") {
            return '<h6>REGULATION MARK</h6><img id="pokemon-regulationMark-image" src="https://pokemontcg.guru/assets/regulation_e-dde22799696f6e33add340cc7f68dfd951b5c9a1d776559b8231221967a23441.png">'
        } else if(mark == "F") {
            return '<h6>REGULATION MARK</h6><img id="pokemon-regulationMark-image" src="https://pokemontcg.guru/assets/regulation_f-29d94b1392a0a5e9c21db03b660835467c18608fd0e51db455278d01f7170f02.png">'
        } else if(mark == "G") {
            return '<h6>REGULATION MARK</h6><img id="pokemon-regulationMark-image" src="https://pokemontcg.guru/assets/regulation_g-c0559ec05612abbba1bda1484dc0291fd02bc57470d864ac4204c070220b66fb.png">'
        } else if(mark == "H") {
            return mark
        }
    };

    document.getElementById("modal-content").innerHTML = "";

    let energyCard = `<div id="modal-data-content">
                            <section id="modal-inner-image">
                                <img src="${data[0].images.large}" alt="${data[0].name}">
                            </section id="modal-inner-data">
                                <article id="card-basic-info">  
                                    <article>
                                        <h2>${data[0].name}</h2>
                                        <h3>${data[0].supertype} - ${data[0].subtypes}</h3>
                                    </article>
                                </article>
                                <article id="card-rules-info">
                                    <p class="rules-attack-text">${rules(data[0].rules)}</p>
                                </article>
                                <article id="card-variety-info-1">
                                    <section class="card-bottom-info">
                                        <h6>ARTIST</h6>
                                        <p>N/A</p>
                                    </section>
                                    <section class="card-bottom-info">
                                        <h6>RARITY</h6>
                                        <p>${data[0].rarity}</p>
                                    </section>
                                    <section class="card-bottom-info">
                                        <h6>SET</h6>
                                        <p>${data[0].set.name}</p>
                                    </section>
                                </article>
                                <article id="card-variety-info-2">
                                    <section class="card-bottom-info">
                                        <h6>NUMBER</h6>
                                        <p>${data[0].number} / ${data[0].set.printedTotal}</p>
                                    </section>
                                    <section class="card-bottom-info">
                                        <h6>REGULATION MARK</h6>
                                        <p>${regMark(data[0].regulationMark)}</p>
                                    </section>
                                </article>
                                <article id="card-regulations-info">
                                    <section id="card-regulations-standard">
                                        <p class="regulation-button">Standard</p>
                                        <p class="legalities-button">${data[0].legalities.standard}</p>
                                    </section>
                                    <section id="card-regulations-expanded">
                                        <p class="regulation-button">Expanded</p>
                                        <p class="legalities-button">${data[0].legalities.expanded}</p>
                                    </section>
                                    <section id="card-regulations-unlimited">
                                        <p class="regulation-button">Unlimited</p>
                                        <p class="legalities-button">${data[0].legalities.unlimited}</p>
                                    </section>
                                </article>
                            </section>
                        </div>`;

    let trainerCard = `<div id="modal-data-content">
                            <section id="modal-inner-image">
                                <img src="${data[0].images.large}" alt="${data[0].name}">
                            </section id="modal-inner-data">
                                <article id="card-basic-info">  
                                    <article>
                                        <h2>${data[0].name}</h2>
                                        <h3>${data[0].supertype} - ${data[0].subtypes}</h3>
                                    </article>
                                </article>
                                <article id="card-rules-info">
                                    <p class="rules-attack-text">${rules(data[0].rules)}</p>
                                </article>
                                <article id="card-variety-info-1">
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
                                </article>
                                <article id="card-variety-info-2">
                                    <section class="card-bottom-info">
                                        <h6>NUMBER</h6>
                                        <p>${data[0].number} / ${data[0].set.printedTotal}</p>
                                    </section>
                                    <section class="card-bottom-info">
                                        <h6>REGULATION MARK</h6>
                                        <p>${regMark(data[0].regulationMark)}</p>
                                    </section>
                                </article>
                                <article id="card-regulations-info">
                                    <section id="card-regulations-standard">
                                        <p class="regulation-button">Standard</p>
                                        <p class="legalities-button">${data[0].legalities.standard}</p>
                                    </section>
                                    <section id="card-regulations-expanded">
                                        <p class="regulation-button">Expanded</p>
                                        <p class="legalities-button">${data[0].legalities.expanded}</p>
                                    </section>
                                    <section id="card-regulations-unlimited">
                                        <p class="regulation-button">Unlimited</p>
                                        <p class="legalities-button">${data[0].legalities.unlimited}</p>
                                    </section>
                                </article>
                            </section>
                        </div>`;
                      
    let pokemonCard = `<div id="modal-data-content">
                            <section id="modal-inner-image">
                                <img src="${data[0].images.large}" alt="${data[0].name}">
                            </section id="modal-inner-data">
                                <article id="card-basic-info">  
                                    <article>
                                        <h2>${data[0].name}</h2>
                                        <h3>${data[0].supertype} - ${data[0].subtypes}</h3>
                                    </article>
                                    <p id="hp-type-row">HP ${data[0].hp} ${changeTypes(data[0].types)}</p>
                                </article>
                                <article id="card-attacks-info">
                                    <h6 id="abilities-title">${hasAbilityType(data[0].abilities)}</h6>
                                    <section>
                                        <p>${hasAbilityName(data[0].abilities)}</p>
                                        <p>${hasAbilityText(data[0].abilities)}</p>
                                    </section>
                                    <h6>ATTACKS</h6>
                                    <section>
                                        <div class="attack-cost-name-damage">
                                            <p>${attacksCost(0)} ${attackName(0)}</p> 
                                            <p>${attackDamage(0)}</p>
                                        </div>
                                        <p rules-attack-text>${attackText(0)}</p>
                                    </section>
                                    <section>
                                        <div class="attack-cost-name-damage">
                                            <p>${attacksCost(1)} ${attackName(1)}</p>
                                            <p>${attackDamage(1)}</p>
                                        </div>
                                        <p rules-attack-text>${attackText(1)}</p>
                                    </section>
                                    <section>
                                        <div class="attack-cost-name-damage">
                                            <p>${attacksCost(2)} ${attackName(2)}</p>
                                            <p>${attackDamage(2)}</p>
                                        </div>
                                        <p rules-attack-text>${attackText(2)}</p>
                                    </section>                                                                                                
                                </article>
                                <article id="card-rules-info">
                                    <p class="rules-text">${rules(data[0].rules)}</p>
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
                                <article id="card-variety-info-1">
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
                                </article>
                                <article id="card-variety-info-2">
                                    <section class="card-bottom-info">
                                        <h6>NUMBER</h6>
                                        <p>${data[0].number} / ${data[0].set.printedTotal}</p>
                                    </section>
                                    <section class="card-bottom-info">
                                        ${regMark(data[0].regulationMark)}
                                    </section>
                                </article>
                                <article id="card-regulations-info">
                                    <section id="card-regulations-standard">
                                        <p class="regulation-button">Standard</p>
                                        <p class="legalities-button">${data[0].legalities.standard}</p>
                                    </section>
                                    <section id="card-regulations-expanded">
                                        <p class="regulation-button">Expanded</p>
                                        <p class="legalities-button">${data[0].legalities.expanded}</p>
                                    </section>
                                    <section id="card-regulations-unlimited">
                                        <p class="regulation-button">Unlimited</p>
                                        <p class="legalities-button">${data[0].legalities.unlimited}</p>
                                    </section>
                                </article>
                            </section>
                        </div>`;
    
    if (data[0].supertype == "Trainer") {
        document.getElementById("modal-content").innerHTML += trainerCard
    } else if(data[0].supertype == "Energy") {
        document.getElementById("modal-content").innerHTML += energyCard
    } else if(data[0].supertype == "Pokémon") {
        document.getElementById("modal-content").innerHTML += pokemonCard}
};

//MODAL
// Ventana modal
let modal = document.getElementById("modal-box");
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
let span = document.getElementById("close-modal");
// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click", function () {
    modal.style.display = "none"
});
// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
});
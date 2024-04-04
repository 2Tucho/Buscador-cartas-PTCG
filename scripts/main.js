//Creo variable vacía con mis resultados del fetch
let searchResults = {}

//Muestra las cartas que coinciden con el nombres y los filtros de búsqueda
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

//Muestra los datos de la carta seleccionada en la Modal Box
function printCardData(data) {
    //Comprobar si hay o no habilidad --> data[0].abilities[0]
    function hasAbilityType(abi) {
        if(abi == undefined) {
            return ""
        } else return (abi[0].type).toUpperCase()
    }
    function hasAbilityName(abi) {
        if(abi == undefined) {
            return ""
        } else return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/ability-3a07d6b5dd74f26907cdb84381784e2a81e24e33442be9de262a1f29a1dfa785.png"></img>' + ' ' + abi[0].name
    }
    function hasAbilityText(abi) {
        if(abi == undefined) {
            return ""
        } else return abi[0].text
    }

    console.log(data[0].attacks)

    //atk = data[0].attacks
    function attacksCost1(atk) {
        let cost = ""
        if(atk == undefined) {
            return ""
        } else {
            switch (atk[0].cost[0]) { //Hay un switch poor cada posible energía de coste de un ataque. La cambia por el simbolitoi que represente
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[0].cost[1]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[0].cost[2]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[0].cost[3]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[0].cost[4]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
        }
        console.log("Variable cost: " + cost)
        return cost
    }
    function attacksCost2(atk) {
        let cost = ""
        if(atk == undefined) return ""
        if(atk[1] == undefined) {
            return ""
        } else {
            switch (atk[1].cost[0]) { //Hay un switch poor cada posible energía de coste de un ataque. La cambia por el simbolitoi que represente
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[1].cost[1]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[1].cost[2]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[1].cost[3]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[1].cost[4]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
        }
        console.log("Variable cost: " + cost)
        return cost
    }
    function attacksCost3(atk) {
        let cost = ""
        if(atk == undefined) return ""
        if(atk[2] == undefined) {
            return ""
        } else {
            switch (atk[2].cost[0]) { //Hay un switch poor cada posible energía de coste de un ataque. La cambia por el simbolitoi que represente
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[2].cost[1]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[2].cost[2]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[2].cost[3]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
            cost += " "
            switch (atk[2].cost[4]) {
                case "Colorless":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">';
                    break;
                case "Darkness":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
                    break;
                case "Fighting":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fighting-5fcb6e1f157032efac4f6830d88759e83e66530354a297b112fff24c152e8d3c.png">';
                    break;
                case "Fire":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/fire-76e636965a1e28800904de4abbf84ade3b019bbbce7021987f379971f881c2b5.png">';
                    break;
                case "Grass":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/grass-ec3509d75db6cd146139044107045ccb5bcbb528b02c3de89d709a7be4a0bf90.png">';
                    break;
                case "Lightning":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/lightning-732a70ef2e2dab4cc564fbf4d85cad48b0ac9ece462be3d42166a6fea4085773.png">';
                    break;
                case "Metal":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/metal-076b10c3700a68913c376f841b46a1d63c3895247385b4360bc70739289179b7.png">';
                    break;
                case "Psychic":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/psychic-503107a3ed9d9cce58e290677918f057ea6dc4e75042f2a627a5dd8a8bf6af9e.png">';
                    break;
                case "Water":
                    cost += '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/water-6b0bc3ea40b358d372e8be04aa90be9fb74e3e46ced6824f6b264cc2a7c7e32a.png">';
                    break;
                default:
                    cost += ""
                    break;
            }
        }
        console.log("Variable cost: " + cost)
        return cost
    }

    //
    function attackName1(atk) {
        if(atk == undefined) {
            return ""
        } else return atk[0].name
    }
    function attackName2(atk) {
        if(atk == undefined) return ""
        if(atk[1] == undefined) {
            return ""
        } else return atk[1].name
    }
    function attackName3(atk) {
        if(atk == undefined) return ""
        if(atk[2] == undefined) {
            return ""
        } else return atk[2].name
    }

    function attackDamage1(atk) {
        if(atk == undefined) return ""
        if(atk == undefined) {
            return ""
        } else return atk[0].damage
    }
    function attackDamage2(atk) {
        if(atk == undefined) return ""
        if(atk[1] == undefined) {
            return ""
        } else return atk[1].damage
    }
    function attackDamage3(atk) {
        if(atk == undefined) return ""
        if(atk[2] == undefined) {
            return ""
        } else return atk[2].damage
    }

    function attackText1(atk) {
        if(atk == undefined) return ""
        if(atk == undefined) {
            return ""
        } else return atk[0].text
    }
    function attackText2(atk) {
        if(atk == undefined) return ""
        if(atk[1] == undefined) {
            return ""
        } else return atk[1].text
    }
    function attackText3(atk) {
        if(atk == undefined) return ""
        if(atk[2] == undefined) {
            return ""
        } else return atk[2].text
    }

    // rule = data[0].rules
    function rules(rule) {
        if(rule == undefined) {
            return ""
        } else return data[0].rules
    }

    // weak = data[0].weaknesses
    function weaknessType(weak) {
        if(weak == undefined) {
            return ""
        } else if(weak[0].type == "Colorless") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/colorless-fd5125f53e603b89cdfc6984ab4cea8e3ed43323a8d84bee6a774db1ea8c3dae.png">'
        } else if (weak[0].type == "Darkness") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/darkness-d766bdc83589235f104c3c3892cff4de80048e7a729f24b6e5e53a1838c7ebfa.png">'
        } else if (weak[0].type == "Dragon") {
            return '<img class="pokemon-type-image" src="https://pokemontcg.guru/assets/dragon-3445aa07cd2c2380ae8e61f4ec47c7d678b4ab4268db16f95f66a04ecdd5200f.png">'
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
        if(res == undefined) {
            return ""
        } else if(res[0].type == "Colorless") {
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
        if(rc == undefined) return ""
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

    //<h6>REGULATION MARK</h6>
    //<p>${regMark(data[0].regulationMark)}</p>
    //Poner imagen con la letra de la regulation mark
    function regMark(mark) {
        let regMark
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
    }

    /* console.log("El coste del primer ataque: " + data[0].attacks[0].cost[0]) */
    /* console.log("El coste del segundo ataque: " + data[0].attacks[1].cost[0] + ", " + data[0].attacks[1].cost[0]) */
    document.getElementById("modal-content").innerHTML = ""

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
                        </div>`

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
                        </div>`
                      
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
                                            <p>${attacksCost1(data[0].attacks)} ${attackName1(data[0].attacks)}</p> 
                                            <p>${attackDamage1(data[0].attacks)}</p>
                                        </div>
                                        <p rules-attack-text>${attackText1(data[0].attacks)}</p>
                                    </section>
                                    <section>
                                        <div class="attack-cost-name-damage">
                                            <p>${attacksCost2(data[0].attacks)} ${attackName2(data[0].attacks)}</p>
                                            <p>${attackDamage2(data[0].attacks)}</p>
                                        </div>
                                        <p rules-attack-text>${attackText2(data[0].attacks)}</p>
                                    </section>
                                    <section>
                                        <div class="attack-cost-name-damage">
                                            <p>${attacksCost3(data[0].attacks)} ${attackName3(data[0].attacks)}</p>
                                            <p>${attackDamage3(data[0].attacks)}</p>
                                        </div>
                                        <p rules-attack-text>${attackText3(data[0].attacks)}</p>
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
                        </div>`
    
    if (data[0].supertype == "Trainer") {
        document.getElementById("modal-content").innerHTML += trainerCard
    } else if(data[0].supertype == "Energy") {
        document.getElementById("modal-content").innerHTML += energyCard
    } else if(data[0].supertype == "Pokémon") {
        document.getElementById("modal-content").innerHTML += pokemonCard}
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
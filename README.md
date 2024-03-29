# Buscador-cartas-PTCG

Tecnologías utilizadas
 - Postman

Pasos seguidos:
 - Creación de Trello para organización

POSTMAN:
Para buscar por atributos de las cartas, partir de esta url: 
https://api.pokemontcg.io/v2/cards?q=
 - Atributos: name, hp, types... los que vienen ene sta página: https://docs.pokemontcg.io/api-reference/cards/card-object/#attributes
 - TODAS las búsquedas por name, que el pokémon tenga el nombre entre comillas. EJEMPLO: https://api.pokemontcg.io/v2/cards?q=name:"charizard" o https://api.pokemontcg.io/v2/cards?q=name:"metagross vmax"

Parece que los grandes filtros toca hacerlos a mano (legalities, supertype)

EventListener que al clicar en el botón de "Buscar" me haga una petición a la api con el nombre de la carta que hay escrito en el input

Hacer funcionalidad en la que, dependiendo de lo escogido en el selector, ponga una cosa u otra en la petición a la API: si no lo has escogido que no añada nada, si lo has hecho dependiendo de cual que busque con ese filtro

Ya está hecha la función que permite hacer el fecth. Accede sin problemas. Ahora tocaría dibujar en el DOM con lo que me traigo del fetch
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

Se deberían pintar todas las cartas resultantes de aplicar los filtros de búsqueda en columnas y por la foto de la carta (.data[i].images.small). Al pulsar a la foto que se quiera debería salir en grande con un modal add y toda la información relevante colocada

Así al buscar
![image](https://github.com/2Tucho/Buscador-cartas-PTCG/assets/105043263/655a8196-8fed-4b44-b9a8-07e09f29482c)
Crear un bucle for que por cada busqueda.data[i] cree un <img> cuyo atributo src sea la url que hay en busqueda.data[i].images.small. Tendrá una clase determinada con la que todas tendrán las mismas dimensiones

Y así al clicar
![image](https://github.com/2Tucho/Buscador-cartas-PTCG/assets/105043263/4fed6e2d-ded9-4ac6-9bde-19bbc3a48bbf)

Pero con la información detallada de esta forma:
![image](https://github.com/2Tucho/Buscador-cartas-PTCG/assets/105043263/f7dc4402-606c-4d1f-9ceb-c6a6635ed8b3)
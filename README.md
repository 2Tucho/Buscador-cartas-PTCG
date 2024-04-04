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

Ahora en la práctica, la búsqueda de cartas ha quedado de la siguiente manera:
![image](https://github.com/2Tucho/Buscador-cartas-PTCG/assets/105043263/4f1d51e4-b6bb-4d8e-89b4-b0702a81abc3)
He añadido un botón de "Ampliar" con el que próximamente aparecerá la Modal Box que contendrá la imagen de la carta y los datos

También he creado una zona para la Modal Box en el documento HTML, cuyo contenido variará según la carta de la queramos ver la información. Ahora se crea la Modal Box efectivamente:
![image](https://github.com/2Tucho/Buscador-cartas-PTCG/assets/105043263/21afbece-7544-48c3-8b86-db03eb564d95)

He asociado el id de cada botón con el id de la información que le corresponde mostrar. Ahora al clicar el botón de "Ampliar" sabe con qué información rellenar la Modal Box.
Para ello, estoy creando la plantilla con los elementos que se crearán en el Modal Box en coleccion.html fijándome en la página: https://pokemontcg.guru/card/metagross-v-sword-and-shield/swsh6-181

**QUEDA MIRAR**
1. Si hay muchos resultados necesito un botón o algo que me cargue las diferentes páginas donde estén (porque cada págine solo permite un máximo de 250 cartas)
2. Hacer un poco más grandes los nombres de los ataques y la habilidad
3. Exportar las rutas de postman y crear un .json con ellas, para que otros puedan utilizarlas
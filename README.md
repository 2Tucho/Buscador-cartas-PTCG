# Buscador-cartas-PTCG

Tecnologías utilizadas
 - Postman
 - HTML5
 - CSS3
 - Javascript
 - GitHub
 - Trello
 - Pokemontcg.io API

Pasos seguidos:
1. Creación de **Trello** para organización.

2. **POSTMAN**:
Creación de las principales rutas a las que se van a hacer fetch con cada búsqueda: https://api.pokemontcg.io/v2/cards?q= (En las rutas de Postman esta dirección equivale a {{cardSearch}})
    - Búsquedas por atributos: name, hp, types, images... que vienen explicados en la documentación (https://docs.pokemontcg.io/api-reference/cards/card-object/#attributes).
    - TODAS las búsquedas por name, que el pokémon tenga el nombre entre comillas. EJEMPLO: https://api.pokemontcg.io/v2/cards?q=name:charizard o https://api.pokemontcg.io/v2/cards?q=name:"metagross vmax" (dependiendo de si el nombre es compuesto o no se hace necesario el uso de las comillas).

3. Creación de la barra y el botón de búsqueda junto con los grandes filtros de búsqueda en **HTML**.

![image](https://github.com/2Tucho/Buscador-cartas-PTCG/assets/105043263/d4d51a9e-fafb-49c0-9b33-09ed3307ed5a)

4. En **Javascript**, creación de un escuchador de eventos que permita que, al clicar en el botón de "Buscar", me haga una petición fetch a la api con el nombre de la carta que hay escrito en el input.

5. Creación de una función que pinte en el DOM todas las cartas que concuerdan con el nombre buscado y la aplicación de los filtros seleccionados. Además, también se crea un botón "Ampliar" y guarda los resultados buscados en una variable.

![image](https://github.com/2Tucho/Buscador-cartas-PTCG/assets/105043263/47fd7e1f-4b72-4549-9805-e02c7acb1513)

6. Añadir otro escuchador de eventos con el cual, si haces clic en cualquier botón "Ampliar", haga aparecer la información de la carta detallada en una Modal Box. Cada botón corresponde a un elemento de la variable guardada con los resultados y accede al mismo al tener el mismo ID que la carta.

![image](https://github.com/2Tucho/Buscador-cartas-PTCG/assets/105043263/536b409a-8e89-46c2-99fe-9300c548d3c9)
![image](https://github.com/2Tucho/Buscador-cartas-PTCG/assets/105043263/39bf0717-8376-439a-a9ae-7cd58cd805bb)


**QUEDA POR MIRAR**
1. Si hay muchos resultados necesito un botón o algo que me cargue las diferentes páginas donde estén (porque cada págine solo permite un máximo de 250 cartas)
2. Hacer funciones para las legalidades, cambiar a not legal los undefined y el fondo de verde a blanco
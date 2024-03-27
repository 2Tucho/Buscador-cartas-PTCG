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

Buscando directamente por set, sabemos las legalities del mismo. Pero hay cartas reimpresas de otros sets anteriores que pueden haberse quedado fuera de estándar, por ejemplo. En la propia carta viene el set y todos esos datos así que no hay problema por esa parte. El problema es que recientemente ha salido una nueva expansión de cartas que ha hecho que todas las cartas con legalidad "E" hayan quedado fuera del formato de estándar, y esta información todavía no ha sido actualizada en las cartas. 
 - ¿Cómo lo arreglo? El filtro lo hago por card.regulationMark y excluyo la "E". En plan que si le clickan a estándar que en la query busque cartas que tienen la regulationMark "F", "G" o "H"
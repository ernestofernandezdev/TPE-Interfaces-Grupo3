# TPE-Interfaces-Grupo3
Integrantes:
 - Fernandez, Ernesto.
 - Villa, Leopoldo.
 - Lupo, Manuel.

# Consideraciones
Algunas cuestiones del uso de figma que dejamos marcadas para mejorarlas en la instancia de implementación.

## 1) Hovers de las cards: nombres y precios 
 > Se puede observar que al pasar el puntero del mouse por encima de un juego en la pagina principal (home) los nombres de los juegos son todos los mismos "battle arena".
 Se intentó resolver este detalle en figma pero al depender fuertemente del juego la unica solucion posible era crear una instancia de animacion de card distinta para cada 
 juego.
 En cuanto a los precios sucede algo similar. Se estableció una card por defecto que se usa como contenedor y obliga a los precios a ser los definidos en esa card contenedora.
 Ambos casos van a ser resueltos en la implementación sin problemas.


## 2) Logo del sitio
 > El logo del sitio al hacer click redirecciona a la pagina principal, es dificil llegar a esta funcionalidad dado que figma despliega sus herramientas en la parte superior.

## 3) Fixes
 > El sidebar que despliega el menu hamburguesa, la intención en la implementacion será que siempre quede disponible en pantalla. En el diseño de figma no queda "fixeado" sino que sigue el flujo del scroll. Lo mismo sucede con la barra de navegación, creemos que es util y necesario que el sidebar se mantenga fixeado a la izquierda y la barra de navegación en la parte superior aún cuando se haga scroll en el sitio.
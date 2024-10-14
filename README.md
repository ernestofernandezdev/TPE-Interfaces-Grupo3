# TPE-Interfaces-Grupo3 - Segunda entrega
> Integrantes:
> - Fernandez, Ernesto.
> - Villa, Leopoldo.
> - Lupo, Manuel.

 ## Flujo de simulacion
 > La web comienza con un usuario logueado y en la seccion inicio por defecto.El usuario logueado está contenido en la variable ***player*** del archivo script.js.

 ### Datos para el inicio de sesión simulado:
> - Usuario: juancito28673.
> - Contraseña: 1234.
> - También se puede ingresar sin completar datos ingresando con Facebook o Google.
 
 ### Formas de acceder a **INICIO**:
> - Al iniciar por primera vez la pagina.
> - Al clickear sobre el logo ("FlamingGames").
> - Al clickear la opción INICIO en el menu desplegable hamburguesa.

### Formas de acceder a **INICIAR SESION**:
> 1. Con usuario inicialmente logueado:
>    - Presionando el avatar del header > presionando la opción "Cerrar sesión" > volviendo a presionar el avatar deslogueado.
> 2. Con usuario inicialmente deslogueado:
>    - Presionando el avatar desolgueado ubicado en el header al lado del simbolo de carrito.

### Formas de acceder a **REGISTRARSE**:
> 1. Con usuario inicialmente logueado:
>    - **Repitiendo los pasos de _Formas de acceder a INICIAR SESION, opcion 1_.** Una vez allí, presionar la opción de *Registrarse* en el formulario de Inicio de Sesión.
> 2. Con usuario inicialmente deslogueado:
>    - **Repitiendo los pasos de _Formas de acceder a INICIAR SESION, opcion 2_.** Una vez allí, presionar la opción de *Registrarse* en el formulario de Inicio de Sesión.

### Forma de acceder a **SECCION DE EJECUCION DE JUEGO**:
> Clickeando en el botón de Jugar de la card: "4 en linea: batman vs. guasón".

## Estructura "atómica" de componentes de script.js
Cada **clase** se puede observar como un ***componente*** u ***organismo*** de los elaborados en la etapa de diseño en Figma.
Cada **clase-componente** cuenta con 2 funciones principales que son ***getComponent()*** y ***listenEvents()***:
 - ***getComponent()*** : Se encarga de retornar codigo **HTML** para que sea agregado (*appenchild()*) por el **componente padre**. 
 - ***listenEvents()*** : Se encarga de ***poner a escuchar*** todos los eventos que contenga la clase.
 
 Cada **componente padre** que haga uso de algun **componente hijo** debe:
 >  1. Instanciar un objeto hijo utilizando _new_ , ejemplo: **const h = _new_ Header()**;
 >  2. Llamar a la funcion _getComponent()_ de su hijo para agregar en sí su contenido, ejemplo: **padre.appenchild( h.getComponent() );**
 >  3. Llamar a la funcion _listenEvents()_ de los hijos que haga uso, ejemplo: **h.listenEvents()**;

   En esos **3** pasos un padre / **organismo** agrega codigo HTML y pone a escuchar eventos de un componente más pequeño / **molécula**. 

   **Cada paso es importante y necesario:** el primero _crea_ el objeto, el segundo _retorna_ lo visual (html) y el tercero _agrega_ el _comportamiento_ (eventos).

Mostrado con imágenes:

> **Organismo HOME**

![home](./EntregablePractico2/static/docs/home.PNG)

> **Molécula Carousel**

![carousel](./EntregablePractico2/static/docs/carousel.PNG)

> **Átomo Card**

![card](./EntregablePractico2/static/docs/card.PNG)
 
## Funciones constantes y utils
Las clases *Utils* y *Constants* son utilizadas para acceder a colores y funciones que son necesarias en todos los componentes.

## Ruteo entre secciones
> Para el ruteo hay una funcion general *showContent(section,user,sectionActive)* . Esta funcion contiene el elemento raíz del HTML *root* y es encargada de *appendarle* los **componentes/organismos** que integran una sección. Es llamada por todas las clases que tienen algun componente que se encarga de redirigir a otra sección.
 Parametros:
 - **section**: string del nombre de la sección a la que se debe redirigir.
 - **user** : user que está activo en la web, puede ser nulo en caso de que no haya logueados.
 - **sectionActive** : este parametro es opcional para la convivencia particular de la seccion **login** . Login puede contener secciónes detras activas.

 ![showcontent](./EntregablePractico2/static/docs/showcontent.PNG) 

## Spinner
> La simulacion del spinner se conforma por un contenedor principal con 2 elementos. El div spinner que contiene un **p** con el texto 'Loading' y un **div** que es la 
 caja que va de un lado al otro del texto cambiando su color por donde pasa. El segundo elemento es una etiqueta **p** que contiene el porcentaje simulado. 
 La logica del porcentaje es cada **90** milisegundos hacer una **regla de 3 simple** entre el 100% , el **total de segundos** en el que el spinner va a terminar con el uso de *setTimeOut* y un *index*.
 Cada **90ms**: 
 1. Se hace la regla de 3, que en principio es 0 (valor de index).
 2. Se vacía la etiqueta que muestra el porcentaje y se agrega el actual porcentaje (variable **render**).
 3. Se incrementa en **100** la variable index, para que al volver al paso 1 el porcentaje sea distinto e incremental.
 A los 5000ms (variable *totalSeg*) se corta el *setInterval de 90ms*, llegando casi al total de 100%, se pasa minimamente por tiempos de ejecucion imperfectos.

 ![spinner](./EntregablePractico2/static/docs/spinner.PNG) 
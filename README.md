-- Hooks Use Ref --

1.- Hace una "Referencia" con un elemento del DOM, devuelve un objeto de "Referencia" mutable, que va a tener una propiedad "current"; con un valor dentro y eso objeto va estas persistiendo durante el ciclo de vida de ese componente, es decir cuando el componente este "montado"; esa "Referencia" va exitir y cuando se "desmonte"; esa "Referencia" va a dejar de exitir 


2.- El elemento current, se podria decir que es una variable mutable en todo momento

3.- Visto de un modo más facil de entender, el use del hook useRef, de alguna manera te certifida que es la version más actulizada del elemento que estas haciendole referencia y siempre va estar pendiente de los cambios de una manera reactiva.
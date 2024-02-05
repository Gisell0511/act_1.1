//alert("hola este es mi javascript");
document.addEventListener("DOMContentLoaded", function() {
    // Espera a que el documento HTML esté completamente cargado

    // Agrega un evento de clic al elemento con la clase "parrafo1"
    var parrafo1 = document.querySelector(".parrafo1");
    parrafo1.addEventListener("click", function() {
        // Cambia el color de fondo del encabezado cuando se hace clic en parrafo1
        document.querySelector("header").style.backgroundColor = "lightblue";
    });

    // Puedes agregar más condiciones y eventos según tus necesidades.
});


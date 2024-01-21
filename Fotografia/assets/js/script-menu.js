/*
    We load the entire document
*/
document.addEventListener("DOMContentLoaded", function(){
    /*
        I get the menu collapsed
        I get the full width menu
        I get an array of nodes from the spans that are our white lines
    */
    const menuColapsado = document.getElementById("menu-colapsado");
    const menuAcciones = document.getElementById("menu-lista");
    const lineasMenu = document.querySelectorAll(".colapsado span");

    /**
     * I add the click event to the collapsed menu
     */
    menuColapsado.addEventListener("click", function(){
        /**
         * I access each span of the array of nodes with the indices and using toggle I modify, add or deactivate the classes so that the behavior of things is modified
         */
        lineasMenu[0].classList.toggle("rotar45");
        lineasMenu[1].classList.toggle("eliminar");
        lineasMenu[2].classList.toggle("rotar-45");
        menuAcciones.classList.toggle("lista-menu-colapsado");
    })
});
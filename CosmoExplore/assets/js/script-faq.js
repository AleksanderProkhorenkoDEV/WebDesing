document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".boton-faq");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Get the direct children of the button
            const hijos = button.children;
            // Carry out actions with your children
            if (hijos.length === 2) {
                hijos[0].classList.toggle("desactivar");
                hijos[1].classList.toggle("active");
            }
            //find the closest ancestor that has the class "faq", and then looks for a descendant with class "text-faq" inside that container.
            const respuestaContainer = button.closest(".faq").querySelector(".texto-faq");

            // We activate the class and deactivate it depending on what the user clicks
            respuestaContainer.classList.toggle("active");
        });
    });
});

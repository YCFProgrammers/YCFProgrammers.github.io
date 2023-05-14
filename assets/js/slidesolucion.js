
        function showTestimony(id) {
            // Oculta todas las secciones de testimonios
            var testimonies = document.getElementsByClassName("testimony__body");
            for (var i = 0; i < testimonies.length; i++) {
                testimonies[i].classList.remove("testimony__body--show");
            }
            // Muestra la sección de testimonio correspondiente al ID
            var testimony = document.querySelector('[data-id="' + id + '"]');
            if (testimony) {
                testimony.classList.add("testimony__body--show");
            }
        }

        document.addEventListener("DOMContentLoaded", function () {
            var beforeButton = document.getElementById("before");
            var nextButton = document.getElementById("next");

            beforeButton.addEventListener("click", function () {
                var currentId = parseInt(document.querySelector(".testimony__body--show").getAttribute("data-id"));
                var previousId = currentId - 1;
                if (previousId === 0) {
                    previousId = 4; // Vuelve al último testimonio si se encuentra en el primero
                }
                showTestimony(previousId);
            });

            nextButton.addEventListener("click", function () {
                var currentId = parseInt(document.querySelector(".testimony__body--show").getAttribute("data-id"));
                var nextId = currentId + 1;
                if (nextId === 5) {
                    nextId = 1; // Vuelve al primer testimonio si se encuentra en el último
                }
                showTestimony(nextId);
            });
        });

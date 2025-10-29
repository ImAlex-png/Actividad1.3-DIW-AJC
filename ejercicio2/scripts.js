$(document).ready(function () {
    // Función para quitar los modos activos
    function limpiarModos() {
        $("body").removeClass("modo-oscuro monocromo altoContraste destacarEnlaces");
    }

    // Cuando cambia el select
    $(".lista").change(function () {
        var modo = $(this).val();

        if (modo === "defecto") {
            $("body").removeClass();
            return;
        }

        // Quita modos anteriores y aplica el nuevo
        limpiarModos();
        if (modo !== "") {
            $("body").addClass(modo);
        }
    });
});

(function(window, document, $, undefined) {
    'use strict';



    $(initWizard);

    function initWizard() {

        if (!$.fn.validate) return;

        var form = $("#frmInscripcion");
        form.validate({
            errorPlacement: function errorPlacement(error, element) { element.before(error); },
            lang: 'es',
            rules: {
                confirm: {
                    equalTo: "#password"
                },

                entrevistaID: {
                    required: true
                }
            }
        });
        form.children("div").steps({
            headerTag: "h4",
            bodyTag: "fieldset",
            //transitionEffect: "slideLeft",
            labels: {
                cancel: "Cancelar",
                current: "Paso actual:",
                pagination: "Paginación",
                finish: "Finalizar",
                next: "Siguiente",
                previous: "Anterior",
                loading: "Cargando ..."
            },
            onStepChanging: function (event, currentIndex, newIndex) {
                $('.actions > ul > li:last-child a').css('background-color', '#f89406');
                form.validate().settings.ignore = ":disabled,:hidden:not('select.form-control')";
                return form.valid();
            },
            onFinishing: function(event, currentIndex) {
                form.validate().settings.ignore = ":disabled";
                return form.valid();
            },
            onFinished: function(event, currentIndex) {
                alert("Submitted!");

                // Submit form
                $(this).submit();
            }
        });



        $('.chosen-select321').chosen({
            no_results_text: "No se encontraron resultados",
            placeholder_text_single: "Seleccione una opci\u00F3n...",
            placeholder_text_multiple: "Seleccione una opci\u00F3n..."
        });

        $('.select321').select2({
            theme: 'bootstrap4',
        });




    }

})(window, document, window.jQuery);
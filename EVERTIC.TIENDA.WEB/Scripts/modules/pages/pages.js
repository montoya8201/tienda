/**
 * Used for user pages
 * Login and Register
 */
(function(window, document, $, undefined) {
    'use strict';

    $(initParsleyForPages);

    function initParsleyForPages() {

        // Parsley options setup for bootstrap validation classes
        var parsleyOptions = {
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            classHandler: function (ParsleyField) {
                var el = ParsleyField.$element.parents('.form-group').find('input');
                if (!el.length) // support custom checkbox
                    el = ParsleyField.$element.parents('.c-checkbox').find('label');
                return el;
            },
            errorsContainer: function (ParsleyField) {
                return ParsleyField.$element.parents('.form-group');
            },
            errorsWrapper: '<div class="text-help">',
            errorTemplate: '<div></div>'
        };

        //// Register form validation with Parsley
        var formLogin = $("#formLogin");
        if (formLogin.length)
            formLogin.parsley(parsleyOptions);

        var formListarAmortizacion = $("#formListarAmortizacion");
        if (formListarAmortizacion.length)
            formListarAmortizacion.parsley(parsleyOptions);

        var formCambioClave = $("#formCambioClave");
        if (formCambioClave.length)
            formCambioClave.parsley(parsleyOptions);

        var formRecuperarClave = $("#formRecuperarClave");
        if (formRecuperarClave.length)
            formRecuperarClave.parsley(parsleyOptions);

        var formContabilizar = $("#formContabilizar");
        if (formContabilizar.length)
            formContabilizar.parsley(parsleyOptions);

        var formCrearGlobal = $("#formCrearGlobal");
        if (formCrearGlobal.length)
            formCrearGlobal.parsley(parsleyOptions);

        var formEditarGlobal = $("#formEditarGlobal");
        if (formEditarGlobal.length)
            formEditarGlobal.parsley(parsleyOptions);

        var formCrearOrdenDeCompra = $("#formCrearOrdenDeCompra");
        if (formCrearOrdenDeCompra.length)
            formCrearOrdenDeCompra.parsley(parsleyOptions);

        var formDireccionCasaGlobal = $("#formDireccionCasaGlobal");
        if (formDireccionCasaGlobal.length)
            formDireccionCasaGlobal.parsley(parsleyOptions);
    }

})(window, document, window.jQuery);
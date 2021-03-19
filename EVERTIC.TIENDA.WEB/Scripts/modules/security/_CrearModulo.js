/**
 * Clase que contiene los método para crear un rol.
 * */
var security_CrearModulo = {

    crearModulo: function () {
        'use strict';

        $("#formCrearGlobal").submit(function (e) {
            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var modulo = {

                        "Nombre": $("#nombreModulo").val(),
                        "Descripcion": $("#descripcionModulo").val(),
                        "Icono": $("#iconoModulo").val(),
                        "Activo": true

                    };

                    var token = $('input[name="__RequestVerificationToken"]').val();

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/CrearModulo',
                        data: { __RequestVerificationToken: token, modulo: modulo },
                        async: true,
                        dataType: 'JSON',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        success: function (response) {

                            if (response.msn === "success") {

                                security_Index.getAllModulos();

                                swal("Notificación", "El módulo se creo correctamente en el sistema.", "success");

                            } else {

                                swal("Oops!", response.error, "error");
                            }
                        },
                        error: function (ex) {

                            swal("Oops!", ex, "error");
                        }
                    });

                }

            } catch (ex) {

                swal("Oops!", "Error en el método crearModulo \n" + ex, "error");
            }
        });
    }

};
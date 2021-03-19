var security_CrearModuloDetalle = {

    crearModuloDetalle: function () {
        'use strict';

        $("#formCrearGlobal").submit(function (e) {
            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var moduloDetalle = {

                        "Nombre": $("#nombreModuloDetalle").val(),
                        "URL": $("#url").val(),
                        "Icono": $("#icono").val(),
                        "ModuloID": $("#listaModuloID").val(),
                        "Activo": true

                    };

                    var token = $('input[name="__RequestVerificationToken"]').val();

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/CrearModuloDetalle',
                        data: { __RequestVerificationToken: token, moduloDetalle: moduloDetalle },
                        async: true,
                        dataType: 'JSON',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        success: function (response) {

                            if (response.msn === "success") {

                                security_Index.getAllModuloDetalles();

                                swal("Notificación", "El detalle se creo correctamente en el sistema.", "success");

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
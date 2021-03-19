var security_EditarModuloDetalle = {

    getModuloDetalleParaEditar: function (id) {
        'use strict';
        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/GetModuloDetalleParaEditarAsync',
                data: "{ ModuloDetalleID: '" + id.value + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "html",
                async: true,
                success: function (response) {

                    $('#contenedor').empty().html(response);

                    $('#modal').modal('show');

                },
                error: function (response) {

                    swal("Oops!", JSON.stringify(response), "error");
                }
            });

        } catch (ex) {

            swal("Oops!", "Error en el método getModuloDetalleParaEditar \n" + ex, "error");
        }
    },
    updateModuloDetalle: function () {
        'use strict';

        $("#formEditarGlobal").submit(function (e) {
            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var moduloDetalle = {
                        "ModuloDetalleID": $("#ModuloDetalleID").val(),
                        "Nombre": $("#nombreModuloDetalleEditar").val(),
                        "URL": $("#urlEditar").val(),
                        "Icono": $("#iconoEditar").val(),
                        "ModuloID": $("#listaModuloEditarID").val(),
                        "Activo": $("#ActivoModuloDetalleBoolEditar").is(':checked')

                    };

                    var token = $('input[name="__RequestVerificationToken"]').val();

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/UpdateModuloDetalle',
                        data: { __RequestVerificationToken: token, moduloDetalle: moduloDetalle },
                        async: true,
                        dataType: 'JSON',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        success: function (response) {

                            if (response.msn === "success") {

                                $('#modal').modal('hide');

                                security_Index.getAllModuloDetalles();

                                swal("Notificación", "El detalle se modifico correctamente en el sistema.", "success");

                            } else {

                                swal("Oops!", response.error, "error");
                            }
                        },
                        error: function (response) {

                            swal("Oops!", JSON.stringify(response), "error");
                        }
                    });

                }

            } catch (ex) {

                swal("Oops!", "Error en el método updateModuloDetalle \n" + ex, "error");
            }
        });
    }

};
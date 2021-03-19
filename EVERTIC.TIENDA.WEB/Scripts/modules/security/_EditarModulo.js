/**
 * Clase que contiene los método para editar un rol.
 * */
var security_EditarModulo = {

    getModuloParaEditar: function (id) {
        'use strict';
        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/GetModuloParaEditarAsync',
                data: "{ ModuloID: '" + id.value + "'}",
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

            swal("Oops!", "Error en el método getModuloParaEditar \n" + ex, "error");
        }
    },
    updateModulo: function () {
        'use strict';

        $("#formEditarGlobal").submit(function (e) {
            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var modulos = {
                        "ModuloID": $("#moduloID").val(),
                        "Nombre": $("#nombreModuloEditar").val(),
                        "Descripcion": $("#descripcionModuloEditar").val(),
                        "Icono": $("#iconoModuloEditar").val(),
                        "Activo": $("#ActivoModuloBoolEditar").is(':checked')

                    };

                    var token = $('input[name="__RequestVerificationToken"]').val();

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/UpdateModulo',
                        data: { __RequestVerificationToken: token, modulos: modulos },
                        async: true,
                        dataType: 'JSON',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        success: function (response) {

                            if (response.msn === "success") {

                                $('#modal').modal('hide');
                                security_Index.getAllModulos();

                                swal("Notificación", "El módulo se modifico correctamente en el sistema.", "success");

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

                swal("Oops!", "Error en el método updateRol \n" + ex, "error");
            }
        });
    }

};
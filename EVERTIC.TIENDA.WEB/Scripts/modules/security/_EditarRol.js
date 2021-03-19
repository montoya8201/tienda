/**
 * Clase que contiene los método para editar un rol.
 * */
var security_EditarRol = {

    getRolParaEditar: function (id) {
        'use strict';
        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/GetRolParaEditarAsync',
                data: "{ RolID: '" + id.value + "'}",
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

            swal("Oops!", "Error en el método getRolParaEditar \n" + ex, "error");
        }
    },
    updateRol: function (permisos) {
        'use strict';

        $("#formEditarGlobal").submit(function (e) {
            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var aspNetRoles = {
                        "id": $("#RolID").val(),
                        "Name": $("#nombreRolEditar").val(),
                        "Descripcion": $("#descripcionRolEditar").val(),
                        "Activo": $("#ActivoRolBoolEditar").is(':checked')

                    };

                    var token = $('input[name="__RequestVerificationToken"]').val();

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/UpdateRol',
                        data: { __RequestVerificationToken: token, aspNetRoles: aspNetRoles, permisos: permisos },
                        async: true,
                        dataType: 'JSON',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        success: function (response) {

                            if (response.msn === "success") {

                                $('#modal').modal('hide');
                                security_Index.getAllRoles();

                                swal("Notificación", "El rol se modifico correctamente en el sistema.", "success");

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

                swal("Oops!", "Error en el método editarRol \n" + ex, "error");
            }
        });
    }

};
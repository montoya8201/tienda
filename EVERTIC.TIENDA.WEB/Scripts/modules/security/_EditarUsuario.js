
var security_EditarUsuario = {

    getUsuarioParaEditar: function (id) {
        'use strict';
        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/GetUsuarioParaEditar',
                data: "{ UsuarioID: '" + id.value + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "html",
                async: true,
                success: function (response) {

                    $('#contenedor').empty().html(response);

                    $('#modal').modal('show');

                },
                error: function (ex) {

                    swal("Oops!", ex, "error");
                }
            });

        } catch (ex) {

            swal("Oops!", "Error en el método editarUsuarioGet \n" + ex, "error");
        }
    },
    updateUsuario: function () {
        'use strict';

        $("#formEditarGlobal").submit(function (e) {
            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var data = {

                        UsuarioID: $("#UsuarioID").val(),
                        Email: $("#EmailEditar").val(),
                        Nombre: $("#Nombre").val(),
                        ActivoBool: $("#ActivoBool").is(':checked'),
                        NombreRol: String($("#ListaDeRoles").val())

                    };

                    var jsonDatos = JSON.stringify(data);

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/UpdateUsuario',
                        data: "{ JsonData: '" + jsonDatos + "'}",
                        async: true,
                        contentType: "application/json; charset=utf-8",
                        success: function (response) {

                            if (response.msn === "success") {

                                $("#modal").modal("hide");
                                security_Index.getUsuariosConRoles();
                                security_Index.getAllRoles();
                                swal("Notificación", "El usuario se modifico correctamente en el sistema.", "success");

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

                swal("Oops!", "Error en el método updateUsuario \n" + ex, "error");
            }
        });
    },
    removerUsuarioDelRol: function (valor) {
        'use strict';

        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/RemoverUsuarioDelRol',
                data: "{ Valor: '" + valor.value + "'}",
                async: true,
                contentType: "application/json; charset=utf-8",
                success: function (response) {

                    if (response.msn === "success") {

                        var valores = valor.value.split(",");

                        security_Index.getUsuariosPorRolID2(valores[2]);
                        security_Index.getAllRoles();
                        security_Index.getUsuariosConRoles();

                    } else {

                        swal("Oops!", response.error, "error");
                    }
                },
                error: function (ex) {

                    swal("Oops!", ex, "error");
                }
            });

        } catch (ex) {

            swal("Oops!", "Error en el método removerUsuarioDelRol \n" + ex, "error");
        }
    },
    adicionarUsuarioAlRol: function (rol,usuarioID) {
        'use strict';

        try {

            return new Promise(function (resolve, reject) {

                $.ajax({
                    type: "POST",
                    url: rootHost + 'Security/AdicionarUsuarioAlRol',
                    data: "{ Rol: '" + rol + "',UsuarioID: '" + usuarioID + "'}",
                    async: true,
                    contentType: "application/json; charset=utf-8",
                    success: function (response) {

                        if (response.msn === "success") {

                            resolve(response.msn);

                        } else {

                            reject(response.error);
                        }
                    },
                    error: function (ex) {

                        swal("Oops!", ex, "error");
                    }
                });

            });

        } catch (ex) {

            swal("Oops!", "Error en el método adicionarUsuarioAlRol \n" + ex, "error");
        }
    }
};
var security_Index = {

    getUsuariosConRoles: function () {
        'use strict';

        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/GetUsuariosConRoles',
                data: {},
                dataType: "html",
                async: true,
                success: function (response) {

                    $('#divListarUsuariosConRol').html(response);

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                    swal("Oops!", textStatus, "error");
                }
            });

        } catch (ex) {

            swal("Oops!", "Error en el método getUsuariosConRoles \n" + ex, "error");
        }
    },
    getAllRoles: function () {
        'use strict';

        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/GetAllRoles',
                data: {},
                dataType: "html",
                async: true,
                success: function (response) {

                    $('#divListaRol').html(response);

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                    swal("Oops!", textStatus, "error");
                }
            });

        } catch (ex) {

            swal("Oops!", "Error en el método getAllRoles \n" + ex, "error");
        }
    },
    getAllModulos: function () {
        'use strict';

        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/GetAllModulos',
                data: {},
                dataType: "html",
                async: true,
                success: function (response) {

                    $('#divListaModulos').html(response);

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                    swal("Oops!", textStatus, "error");
                }
            });

        } catch (ex) {

            swal("Oops!", "Error en el método getAllModulos \n" + ex, "error");
        }
    },
    getAllModuloDetalles: function () {
        'use strict';

        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/GetAllModuloDetalles',
                data: {},
                dataType: "html",
                async: true,
                success: function (response) {

                    $('#divListaModuloDetalles').html(response);

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                    swal("Oops!", textStatus, "error");
                }
            });

        } catch (ex) {

            swal("Oops!", "Error en el método getAllModuloDetalles \n" + ex, "error");
        }
    },
    getUsuariosPorRolID: function (id) {
        'use strict';
        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/GetUsuariosPorRolID',
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

            swal("Oops!", "Error en el método getUsuariosPorRolID \n" + ex, "error");
        }
    },
    getUsuariosPorRolID2: function (id) {
        'use strict';
        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/GetUsuariosPorRolID',
                data: "{ RolID: '" + id + "'}",
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

            swal("Oops!", "Error en el método getUsuariosPorRolID \n" + ex, "error");
        }
    },
    menu: function () {
        'use strict';
        
        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/Menu',
                data: {},
                dataType: "html",
                async: true,
                success: function (response) {

                    $('#divMenu').empty().html(response);

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                    swal("Oops!", textStatus, "error");
                }
            });

        } catch (ex) {

            swal("Oops!", "Error en el método menu \n" + ex, "error");
        }
    },
    login: function () {
        'use strict';

        $("#formLogin").submit(function (e) {
            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var loginViewModel = {
                        "Email": $("#email").val(),
                        "Password": $("#password").val(),
                        "RememberMe": $("#rememberMe").is(':checked')

                    };

                    var token = $('input[name="__RequestVerificationToken"]').val();

                    var jsonAPI;
                    $.getJSON('https://ipapi.co/json/', function (data) {
                        jsonAPI = JSON.stringify(data, null, 2);

                        $.ajax({
                            type: "POST",
                            url: rootHost + 'Security/Login',
                            data: { __RequestVerificationToken: token, model: loginViewModel, JsonAPI: jsonAPI },
                            async: true,
                            dataType: 'JSON',
                            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                            success: function (response) {


                                switch (response.msn) {
                                    case "0":
                                        window.location = rootHost + "Home/Welcome";
                                        break;
                                    default:
                                        swal("Validación", response.msn, "warning");
                                        break;

                                    case "200":
                                        swal("Oops!", response.error, "error");
                                        break;
                                }

                            },
                            error: function (response) {

                                swal("Oops!", JSON.stringify(response), "error");
                            }
                        });
                    });
                }

            } catch (ex) {

                swal("Oops!", "Error en el método login \n" + ex, "error");
            }
        });
    },
    logOff: function () {
        'use strict';

        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/LogOff',
                data: {},
                async: true,
                dataType: 'JSON',
                success: function (response) {

                    if (response.msn === "success") {
                        window.location = rootHost + "Home/Index";
                    } else {
                        swal("Oops!", response.msn, "error");
                    }
                },
                error: function (response) {

                    swal("Oops!", JSON.stringify(response), "error");
                }
            });

        } catch (ex) {

            swal("Oops!", "Error en el método logOff \n" + ex, "error");
        }
    },
    miPerfilVerPermisos: function (id) {
        'use strict';
        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/MiPerfilVerPermisos',
                data: "{ RolID: '" + id.value + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "html",
                async: true,
                success: function (response) {

                    $('#contenedorVerPermisos').empty().html(response);

                    var tree = $('#treeVerPermisos').tree({
                        primaryKey: 'id',
                        uiLibrary: 'bootstrap4',
                        dataSource: rootHost + 'Security/GetPermisosParaAsignarEditarRol?RolID=' + id.value,
                        checkboxes: true,
                        dataBound: function (e) {
                            expandAll();
                        }
                    });


                    function expandAll() {
                        tree.expandAll();
                        tree.disableAll();
                    }

                    $('#modalVerPermisos').modal('show');

                },
                error: function (response) {

                    swal("Oops!", JSON.stringify(response), "error");
                }
            });

        } catch (ex) {

            swal("Oops!", "Error en el método miPerfilVerPermisos \n" + ex, "error");
        }
    },
    cambiarClave: function () {
        'use strict';

        $("#formCambioClave").submit(function (e) {
            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var changePasswordViewModel = {
                        "OldPassword": $("#OldPassword").val(),
                        "NewPassword": $("#NewPassword").val(),
                        "ConfirmPassword": $("#ConfirmPassword").is(':checked')

                    };

                    var token = $('input[name="__RequestVerificationToken"]').val();

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/CambiarClave',
                        data: { __RequestVerificationToken: token, model: changePasswordViewModel },
                        async: true,
                        dataType: 'JSON',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        success: function (response) {

                            if (response.msn.length > 0) {

                                swal({
                                    title: "Notificación",
                                    text: response.msn,
                                    type: "success"
                                },
                                    function () {
                                        window.location = rootHost + "Home/Index";
                                    });

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

                swal("Oops!", "Error en el método crearUsuario \n" + ex, "error");
            }
        });
    },
    forgotPassword: function () {
        'use strict';

        $("#formRecuperarClave").submit(function (e) {
            try {
                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var email = $("#resetInputEmail1").val();

                    var token = $('input[name="__RequestVerificationToken"]').val();

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/ForgotPassword',
                        data: { __RequestVerificationToken: token, Email: email },
                        async: true,
                        dataType: 'JSON',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        success: function (response) {

                            if (response.msn.length > 0) {

                                swal("Notificación", response.msn, "success");

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

                swal("Oops!", "Error en el método forgotPassword \n" + ex, "error");
            }

        });
    },
    listaLogSesionByUsuarioID: function (id) {
        'use strict';
        try {

            $.ajax({
                type: "POST",
                url: rootHost + 'Security/ListaLogSesionByUsuarioID',
                data: "{ UsuarioID: '" + id.value + "'}",
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

            swal("Oops!", "Error en el método listaLogSesionByUsuarioID \n" + ex, "error");
        }
    }
};
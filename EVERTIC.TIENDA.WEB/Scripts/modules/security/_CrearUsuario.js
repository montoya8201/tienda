/**
 * Clase que contiene los método para crear un usuario.
 * */


var security_CrearUsuario = {

    crearUsuario: function () {
        'use strict';

        $("#formCrearGlobal").submit(function (e) {
            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var formData = $(this).serialize();

                    var formCrearGlobal = $("#formCrearGlobal");
                    formData = new FormData(formCrearGlobal[0]);

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/CrearUsuario',
                        data: formData,
                        async: true,
                        contentType: false,
                        processData: false,
                        success: function (response) {

                            if (response.msn === "success") {

                                security_Index.getUsuariosConRoles();
                                security_Index.getAllRoles();
                                swal("Notificación", "El usuario se creo correctamente en el sistema.", "success");

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
    }

};
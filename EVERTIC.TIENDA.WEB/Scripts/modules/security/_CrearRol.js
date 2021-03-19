/**
 * Clase que contiene los método para crear un rol.
 * */
var security_CrearRol = {

    crearRol: function (permisos) {
        'use strict';

        $("#formCrearGlobal").submit(function (e) {
            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {

                    var aspNetRoles = {

                        "Name": $("#nombreRol").val(),
                        "Descripcion": $("#descripcionRol").val(),
                        "Activo": true

                    };
                    
                    var token = $('input[name="__RequestVerificationToken"]').val();

                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Security/CrearRol',
                        data: { __RequestVerificationToken: token, aspNetRoles: aspNetRoles, Permisos: permisos },
                        async: true,
                        dataType: 'JSON',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        success: function (response) {

                            if (response.msn === "success") {

                                security_Index.getAllRoles();

                                swal("Notificación", "El rol se creo correctamente en el sistema.", "success");

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

                swal("Oops!", "Error en el método crearRol \n" + ex, "error");
            }
        });
    }

};
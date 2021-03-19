var operacionesComercio = {
    crearOrdenDeCompraAsync: function () {

        'use strict';
        $("#formCrearOrdenDeCompra").submit(function (e) {

            try {

                e.preventDefault();

                var form = $(this);

                form.parsley().validate();

                if (form.parsley().isValid()) {


                    var token = $('input[name="__RequestVerificationToken"]').val();


                    $.ajax({
                        type: "POST",
                        url: rootHost + 'Compras/CrearOrdenDeCompraAsync',
                        data: { __RequestVerificationToken: token },
                        async: true,
                        dataType: 'JSON',
                        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                        success: function (response) {

                            if (response.msn === "success") {

                                swal("Notificación", "La orden de compra se creó correctamente en el sistema.", "success");


                            } else {

                                swal("Oops!", response.error, "error");
                            }
                        },
                        error: function (ex) {

                            swal("Oops!", ex, "error");
                        }
                    });
                }

            }
            catch (ex) {

                swal("Oops!", "Error en el método crearOrdenDeCompraAsync \n" + ex, "error");
            }
        });

    }

};
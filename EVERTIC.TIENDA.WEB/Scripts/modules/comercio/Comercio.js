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

    },
    iniciarPago: function (NroFactura) {

        try {
            $.ajax({
                type: "POST",
                url: rootHost + 'Compras/IniciarPago',
                data: {
                    NroFactura: NroFactura
                },
                dataType: "html",
                success: function (response) {

                    var respuesta = JSON.parse(response);

                    var responsePago = respuesta.responsePago;
                    var requestId = respuesta.RequestId;

                    console.log(responsePago)
                    var mensaje = "En este momento su factura Nro " + NroFactura + " presenta un proceso de pago cuya transacción se encuentra PENDIENTE de recibir confirmación por parte de su  entidad financiera, por favor espere unos minutos y vuelva a consultar más tarde para verificar si su pago fue confirmado de forma exitosa.Si desea mayor información sobre el estado actual de su"
                    mensaje = mensaje + " operación puede comunicarse a nuestras líneas de atención al cliente o enviar un correo electrónico a jhon.montoya@outlook.com y preguntar por el estado de la transacción:  " + requestId

                    switch (responsePago.Status.status) {
                        case 'OK':

                            swal({
                                title: "Pagos en Línea",
                                text: "A continuación será redireccionado a la pasarela de pagos, ¿esta de acuerdo?",
                                icon: "info",
                                buttons: true,
                                dangerMode: false,
                            }, function () {
                                    location.href = responsePago.ProcessUrl;
                            });

                            break;
                        case 'PENDING':
                            swal({
                                title: "Transacción Pendiente!",
                                text: mensaje,
                                icon: "info",
                                button: "Aceptar",
                            });
                            break;
                        case 'APPROVED':
                            location.href = '/IUSH/ResultadoPago?NroFactura=' + NroFactura;
                            break;
                        case 'REJECTED':
                        case 'FAILED':
                            PagoRechazado(NroFactura);
                            break;
                    }

                }
            });
        } catch (e) {

        }

    }
};
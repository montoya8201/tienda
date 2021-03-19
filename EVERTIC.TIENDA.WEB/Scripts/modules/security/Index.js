var security_Index = {

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
    }
};
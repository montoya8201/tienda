//Método que permite validar que solo se ingresen números en el campo donde se ponga la clase .numerico

$(document).on("input", ".numerico", function () {
    this.value = this.value.replace(/\D/g, '');
});
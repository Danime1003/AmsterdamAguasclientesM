$("form").on("submit", (event) => {
    event.preventDefault();
    var ser1 = $("form").serialize();
    var ser2 = $("form").serializeArray();

    console.log(ser1);
    console.log(ser2);
    console.log(ser2[0].value);

});

var nameGood = false;
var telGood = false;
var mailGood = false;
var menGood = false;
var depaGood = false;
var condiGood = false;

$("#enviar").hide();

$("input, textarea").focusin(function() {
    $(this).addClass("activeInput");
});

$("input, textarea").focusout(function() {
    $(this).removeClass();
});

$("#nombre").blur(function() {
    var pattern = /^[a-zA-Z ]*$/;
    var uName = $(this).val();

    if (pattern.test(uName) && uName !== '') {
        $(this).removeClass().addClass("goodInput");
        console.log("correcto");
        nameGood = true;

    } else {
        $(this).removeClass().addClass("badInput");
        console.log(" NO correcto");
        nameGood = false;

    }
    validarFormulario();
});

$("#telefono").blur(function() {
    var pattern = /^[0-9]*$/;
    var telefono = $(this).val();

    if (pattern.test(telefono) && telefono !== '') {
        $(this).removeClass().addClass("goodInput");
        console.log("correcto");
        telGood = true;

    } else {
        $(this).removeClass().addClass("badInput");
        console.log(" NO correcto");
        telGood = false;

    }
    validarFormulario();
});

$("#email").blur(function() {
    var pattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    var email = $(this).val();

    if (pattern.test(email) && email !== '') {
        $(this).removeClass().addClass("goodInput");
        console.log("correcto");
        mailGood = true;

    } else {
        $(this).removeClass().addClass("badInput");
        console.log(" NO correcto");
        mailGood = false;

    }
    validarFormulario();
});

$("#mensaje").blur(function() {
    var pattern = /^[a-zA-Z0-9 ]*$/;
    var msj = $(this).val();

    if (pattern.test(msj) && msj !== '') {
        $(this).removeClass().addClass("goodInput");
        console.log("correcto");
        menGood = true;

    } else {
        $(this).removeClass().addClass("badInput");
        console.log(" NO correcto");
        menGood = false;

    }
    validarFormulario();
});

$("#departamento").blur(function() {

    var dep = $(this).val();

    if (dep !== "x") {
        $(this).removeClass().addClass("goodInput");
        console.log("correcto");
        depaGood = true;

    } else {
        $(this).removeClass().addClass("badInput");
        console.log(" NO correcto");
        depaGood = false;

    }
    validarFormulario();
});

$("#condiciones").click(() => {

    if ($("#condiciones").is(":checked")) {
        condiGood = true;

    } else {
        $(this).removeClass().addClass("badInput");

        condiGood = false;

    }
    validarFormulario();
});

function validarFormulario() {
    if (
        nameGood == true && mailGood == true && menGood == true && telGood == true && condiGood == true
    ) {
        $("#enviar").fadeIn();
    } else {
        $("#enviar").hide();
    }
}
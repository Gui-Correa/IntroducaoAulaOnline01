// This is a JavaScript file

$(document).on("click","#soma",function(){
    var valor1 = $("#valor1").val();
    var valor2 = $("#valor2").val();

    var resultado = parseFloat(valor1) + parseFloat(valor2);

    $("#resultado").val(resultado);
});

$(document).on("click","#mult",function(){
    var valor1 = $("#valor1").val();
    var valor2 = $("#valor2").val();

    var resultado = parseFloat(valor1) * parseFloat(valor2);

    $("#resultado").val(resultado);
});

$(document).on("click","#divi",function(){
    var valor1 = $("#valor1").val();
    var valor2 = $("#valor2").val();

    var resultado = parseFloat(valor1) / parseFloat(valor2);

    $("#resultado").val(resultado);
});

$(document).on("click","#sub",function(){
    var valor1 = $("#valor1").val();
    var valor2 = $("#valor2").val();

    var resultado = parseFloat(valor1) - parseFloat(valor2);

    $("#resultado").val(resultado);
});



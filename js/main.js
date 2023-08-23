$(document).ready(function () {

    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('#contact-form').validate({
        rules: {
            nome: {
                required: true,
                
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,

            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            nome: "Por favor, insira seu nome completo.",
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: "Por favor, insira seu telefone.",
            cpf: "Por favor, insira seu CPF.",
            endereco: "Por favor, insira seu endereço.",
            cep: "Por favor, insira seu CEP."
        },
        errorElement: "span",
        errorPlacement: function (error, element) {
            error.addClass("error");
            error.insertAfter(element);
        }
    });
});

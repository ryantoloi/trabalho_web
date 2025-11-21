$(document).ready(function() {
    // 1. Captura o evento de submissão do formulário
    $('#Formulario').submit(function(e) {
        // Assume que a validação é bem-sucedida no início
        var formularioValido = true;

        // 2. Itera sobre todos os campos com o atributo 'required'
        $('#Formulario [required]').each(function() {
            // Remove qualquer classe de erro anterior
            $(this).removeClass('erro');
            
            // Verifica se o campo está vazio (após remover espaços em branco)
            if ($(this).val().trim() === '') {
                // 3. Se estiver vazio:
                alert('Por favor, preencha todos os campos obrigatórios!');
                $(this).addClass('erro'); // Adiciona uma classe para destaque visual
                formularioValido = false; // Marca a validação como falha
                
                // Impede que o loop continue e foca no primeiro campo com erro
                return false; 
            }
        });

        // 4. Se o formulário não for válido, impede a submissão
        if (!formularioValido) {
            e.preventDefault(); // Impede o envio do formulário
            
            // Foca no primeiro campo com erro para melhor usabilidade
            $('.erro:first').focus(); 
        }
    });
});
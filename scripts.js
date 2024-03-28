// chamamos o Jquery com o cifrão
$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp()
    })
// slideDown e slideUp sendo utilizados como animação de mostrar e guardar o formulário
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none;></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem)
        $(`
        <div class="overlay-imagem-link'>
                <a href="${enderecoDaNovaImagem}" target="_blank title ="Ver imagem em tamanho real"
                    ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('endereco-imagem-nova').val('')
    })
})

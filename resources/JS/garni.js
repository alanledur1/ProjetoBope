$(document).ready(function() {
  // Adiciona um manipulador de eventos 'click' a todas as imagens com a classe 'active-img'.
  $(".active-img").click(function(e) {
    // Previne o comportamento padrão do evento.
    e.preventDefault();

    // Aqui você pode definir o URL do conteúdo que você deseja carregar com base na imagem que foi clicada.
    // Por exemplo, você pode usar o atributo 'alt' da imagem para determinar qual conteúdo carregar.
    var contentUrl;
    switch ($(this).attr('alt')) {
      case 'GAM':
        contentUrl = '/Project/template/templateGarnishes/gam.html';
        break;
      case 'GTM':
        contentUrl = '/Project/template/templateGarnishes/gtm.html';
        break;
      case 'UTI':
        contentUrl = '/Project/template/templateGarnishes/uti.html';
        break;
    }

    // Carrega o conteúdo da página correspondente no novo elemento div.
    $("#dynamic-content-placeholder").load(contentUrl, function() {
      // Rolagem para o topo da página.
      //$(window).scrollTop(0);
    });
  });
});

/*---- Função para criar um efeito de “destaque” onde a imagem clicada se expande e as outras diminuem ----*/
$(document).ready(function(){
  // A função $ (document) .on () anexa um manipulador de eventos, neste caso, um manipulador de clique, aos elementos selecionados, neste caso, todas as imagens dentro de elementos com a classe 'image-content2'.
  $(document).on('click', '.image-content2 img', function(){
    // Quando uma imagem é clicada, a classe 'active-img' é removida de qualquer elemento que a tenha e a largura desses elementos é definida para '100px'.
    $('.active-img').removeClass('active-img').css('width', '18%');
    // Em seguida, a classe 'active-img' é adicionada à imagem que foi clicada (representada por 'this') e a largura dessa imagem é definida para '30%'.
    $(this).addClass('active-img').css('width', '10%');
  });
});

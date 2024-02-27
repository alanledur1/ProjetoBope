
$(document).ready(function() {
  // Carrega a seção "Início" quando a página é inicialmente carregada.
  var page = "template/index.html"; // Substitua por sua URL da página Início
  $("#content").load(page, function() {
    // Rolagem para o topo da página.
    $(window).scrollTop(0);

    // Remove a classe 'active' de todos os itens de navegação.
    $(".nav-item").removeClass("active");
    // Adiciona a classe 'active' ao item de navegação "Início".
    $(".nav-link[href='" + page + "']").parent().addClass("active");
  });

  // O restante do seu código...
  // ...

  // ---------Responsive-navbar-active-animation-----------
  function test() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function () {
    setTimeout(function () {
      test();
    });
  });

  $(window).on('load', function() {
    // Remove 'active' class from all items
    $("#navbarSupportedContent ul li").removeClass("active");
    // Add 'active' class to 'Inicio' item
    $("#navbarSupportedContent ul li:contains('Inicio')").addClass("active");
    // Call your test function after a delay
    setTimeout(function () {
      test();
    }, 1000); // Increase delay if necessary
  });

  $(window).on("resize", function () {
    setTimeout(function () {
      test();
    }, 500);
  });


  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () {
      test();
    });
  });

  // --------------add active class-on another-page move----------
  jQuery(document).ready(function ($) {
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == "") {
      path = "index.html";
    }

   
    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    // Add active class to target link
    target.parent().addClass("active");
  });

  // Add active class on another page linked
  // ==========================================
   /*
  $(window).on('load',function () {
      var current = location.pathname;
       console.log(current);
       $('#navbarSupportedContent ul li a').each(function(){
           var $this = $(this);
           // if the current path is like this link, make it active
          if($this.attr('href').indexOf(current) !== -1){
               $this.parent().addClass('active');
               $this.parents('.menu-submenu').addClass('show-dropdown');
               $this.parents('.menu-submenu').parent().addClass('active');
           }else{
               $this.parent().removeClass('active');
           }
       })
   });

  */ 
  // NAVIGATION LOGO SCROLL TOP
  $('.logo').on('click', function(e) {
    e.preventDefault();
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
    $('html, body').animate({
      scrollTop: 0
    }, 750, 'easeInOutQuad')
  });
  // LINKS TO ANCHORS
  $('a[href^="#"]').on('click', function(event) {

    var $target = $(this.getAttribute('href'));

    if($target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $target.offset().top
      }, 750, 'easeInOutQuad');
    }
  });

  // TOGGLE HAMBURGER & COLLAPSE NAV
  $('.nav-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.menu-left').toggleClass('collapse');
  });
  // REMOVE X & COLLAPSE NAV ON ON CLICK
  $('.menu-left a').on('click', function() {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
  });

  // SHOW/HIDE NAV

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('show-nav').addClass('hide-nav');
        $('.nav-toggle').removeClass('open');
        $('.menu-left').removeClass('collapse');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('hide-nav').addClass('show-nav');
        }
    }

    lastScrollTop = st;
}

// A função $ (document) .ready () garante que o código dentro dela será executado apenas após a página HTML ser completamente carregada.
$(document).ready(function() {
  // Adiciona um manipulador de eventos 'click' a todos os elementos com a classe 'nav-link'.
  $(".nav-link").click(function(e) {
    // Previne o comportamento padrão do evento, que seria navegar para o URL do link.
    e.preventDefault();

    // Obtém o URL do link que foi clicado.
    var page = $(this).attr('href');
    // Obtém o elemento do link que foi clicado.
    var clickedLink = $(this);

    // Verifica se o link clicado é a página inicial.
    if (page !== "index.html") {
      // Carrega o conteúdo da página correspondente no elemento com o ID 'content'.
      $("#content").load(page, function() {
        // Rolagem para o topo da página.
        $(window).scrollTop(0);

        // Remove a classe 'active' de todos os itens de navegação.
        $(".nav-item").removeClass("active");
        // Adiciona a classe 'active' ao item de navegação que foi clicado.
        clickedLink.parent().addClass("active");
      });
    } else {
      // Se o link clicado é a página inicial, faz uma rolagem suave para o topo da página.
      $('html, body').animate({
        scrollTop: 0
      }, 750, 'easeInOutQuad');
    }
  });
});

$(document).ready(function() {
  $(".nav-link").click(function(e) {
    e.preventDefault();

    var page = $(this).attr('href');
    var clickedLink = $(this);

    // Remove a classe 'active' de todos os itens
    $(".nav-item").removeClass("active");
    // Adiciona a classe 'active' ao item clicado
    clickedLink.parent().addClass("active");

    // Carrega o conteúdo da página correspondente
    $.ajax({
      url: page,
      type: 'GET',
      success: function(res) {
        var newContent = $(res).find("#content").html(); // Altere "#content" para o seletor do conteúdo que você deseja atualizar
        $("#content").html(newContent); // Altere "#content" para o seletor do conteúdo que você deseja atualizar

        // Rolagem para o topo da página
        $('html, body').animate({
          scrollTop: 0
        }, 750, 'easeInOutQuad');
      }
    });
  });
});
});






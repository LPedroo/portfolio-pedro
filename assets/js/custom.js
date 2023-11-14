//Efeito de rolagem suave à página

jQuery(function ($) {
  $("a[href*=#]").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var $target = $(this.hash);
      $target =
        ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $("html,body").animate({ scrollTop: targetOffset }, 800); //set scroll speed here
        return false;
      }
    }
  });

  window.scrollReveal = new scrollReveal();
});

//Efeito de digitação na frase

var string = "Seja Bem Vindo ao meu Portfólio!";
var array = string.split("");
var timer;

function frameLooper() {
  if (array.length > 0) {
    document.getElementById("textEffect").textContent += array.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper()", 70);
}
frameLooper();

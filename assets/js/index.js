const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  $('html, body').animate({
  scrollTop: $('section').offset().top
}, 550);

$("#enviar").click(function () {
  alert("Se ha enviado tu mensaje. ¡Gracias!");
});

$(".plane").click(function () {
    $("#plane").toggle("fast");
  });

  $(".mountain").click(function () {
    $("#mountain").toggle("fast");
  });

  $(".route").click(function () {
    $("#route").toggle("fast");
  });

$(document).ready(function () {
  configPortfolioSlideshow();

  $('.menu-button').click(function (event) {
    event.preventDefault();

    $('.main-nav').toggleClass('active');
  });
});

function configPortfolioSlideshow()
{
  var config = {advanceSpeed:7000, directionalNav:false}

  $("#slide-bienal2012").orbit(config);
  $("#slide-conspiracao").orbit(config);
  $("#slide-pepsi").orbit(config);
  $("#slide-ultraeco").orbit(config);
}

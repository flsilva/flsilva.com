$(document).ready(function () {
  configPortfolioSlideshow();

  if (Modernizr.touch) {
    $('footer.page').addClass('mobile');
    $('.nav-bar.social-media').addClass('mobile');
    $('.nav-bar.social-media li a').addClass('mobile');
  }

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

  $(".portfolio_index .job .slide").each(function(index, element)
  {
    $(element).css("cursor", "pointer");
    $(element).click(function(){
      window.location.href = $(element).attr("data-link");
    });
  });
}

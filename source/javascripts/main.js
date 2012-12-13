$(document).ready(function () {
  configPortfolioSlideshow();

  if (Modernizr.touch) {
    $('body').addClass('mobile');
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

  $(".portfolio .job .slide img").each(function(index, element)
  {
    var data_src = $(element).attr("data-src");
    if(data_src === null || data_src == "") return;
    $(element).attr("src", data_src);
  });

  var config = {advanceSpeed:6000, directionalNav:false}

  $("#slide-bienal2012").orbit(config);
  $("#slide-schin2010").orbit(config);
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

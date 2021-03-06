//Add Ripple Effect To All Buttons With r-btn-ripple.
$(".r-ripple").ripple();
//Fixed Top Nav Gets A Shadow When User Scrolls
function nav_wf() {
    if($(window).scrollTop() === 0){
        $('.r-nav-fixed').removeClass('r-nav-shadow');
    } else {
        $('.r-nav-fixed').addClass('r-nav-shadow');
    }
}
$(window).scroll(nav_wf);
//Smooth Anchor Points
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-110
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });
  // Modals
  function openmodal(id) {
    $('#'+id).fadeIn(400);
  }
  function closemodal(id) {
    $('#'+id).delay(150).fadeOut(300);
  }
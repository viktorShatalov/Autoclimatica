jQuery(document).ready(function ($) {
  
  //  mobile-menu

  jQuery(".burger").click(function () {
    jQuery(".burger,.header__bottom-menu").toggleClass("active");
    if (jQuery(".mobile__content,.mobile__content-social").hasClass("active")) {
      jQuery(".mobile__content,.mobile__content-social").removeClass("active");
    }
  });

  // category dropdown menu
  if (window.innerWidth > 425) {
  
  }

  if (window.innerWidth < 425) {
    // переношу мобильный контент
  
  }
  // accordion

  jQuery(".accordion-item__content:not(:first)").hide();

  jQuery(".accordion-item-head").on("click", function () {
    jQuery(this).next().slideToggle(500);
    jQuery(this).toggleClass("active");
  });

});

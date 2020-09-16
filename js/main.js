jQuery(document).ready(function ($) {
  //  mobile-menu

  jQuery(".burger").click(function () {
    jQuery(".burger,.header__menu").toggleClass("active");
    jQuery("body,html").toggleClass("lock");
  });

  // category dropdown menu
  if (window.innerWidth > 425) {
  }

  // resize
  // jQuery(window).resize(function () {
  if (jQuery(window).width() < 768) {
    // slideUp category

    jQuery(".category__navigation nav ul li").hide();
    jQuery(".heating__systems .head").on("click", function (e) {
      jQuery(".heating__systems ul").children().slideToggle("slow");
      e.preventDefault();
    });
    jQuery(".сooling__systems .head").on("click", function (e) {
      jQuery(".сooling__systems ul").children().slideToggle("slow");
      e.preventDefault();
    });
    jQuery(".equipment .head").on("click", function (e) {
      jQuery(".equipment ul").children().slideToggle("slow");
      e.preventDefault();
    });

    let cart = document.querySelector("#cart");
    let mobileHeader = document.querySelector("section.header__center__row");
    mobileHeader.prepend(cart);

    jQuery(".first__slider__btn a").html("заказать звонок");

    jQuery(".category__product-items").prepend(jQuery("#second__screen h2"));
    jQuery(".footer__item:nth-child(1)").append(jQuery(".card__icon"));
  }
  // });
  // accordion

  jQuery(".accordion-item__content:not(:first)").hide();

  jQuery(".accordion-item-head").on("click", function () {
    jQuery(this).next().slideToggle(500);
    jQuery(this).toggleClass("active");
  });
  // modal

  function modal() {
    const openModalButtons = document.querySelectorAll("[data-modal-target]");
    const closeModalButtons = document.querySelectorAll("[data-close-button]");
    const overlay = document.getElementById("overlay");

    openModalButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
      });
    });

    overlay.addEventListener("click", () => {
      const modals = document.querySelectorAll(".modal.active");
      modals.forEach((modal) => {
        closeModal(modal);
      });
    });

    closeModalButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
      });
    });

    function openModal(modal) {
      if (modal == null) return;
      modal.classList.add("active");
      overlay.classList.add("active");
    }

    function closeModal(modal) {
      if (modal == null) return;
      modal.classList.remove("active");
      overlay.classList.remove("active");
    }
  }
  modal();
  // sliders

  jQuery(".first__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
  });

  jQuery(".similar__products-items").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
  jQuery(".recently__viewed-items").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // accordion

  jQuery(".accordion-item__content").hide();

  jQuery(".accordion-item-head").on("click", function () {
    jQuery(this).toggleClass("active");
  });

  jQuery(".aws-container .aws-search-form").css({
    height: "35px",
  });
  jQuery(".aws-container .aws-search-field").css({
    padding: "8px 11px",
    "font-family": "inherit",
    "font-size": "inherit",
    "max-width": "290px",
  });
  jQuery(".aws-container").css({
    width: "100%",
  });
  jQuery(".aws-search-result").css({
    "max-width": "290px",
  });
  jQuery(".aws-search-clear").css({
    right: "40px",
  });
});
// scroll
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() > 150) {
    jQuery(".header__bottom__row,#header").addClass("active");
  }
  if (jQuery(window).scrollTop() < 150) {
    jQuery(".header__bottom__row,#header").removeClass("active");
  }
});

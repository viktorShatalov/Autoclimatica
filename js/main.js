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
  if (jQuery(window).width() < 769) {
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
    jQuery(".equipment__second .head").on("click", function (e) {
      jQuery(".equipment__second ul").children().slideToggle("slow");
      e.preventDefault();
    });
    let headerPhone = document.querySelector(".header__top__row .icon__link");
    let mobileMenu = document.querySelector("nav.header__menu ");
    let cart = document.querySelector("#cart");
    let mobileHeader = document.querySelector("section.header__center__row");

    mobileHeader.prepend(cart);
    mobileMenu.append(headerPhone);

    jQuery(".first__slider__btn a").html("заказать звонок");

    jQuery(".category__product-items").prepend(jQuery("#second__screen h2"));
    jQuery(".footer__item:nth-child(1)").append(jQuery(".card__icon"));
  }
  // accordion

  jQuery(".accordion-item__content:not(:first)").hide();

  jQuery(".accordion-item-head").on("click", function () {
    jQuery(this).next().slideToggle(500);
    jQuery(this).next().toggleClass("active");
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

  // card-product slider

  jQuery(".slider-for").slick({
    arrows: true,
    dots: false,
    autoplay: false,
    asNavFor: ".slider-nav",
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          draggable: false,
        },
      },
    ],
  });

  jQuery(".slider-nav").slick({
    arrows: false,
    dots: false,
    infinite: false,
    asNavFor: ".slider-for",
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    autoplay: false,
    focusOnSelect: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
    ],
  });

  jQuery(".first__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
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
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
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
          slidesToShow: 1,
          centerMode: true,
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
  if (jQuery(window).scrollTop() >= 150) {
    jQuery(".header__bottom__row,#header").addClass("active");
  }
  if (jQuery(window).scrollTop() < 150) {
    jQuery(".header__bottom__row,#header").removeClass("active");
  }
});

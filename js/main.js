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

  if (window.innerWidth >= 320 && window.innerWidth <= 768) {
    // переношу мобильный контент
    // slideUp category
    jQuery(".heating__systems .head").on("click", function () {
      jQuery(".heating__systems ul").children().slideToggle("slow");
    });
    jQuery(".сooling__systems .head").on("click", function () {
      jQuery(".сooling__systems ul").children().slideToggle("slow");
    });
    jQuery(".equipment .head").on("click", function () {
      jQuery(".equipment ul").children().slideToggle("slow");
    });
  }
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
    autoplay: true,
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

  // let btn = jQuery(".button__add_to_cart");
  // if (btn.text() === "нет в наличии") {
  //   btn.css({
  //     background: "none",
  //   });
  // }
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

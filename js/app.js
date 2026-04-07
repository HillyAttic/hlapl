var MyScroll = "";
(function (window, document, $, undefined) {
  "use strict";
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(
      navigator.userAgent
    )
      ? !0
      : !1;
  var Scrollbar = window.Scrollbar;
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.backToTop();
      Init.preloader();
      Init.dropdown();
      Init.counter();
      Init.countdownInit(".countdown", "2026/11/01");
      Init.wow();
      Init.header();
      Init.slick();
      Init.filterSearch();
      Init.checkBoxes();
      Init.formValidation();
      Init.contactForm();
    },
    w: function (e) {
      if (isMobile) {
        $("body").addClass("is-mobile");
      }
    },
    backToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "300");
      });
    },
    preloader: function () {
      setTimeout(function () {
        $("#preloader").fadeOut("slow");
      }, 1900);
    },

    dropdown: function () {
      $(document).ready(function () {
        $(".wrapper-dropdown").each(function () {
          let $dropdown = $(this);
          let $arrow = $dropdown.find("svg");
          let $options = $dropdown.find(".topbar-dropdown");
          let $display = $dropdown.find(".selected-display");

          $dropdown.on("click", function (event) {
            event.stopPropagation();
            $(".wrapper-dropdown").not($dropdown).removeClass("active");
            $(".wrapper-dropdown svg").not($arrow).removeClass("rotated");

            $dropdown.toggleClass("active");
            $arrow.toggleClass("rotated");
          });

          $options.find("li").on("click", function (event) {
            event.stopPropagation();
            $display.text($(this).text());
            closeAllDropdowns();
          });
        });

        $(document).on("click", function () {
          closeAllDropdowns();
        });

        function closeAllDropdowns() {
          $(".wrapper-dropdown").removeClass("active");
          $(".wrapper-dropdown svg").removeClass("rotated");
        }
      });
      // if ($(".team-card").length) {
      //   $('.show-btn').on('click', function (e) {
      //     e.stopPropagation();
      //     $('.sm-menu').not($(this).next('.sm-menu')).removeClass('active');
      //     $(this).next('.sm-menu').toggleClass('active');
      //   });

      //   $(document).on('click', function () {
      //     $('.card-icon').removeClass('active');
      //   });

      //   $('.sm-menu').on('click', function (e) {
      //     e.stopPropagation();
      //   });
      // }
      $(document).ready(function () {
        $(".card-icon").on("click", function (e) {
          e.stopPropagation(); // دوسرے ایونٹس کو روکنے کے لیے

          let menu = $(this).find(".sm-menu"); // اسی card-icon کے اندر والا sm-menu حاصل کریں

          // باقی تمام sm-menu بند کر دیں
          $(".sm-menu").not(menu).removeClass("active");

          // اسی card-icon کا sm-menu ٹوگل (کھولیں/بند کریں)
          menu.toggleClass("active");
        });

        // اگر کہیں بھی کلک ہو، تو sm-menu بند ہو جائے
        $(document).on("click", function () {
          $(".sm-menu").removeClass("active");
        });

        // اگر sm-menu پر کلک ہو، تو یہ بند نہ ہو
        $(".sm-menu").on("click", function (e) {
          e.stopPropagation();
        });
      });
    },
    // Countdown Timer
    countdownInit: function (countdownSelector, countdownTime, countdown) {
      var eventCounter = $(countdownSelector);
      if (eventCounter.length) {
        eventCounter.countdown(countdownTime, function (e) {
          $(this).html(
            e.strftime(
              "<li><h2>%D</h2><p>Days</p></li>\
              <li><h2>%H</h2><p>Hrs</p></li>\
              <li><h2>%M</h2><p>Mins</p></li>\
              <li><h2>%S</h2><p>Secs</p></li>"
            )
          );
        });
      }
    },
    wow: function () {
      if ($(".wow").length) {
        var wow = new WOW({
          boxClass: "wow",
          animateClass: "animated",
          mobile: !0,
          live: !0,
        });
        wow.init();
      }
    },
    header: function () {
      function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split("/").reverse()[0];
        selector.find("li").each(function () {
          let anchor = $(this).find("a");
          if ($(anchor).attr("href") == FileName) {
            $(this).addClass("current");
          }
        });
        selector.children("li").each(function () {
          if ($(this).find(".current").length) {
            $(this).addClass("current");
          }
        });
        if ("" == FileName) {
          selector.find("li").eq(0).addClass("current");
        }
      }
      if ($(".main-menu__list").length) {
        let mainNavUL = $(".main-menu__list");
        dynamicCurrentMenuClass(mainNavUL);
      }
      if ($(".main-menu__nav").length && $(".mobile-nav__container").length) {
        let navContent = document.querySelector(".main-menu__nav").innerHTML;
        let mobileNavContainer = document.querySelector(
          ".mobile-nav__container"
        );
        mobileNavContainer.innerHTML = navContent;
      }
      if ($(".sticky-header__content").length) {
        let navContent = document.querySelector(".main-menu").innerHTML;
        let mobileNavContainer = document.querySelector(
          ".sticky-header__content"
        );
        mobileNavContainer.innerHTML = navContent;
      }
      if ($(".mobile-nav__container .main-menu__list").length) {
        let dropdownAnchor = $(
          ".mobile-nav__container .main-menu__list .dropdown > a"
        );
        dropdownAnchor.each(function () {
          let self = $(this);
          let toggleBtn = document.createElement("BUTTON");
          toggleBtn.setAttribute("aria-label", "dropdown toggler");
          toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
          self.append(function () {
            return toggleBtn;
          });
          self.find("button").on("click", function (e) {
            e.preventDefault();
            let self = $(this);
            self.toggleClass("expanded");
            self.parent().toggleClass("expanded");
            self.parent().parent().children("ul").slideToggle();
          });
        });
      }
      if ($(".mobile-nav__toggler").length) {
        $(".mobile-nav__toggler").on("click", function (e) {
          e.preventDefault();
          $(".mobile-nav__wrapper").toggleClass("expanded");
          $("body").toggleClass("locked");
        });
      }
      $(window).on("scroll", function () {
        if ($(".stricked-menu").length) {
          var headerScrollPos = 130;
          var stricky = $(".stricked-menu");
          if ($(window).scrollTop() > headerScrollPos) {
            stricky.addClass("stricky-fixed");
          } else if ($(this).scrollTop() <= headerScrollPos) {
            stricky.removeClass("stricky-fixed");
          }
        }
      });
    },
    slick: function () {
      if ($(".testimonial-slider").length) {
        $(".testimonial-slider").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          infinite: !0,
          autoplay: true,
          dots: true,
          draggable: !0,
          arrows: !1,
          lazyLoad: "progressive",
          responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 2 } },
            { breakpoint: 769, settings: { slidesToShow: 1 } },
          ],
        });
      }
      if ($(".brand-slider").length) {
        $(".brand-slider").slick({
          autoplay: !0,
          autoplaySpeed: 0,
          speed: 10000,
          arrows: !1,
          swipe: !0,
          slidesToShow: 6,
          cssEase: "linear",
          pauseOnFocus: !1,
          pauseOnHover: !1,
          responsive: [
            { breakpoint: 1499, settings: { slidesToShow: 4 } },
            { breakpoint: 999, settings: { slidesToShow: 3 } },
            { breakpoint: 490, settings: { slidesToShow: 2 } },
          ],
        });
      }
      $(".btn-prev").click(function () {
        var $this = $(this).attr("data-slide");
        $("." + $this).slick("slickPrev");
      });
      $(".btn-next").click(function () {
        var $this = $(this).attr("data-slide");
        $("." + $this).slick("slickNext");
      });
    },
    filterSearch: function () {
      if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function (e) {
          e.preventDefault();
          $(".search-popup").toggleClass("active");
          $(".mobile-nav__wrapper").removeClass("expanded");
          $("body").toggleClass("locked");
        });
      }
    },
    checkBoxes: function () {
      $(".sub-checkboxes").hide();
      $(".arrow-block").click(function () {
        var subCheckboxes = $(this).next(".sub-checkboxes");
        var chevronIcon = $(this).find("i");
        subCheckboxes.slideToggle("fast");
        chevronIcon.toggleClass("fa-chevron-down fa-chevron-up");
      });
      $(".check-block, .sub-check-box").click(function (event) {
        event.stopPropagation();
      });
      if ($(".customer-container").length) {
        $(".signin-button").click(function () {
          $(".sign-form").slideToggle();
        });
      }
    },
    counter: function () {
      document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll(".counter");
        const speed = 200; // speed adjust karo

        const startCounter = (counter) => {
          const target = +counter.getAttribute("data-target");
          const increment = target / speed;

          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.textContent = Math.ceil(current) + "+";
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = target + "+";
            }
          };

          updateCounter();
        };

        // Jab element viewport me aaye tab counter start ho
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 }
        );

        counters.forEach((counter) => observer.observe(counter));
      });
    },
       // Form Validation
    formValidation: function () {
      if ($(".contact-form").length) {
        $(".contact-form").validate();
      }
      if ($(".login-form").length) {
        $(".login-form").validate();
      }
    },

    // Contact Form
    contactForm: function () {
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        if ($(".contact-form").valid()) {
          var _self = $(this);
          _self
            .closest("div")
            .find('button[type="submit"]')
            .attr("disabled", "disabled");
          var data = $(this).serialize();
          $.ajax({
            url: "https://websitemakerz.com/mail/contact.php",
            type: "post",
            dataType: "json",
            data: data,
            success: function (data) {
              $(".contact-form").trigger("reset");
              _self.find('button[type="submit"]').removeAttr("disabled");
              if (data.success) {
                document.getElementById("alert-message").innerHTML =
                  "<h5 class='color-sec mt-16 mb-16'>Email Sent Successfully</h5>";
              } else {
                document.getElementById("alert-message").innerHTML =
                  "<h5 class='color-sec mt-16 mb-16'>There is an error</h5>";
              }
            $("#alert-message").show("slow");
              $("#alert-message").slideDown("slow");
              setTimeout(function () {
                $("#alert-message").slideUp("hide");
                 $("#alert-message").hide("slow");
              }, 4000);
            },
          });
        } else {
          return !1;
        }
      });
    },
  };
  Init.i();
})(window, document, jQuery);
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };
document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;
  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});
document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});

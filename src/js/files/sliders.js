/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Controller } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll(
    '[class*="__swiper"]:not(.swiper-wrapper)'
  );
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add("swiper");
      slider.classList.add("swiper-wrapper");
      for (const slide of slider.children) {
        slide.classList.add("swiper-slide");
      }
    });
  }
}
// Инициализация слайдеров

function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  if (document.querySelector(".swiper")) {
    const contentSliderTwo = new Swiper(".js-content-sliderTwo", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Controller],
      /*
				  effect: 'fade',
				  autoplay: {
					  delay: 3000,
					  disableOnInteraction: false,
				  },
				  */
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      watchSlidesProgress: true,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      // pagination: {
      //   el: ".content__pagg",
      //   clickable: true,
      // },
      // Arrows
      //   navigation: {
      //     nextEl: ".about__more .more__item_next",
      //     prevEl: ".about__more .more__item_prev",
      //   },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          autoHeight: true,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 1.5,
          spaceBetween: 20,
          pagination: {
            type: "progressbar",
          },
        },
        999: {
          slidesPerView: 1.5,
          spaceBetween: 53,
          slidesPerGroup: 1,
          initialSlide: 1,
          centeredSlides: true,
          pagination: {
            type: "progressbar",
          },
        },
        1268: {
          slidesPerView: 2.5,
          spaceBetween: 53,
          slidesPerGroup: 2,
          pagination: {
            el: ".content__pagg",
            clickable: true,
          },
        },
        1581: {
          slidesPerView: 3,
          spaceBetween: 53,
          slidesPerGroup: 3,
        },
      },
      on: {},
    });
    const contentSlider = new Swiper(".js-content-slider", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Controller],
      /*
  			effect: 'fade',
  			autoplay: {
  				delay: 3000,
  				disableOnInteraction: false,
  			},
  			*/
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      watchSlidesProgress: true,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      reverseDirection: true,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      pagination: {
        el: ".content__pagg",
        clickable: true,
      },
      // Arrows
      navigation: {
        nextEl: ".js-content-arrow__left",
        prevEl: ".js-content-arrow__right",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          autoHeight: true,
          centeredSlides: true,
          pagination: {
            type: "progressbar",
          },
        },

        480: {
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: true,
          pagination: {
            type: "progressbar",
          },
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
          pagination: {
            type: "progressbar",
          },
        },
        992: {
          slidesPerView: 1.5,
          spaceBetween: 20,
          pagination: {
            type: "progressbar",
          },
        },

        999: {
          slidesPerView: 1.5,
          spaceBetween: 53,
          slidesPerGroup: 1,
          initialSlide: 1,
          centeredSlides: true,
          pagination: {
            type: "progressbar",
          },
        },
        1268: {
          slidesPerView: 2.5,
          spaceBetween: 53,
          slidesPerGroup: 2,
          pagination: {
            el: ".content__pagg",
            clickable: true,
          },
        },
        1581: {
          slidesPerView: 3,
          spaceBetween: 53,
          slidesPerGroup: 3,
          pagination: {
            el: ".content__pagg",
            clickable: true,
          },
        },
      },
      on: {},
    });

    const activeSlideElement = document.getElementById("activeSlide");
    const totalSlidesElement = document.getElementById("totalSlides");
    if (activeSlideElement || totalSlidesElement) {
      function updateSlideInfo() {
        const activeSlideIndex = contentSlider.realIndex;
        const totalSlides = contentSlider.slides.length;

        activeSlideElement.textContent = activeSlideIndex + 1;
        totalSlidesElement.textContent = totalSlides;
      }
      updateSlideInfo();
      contentSlider.on("slideChange", updateSlideInfo);
      window.addEventListener("load", updateSlideInfo);
    }

    const contentSlider01 = document.querySelector(".js-content-slider");

    if (contentSlider01) {
      function moveSlides() {
        const slidesToMove = Array.from(contentSliderTwo.slides);
        slidesToMove.forEach((slide) => {
          contentSlider.wrapperEl.appendChild(slide);
        });
        contentSlider.update();
      }

      function handleResize() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 992) {
          moveSlides();
          window.removeEventListener("resize", handleResize); // Удалить обработчик события resize после выполнения кода
        }
      }

      window.addEventListener("resize", handleResize);
      handleResize();
    }

    contentSlider.controller.control = contentSliderTwo;
    contentSliderTwo.controller.control = contentSlider;

    const mobileSliders = document.querySelectorAll("._swiper-mob");

    if (mobileSliders.length > 0) {
      for (let i = 0; mobileSliders.length > i; i++) {
        const el = mobileSliders[i];
        let slider_about;
        el.dataset.mobile = "false";
        window.addEventListener("resize", () => {
          if (window.innerWidth <= 992 && el.dataset.mobile == "false") {
            slider_about = new Swiper(el, {
              modules: [Navigation, Pagination, Controller],
              spaceBetween: 50,
              speed: 800,
              slidesPerView: 1.5,
              centeredSlides: true,
              spaceBetween: 40,
              autoHeight: true,

              breakpoints: {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                  centeredSlides: true,
                  pagination: {
                    el: ".js-content-paggination",
                    clickable: true,
                  },
                },

                480: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                  centeredSlides: true,
                  pagination: {
                    el: ".js-content-paggination",
                    clickable: true,
                  },
                },
                769: {
                  slidesPerView: 1.5,
                  spaceBetween: 40,
                  centeredSlides: true,
                  initialSlide: 1,
                  pagination: {
                    el: ".js-content-paggination",
                    clickable: true,
                  },
                },
              },
            });
            el.dataset.mobile = "true";
          } else if (window.innerWidth >= 992 && el.dataset.mobile == "true") {
            slider_about.destroy();
            el.dataset.mobile = "false";
          }
        });
        if (window.innerWidth <= 992 && el.dataset.mobile == "false") {
          slider_about = new Swiper(el, {
            modules: [Navigation, Pagination, Controller],
            spaceBetween: 50,
            speed: 800,
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 40,
            autoHeight: true,

            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 40,
                centeredSlides: true,
                pagination: {
                  el: ".js-content-paggination",
                  clickable: true,
                },
              },

              480: {
                slidesPerView: 1,
                spaceBetween: 40,
                centeredSlides: true,
                pagination: {
                  el: ".js-content-paggination",
                  clickable: true,
                },
              },
              769: {
                slidesPerView: 1.5,
                spaceBetween: 40,
                centeredSlides: true,
                initialSlide: 1,
                pagination: {
                  el: ".js-content-paggination",
                  clickable: true,
                },
              },
            },
          });
          el.dataset.mobile = "true";
        } else if (window.innerWidth >= 992 && el.dataset.mobile == "true") {
          slider_about.destroy();
          el.dataset.mobile = "false";
        }
      }
    }
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});

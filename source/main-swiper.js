
export function Main(){
  //menu-swiper 
  const menuSwiper = new Swiper('.menu-swiper', {
    direction:'horizontal',
    loop:true,
    slidesPerView:'auto',

    breakpoints:{
      800:{
        spaceBetween:50,
      },

      900:{
        spaceBetween:1,
      },

      580:{
        spaceBetween:15,
      },

      500:{
        spaceBetween:30,
      },

      300:{
        spaceBetween:30,
      },
      
    },
  });

  //Подключение кнопок из main__menu-swiper для просмотра слайдера

  const btn_menuSwiper = document.querySelector('.menu-swiper').swiper;

  document.querySelector('.swiper__button-prev').addEventListener("click", () =>{
      btn_menuSwiper.slidePrev();
  });

  document.querySelector('.swiper__button-next').addEventListener("click", () =>{
      btn_menuSwiper.slideNext();
  });

}
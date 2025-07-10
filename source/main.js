

//menu-swiper 
const menuSwiper = new Swiper('.menu-swiper', {
  direction:'horizontal',
  loop:true,
  slidesPerView:'auto',
  spaceBetween:1,
});

//Подключение кнопок из main__menu-swiper для просмотра слайдера

const btn_menuSwiper = document.querySelector('.menu-swiper').swiper;

document.querySelector('.swiper__button-prev').addEventListener("click", () =>{
    btn_menuSwiper.slidePrev();
});

document.querySelector('.swiper__button-next').addEventListener("click", () =>{
    btn_menuSwiper.slideNext();
});



//menu__weeky-swiper

const weeklySwiper = new Swiper(".main__weekly-swiper",{
   direction:'horizontal',
    loop:true,
    slidesPerView:'auto',
    spaceBetween:40,
})
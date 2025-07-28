
//menu__weeky-swiper

const weeklySwiper = new Swiper(".main__weekly-swiper",{
    direction:'horizontal',
    loop:true,
    slidesPerView:4.5,
    spaceBetween:40,
    centeredSlides:true,
    allowTouchMove:false,
});

const thisWeeklySwiper = document.querySelector(".main__weekly-swiper").swiper;

//Подключение кнопок из weekly-swiper для просмотра слайдера

document.querySelector(".weekly__button-prev").addEventListener("click", () =>{
    thisWeeklySwiper.slidePrev();
});

document.querySelector(".weekly__button-next").addEventListener("click", () =>{
    thisWeeklySwiper.slideNext();
});

// Отсчет времени на каждом слайде (slide)

function randomInteger(min, max) {
 
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const weeklyCards = document.querySelectorAll(".weekly-card");

weeklyCards.forEach((el) => {

    const elHtmlTimer = el.querySelector(".weekly-card__time-content");
    let timer = randomInteger(10000, 86000); 

    setInterval( () =>{
        let hours = Math.floor(timer / 3600);
        let seconds = timer % 3600;

        let minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;

        elHtmlTimer.textContent = `${hours < 10 ? "0"+hours : hours}h
                                   ${minutes < 10 ? "0"+minutes  : minutes }m
                                   ${seconds < 10 ? "0"+seconds : seconds}s`;
        timer --;
    }, 1000);
});

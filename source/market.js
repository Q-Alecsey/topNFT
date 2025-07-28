
//connect time handler to MarketPlace

const marketCards = document.querySelectorAll(".market-card__time-content");

marketCards.forEach((el) => {

    let timer = randomInteger(10000, 86000); 

    setInterval( () =>{
        let hours = Math.floor(timer / 3600);
        let seconds = timer % 3600;

        let minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;

        el.textContent = `${hours < 10 ? "0"+hours : hours}h
                                   ${minutes < 10 ? "0"+minutes  : minutes }m
                                   ${seconds < 10 ? "0"+seconds : seconds}s`;
        timer --;
    }, 1000);
});
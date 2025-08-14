
import {Main} from "./main-swiper.js";
import {answersToQuestions, changeTextOfDiff} from "./questions.js";
import {settingPopUpMenu} from "./header.js";
import {addingGrowth, centerAlignment} from "./topCollections.js";
 
Main();

answersToQuestions();

settingPopUpMenu();

addingGrowth();
centerAlignment(); 

function moveInnerCollector(){
    let result = 0;
    let currentWidth = document.documentElement.clientWidth;   
    
    switch (true) {

        case currentWidth <= 1250:
            result = 0;
            break
        
        case 1250 < currentWidth && currentWidth < 1700:
            result = pForWindow * (currentWidth - 1250);
            break;

        case currentWidth >= 1700:
            result = 220;
            break;
    }
    
    innerCollectorImage.style.transform = `translateX(${result}px)`;
}

//resizing a picture (InnerCollector)

const innerCollectorImage = document.querySelector(".innerCollector__image");
const pForWindow = 0.488888;

//

window.addEventListener("resize", () =>{
    moveInnerCollector();

    addingGrowth();
    centerAlignment();
    
    changeTextOfDiff();
})

window.dispatchEvent(new Event("resize"));





export function settingPopUpMenu(){

    const burgerMenu = document.querySelector(".header__burger-menu");
    const popupButton = document.querySelector(".popup-menu__button");

    const popupMenu = document.querySelector(".popup-menu");

    burgerMenu.addEventListener("click", () => {
        popupMenu.classList.add("popup-menu--actived");        
    });

    popupMenu.addEventListener("click", () => {
        popupMenu.classList.remove("popup-menu--actived");
    });
}
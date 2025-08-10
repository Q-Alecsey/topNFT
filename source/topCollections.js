

export function addingGrowth() {

    if (window.screen.width > 480) return;

    const topcVolumes = document.querySelectorAll(".topC__volume");

    topcVolumes.forEach(item =>{
       
        const growthPer24 = document.createElement("h3");

        growthPer24.textContent = item.nextElementSibling.textContent;
        growthPer24.classList.add("growthPer24");

        console.log(growthPer24);
        

        item.appendChild(growthPer24);
    });
}

export function centerAlignment(){

    const per24Items = document.querySelectorAll(".topC__volume");

    per24Items.forEach( item =>{
        item.style.textAlign = "center";
    })

    const subtitleVolume = document.querySelectorAll(".topC__table-subtitle")[1];

    subtitleVolume.style.textAlign = "center";
}




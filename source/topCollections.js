

export function addingGrowth() {

    const topcVolumes = document.querySelectorAll(".topC__volume");

    if (window.screen.width > 480){

        document.querySelectorAll(".growthPer24").forEach(item =>{            
            item.remove();
        });

        return;
    };

    topcVolumes.forEach(item =>{

        if (item.querySelector(".growthPer24") === null){
       
            const growthPer24 = document.createElement("h3");

            growthPer24.textContent = item.nextElementSibling.textContent;
            growthPer24.classList.add("growthPer24");        

            item.appendChild(growthPer24);
        }
    });
}

export function centerAlignment(){

    const per24Items = document.querySelectorAll(".topC__volume");
    const subtitleVolume = document.querySelectorAll(".topC__table-subtitle")[1];

    if (window.screen.width > 480) {

        per24Items.forEach( item =>{
            item.classList.remove('addCenterAlignment');
        })

        subtitleVolume.classList.remove("addCenterAlignment");

        return;
    }

    per24Items.forEach( item =>{
        item.classList.add('addCenterAlignment');
    })

    subtitleVolume.classList.add('addCenterAlignment');
}




const select = document.querySelector('.select_streets');
const options = select.querySelectorAll('option');

const select_buildings = document.querySelector('.select_buildings');
const building_options = select_buildings.querySelectorAll('option');

const streets = document.querySelectorAll(".street");
const buildings = document.querySelectorAll("div.map i.fas");
const mapaSzadek = document.querySelector(".mapnorth");
const streetsSzadek = document.querySelector(".mapnorth_top");


function handleSelectStreets() {
//    const select = document.querySelector('.select_streets');
//    const options = select.querySelectorAll('option');
   options.forEach(option => {
       if(option.selected) {
           streets.forEach(street => {
               street.classList.remove('visible');
               street.classList.remove('visibleSz');
                    if(street.classList.contains(`${option.value}`)) {
                        mapaSzadek.classList.remove('center');
                        streetsSzadek.classList.remove('center');
                        // buildings.forEach(building => {
                        //     building.classList.remove('visible2');
                        //     building.style.opacity = '0';
                        // })
                        street.classList.add('visible');
                            if(option.value === "szadek" || option.value === "wygwizdow") {
                            street.classList.add('visibleSz');
                            mapaSzadek.classList.add('center');
                            streetsSzadek.classList.add('center');
                            buildings.forEach(building => {
                                building.classList.remove('visible2');
                                building.style.opacity = '0';
                            })
                            // "wyzerowanie" budynków przy włączeniu map dodatkowych
                            building_options.forEach(option => {
                                option.selected = false;
                                if(option.value === "---") {
                                    option.selected = true;
                                }
                            })
                }
               }
           })
        }
    })
}


// naniesienie kierunków n a mapę główną

function handleSelectBuildings() {
    building_options.forEach(option => {
        if(option.selected) {
            buildings.forEach(building => {
                building.classList.remove('visible2');
                building.style.opacity = '0';
                streets.forEach(street => {
                    if(street.classList.contains('visibleSz')) {
                        street.classList.remove('visibleSz');
                    }
                })
                mapaSzadek.classList.remove('center');
                streetsSzadek.classList.remove('center');
                if(building.classList.contains(`${option.value}`)) {
                    building.classList.add('visible2');
                    building.addEventListener('animationend', function() {
                        building.style.opacity = '1';
                    })
                }
            })
         }
     })
 }

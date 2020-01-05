const select = document.querySelector('.select_streets');
const options = select.querySelectorAll('option');

const select_buildings = document.querySelector('.select_buildings');
const building_options = select_buildings.querySelectorAll('option');

const directions = document.querySelectorAll('div.directions i');
const descriptions = document.querySelectorAll('div.directions p');


const streets = document.querySelectorAll(".street");
const buildings = document.querySelectorAll("div.map i.build");
const mapaSzadek = document.querySelector(".mapnorth");
const streetsSzadek = document.querySelector(".mapnorth_top");


function handleSelectStreets() {
   options.forEach(option => {
       if(option.selected) {
           streets.forEach(street => {
               street.classList.remove('visible');
               street.classList.remove('visibleSz');
                    if(street.classList.contains(`${option.value}`)) {
                        mapaSzadek.classList.remove('center');
                        streetsSzadek.classList.remove('center');
                        directions.forEach(direction => {
                            direction.style.opacity = '1';
                        })
                        descriptions.forEach(description => {
                            description.style.opacity = '1';
                        })
                        street.classList.add('visible');
                            if(option.value === "szadek" || option.value === "wygwizdow") {
                            street.classList.add('visibleSz');
                            mapaSzadek.classList.add('center');
                            streetsSzadek.classList.add('center');
                            buildings.forEach(building => {
                                building.classList.remove('visible2');
                                building.style.opacity = '0';
                            })
                            directions.forEach(direction => {
                                direction.style.opacity = '0';
                            })
                            descriptions.forEach(description => {
                                description.style.opacity = '0';
                            })
                            // "wyzerowanie" selectu budynków przy włączeniu map dodatkowych
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
                if(mapaSzadek.classList.contains('center')) {
                    options.forEach(option => {
                        option.selected = false;
                        if(option.value === "---") {
                            option.selected = true;
                        }
                    })
                }
                mapaSzadek.classList.remove('center');
                streetsSzadek.classList.remove('center');
                directions.forEach(direction => {
                    direction.style.opacity = '1';
                })
                descriptions.forEach(description => {
                    description.style.opacity = '1';
                })
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

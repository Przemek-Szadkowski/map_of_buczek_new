const select = document.querySelector('.select_streets');
const options = select.querySelectorAll('option');

const select_buildings = document.querySelector('.select_buildings');
const building_options = select_buildings.querySelectorAll('option');

const aside = document.querySelector('aside');
const select_buildings_aside = document.querySelector('.select_buildings_aside');
const building_options_aside = select_buildings_aside.querySelectorAll('option');


const directions = document.querySelectorAll('div.directions i');
const descriptions = document.querySelectorAll('div.directions p');


const streets = document.querySelectorAll(".street");
const buildings = document.querySelectorAll("div.map i.build");
const mapaSzadek = document.querySelector(".mapnorth");
const streetsSzadek = document.querySelector(".mapnorth_top");

const szadekStreet = document.querySelector('.szadek');
const wygwizdowStreet = document.querySelector('.wygwizdow');

const buttons = document.querySelectorAll('div button');

//funkcje getElement i getElements
//elementy do osobnego modułu
//funkcje, które dodają lub odejmują jakąś klasę do elementów - w helpersach


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

 function handleSelectBuildingsAside() {
    building_options_aside.forEach(option => {
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
                    buttons.forEach(button => {
                        button.classList.remove("activeButton");
                    })
                }
                mapaSzadek.classList.remove('center');
                streetsSzadek.classList.remove('center');
                szadekStreet.classList.remove('center');
                wygwizdowStreet.classList.remove('center');
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

 function handleButtonClick() {
     buttons.forEach(button => {
         button.classList.remove("activeButton");
     })
     streets.forEach(street => {
        street.classList.remove('visible');
        street.classList.remove('visibleSz');
        mapaSzadek.classList.remove('center');
        streetsSzadek.classList.remove('center');
        szadekStreet.classList.remove('center');
        wygwizdowStreet.classList.remove('center');
        directions.forEach(direction => {
            direction.style.opacity = '1';
        })
        descriptions.forEach(description => {
            description.style.opacity = '1';
        })
     })
     if(this.textContent === "Szadek" || this.textContent === "Wygwizdów") {
        mapaSzadek.classList.add('center');
        streetsSzadek.classList.add('center');
        szadekStreet.classList.add('center');
        wygwizdowStreet.classList.add('center');
        this.classList.add("activeButton");
        buildings.forEach(building => {
            building.classList.remove('visible2');
            building.style.opacity = '0';
        })
        building_options_aside.forEach(option => {
            option.selected = false;
            if(option.value === "---") {
                option.selected = true;
            }
        })
        directions.forEach(direction => {
            direction.style.opacity = '0';
        })
        descriptions.forEach(description => {
            description.style.opacity = '0';
        })
        if(this.textContent === "Szadek") {
            document.querySelector('.szadek').classList.toggle("visibleSz");
            } else if (this.textContent === "Wygwizdów") {
                document.querySelector('.wygwizdow').classList.toggle("visibleSz");
            };
    } else {
    document.querySelector('[data-ulica="' + this.className + '"]').classList.toggle("visible");
    this.classList.add("activeButton");
        }
    };



 buttons.forEach(button => {
     button.addEventListener('click', handleButtonClick);
 });
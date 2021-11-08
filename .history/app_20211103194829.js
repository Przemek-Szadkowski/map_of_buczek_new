import * as elements from './src/elements.js';
import { removeAllSelectedBuildings, toggleDescriptionsAndDirectionsOpacity } from './src/helpers.js';
import { removeCenterClassFromNorthMap, addCenterClassForNorthMap, removeActiveButtonClass } from './src/classListHelpers.js';

//funkcje, które dodają lub odejmują jakąś klasę do elementów - w helpersach
//komentarze
//ogarnąć callback hell???

//event listeners ↓↓↓

elements.buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

elements.selectBuildingsAside.addEventListener('change', handleSelectBuildingsAside);

elements.selectStreets.addEventListener('change', handleSelectStreets);

elements.selectBuildings.addEventListener('change', handleSelectBuildings);

//functions ↓↓↓


function handleSelectStreets() {
   elements.streetOptions.forEach(option => {
       if(option.selected) {
           elements.streets.forEach(street => {
               street.classList.remove('visible');
               street.classList.remove('visibleSz');
                    if(street.classList.contains(`${option.value}`)) {
                        elements.mapaSzadek.classList.remove('center');
                        elements.streetsSzadek.classList.remove('center');

                        toggleDescriptionsAndDirectionsOpacity(true);

                        street.classList.add('visible');
                            if(option.value === "szadek" || option.value === "wygwizdow") {
                                street.classList.add('visibleSz');
                                elements.mapaSzadek.classList.add('center');
                                elements.streetsSzadek.classList.add('center');
                                elements.buildings.forEach(building => {
                                    building.classList.remove('visible2');
                                    building.style.opacity = '0';
                                })

                                toggleDescriptionsAndDirectionsOpacity(false);

                                // reset buliding select when north map is visible ↓↓↓
                                removeAllSelectedBuildings();
                                
                }
               }
           })
        }
    })
}


function handleSelectBuildings() {
    elements.buildingOptions.forEach(option => {
        if(option.selected) {
            elements.buildings.forEach(building => {
                building.classList.remove('visible2');
                building.style.opacity = '0';
                elements.streets.forEach(street => {
                    if(street.classList.contains('visibleSz')) {
                        street.classList.remove('visibleSz');
                    }
                })
                if(elements.mapaSzadek.classList.contains('center')) {
                    elements.streetOptions.forEach(option => {
                        option.selected = false;
                        if(option.value === "---") {
                            option.selected = true;
                        }
                    })
                }
                elements.mapaSzadek.classList.remove('center');
                elements.streetsSzadek.classList.remove('center');
                elements.directions.forEach(direction => {
                    direction.style.opacity = '1';
                })
                elements.descriptions.forEach(description => {
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
    elements.buildingOptionsAside.forEach(option => {
        if(option.selected) {
            elements.buildings.forEach(building => {
                building.classList.remove('visible2');
                building.style.opacity = '0';
                elements.streets.forEach(street => {
                    if(street.classList.contains('visibleSz')) {
                        street.classList.remove('visibleSz');
                    }
                })
                if(elements.mapaSzadek.classList.contains('center')) {
                    // elements.buttons.forEach(button => {
                    //     button.classList.remove("activeButton");
                    // })
                    removeActiveButtonClass();
                }
                
                removeCenterClassFromNorthMap();

                toggleDescriptionsAndDirectionsOpacity(true);

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
     //ten blok usuwa z innych elementów
     elements.buttons.forEach(button => {
         button.classList.remove("activeButton");
     })
     elements.streets.forEach(street => {
        street.classList.remove('visible');
        street.classList.remove('visibleSz');
        
        removeCenterClassFromNorthMap();

        toggleDescriptionsAndDirectionsOpacity(true);
     });

     if(this.textContent.trim() === "Szadek" || this.textContent.trim() === "Wygwizdów") {

        addCenterClassForNorthMap();

        this.classList.add("activeButton");
        elements.buildings.forEach(building => {
            building.classList.remove('visible2');
            building.style.opacity = '0';
        })
        elements.buildingOptionsAside.forEach(option => {
            option.selected = false;
            if(option.value === "---") {
                option.selected = true;
            }
        })
        
        toggleDescriptionsAndDirectionsOpacity(false);

        if(this.textContent.trim() === "Szadek") {
            document.querySelector('.szadek').classList.toggle("visibleSz");
        } else if (this.textContent.trim() === "Wygwizdów") {
            console.log(this);
            document.querySelector('.wygwizdow').classList.toggle("visibleSz");
        };

    } else {
            document.querySelector('[data-ulica="' + this.className + '"]').classList.toggle("visible");
            this.classList.add("activeButton");
        }
    };
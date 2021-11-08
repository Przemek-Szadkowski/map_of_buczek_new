import * as elements from './src/elements.js';
import  { handleButtonClick, handleSelectBuildings, handleSelectStreets, handleSelectBuildingsAside } from './src/handleFunctions.js';
// import { removeAllSelectedBuildings, removeAllSelectedStreets, removeAllSelectedAsideBuildings, toggleDescriptionsAndDirectionsOpacity } from './src/helpers.js';
// import { removeCenterClassFromNorthMap, addCenterClassToNorthMap, removeActiveButtonClass, addVisibleClassToBuilding, removeVisibleClassFromBuilding, removeVisibleClassFromSzadekStreet, removeVisibleClassFromAllStreets } from './src/classListHelpers.js';

//funkcje, które dodają lub odejmują jakąś klasę do elementów - w helpersach
//komentarze
//ogarnąć callback hell???
//te 4 funckje do sobnego modułu

//event listeners ↓↓↓

elements.buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

elements.selectBuildingsAside.addEventListener('change', handleSelectBuildingsAside);

elements.selectStreets.addEventListener('change', handleSelectStreets);

elements.selectBuildings.addEventListener('change', handleSelectBuildings);

//functions ↓↓↓

// function handleSelectStreets() {
//    elements.streetOptions.forEach(option => {
//        if(option.selected) {
//             elements.streets.forEach(street => {
//                 removeVisibleClassFromAllStreets(street);

//                 if(street.classList.contains(`${option.value}`)) {
//                     removeCenterClassFromNorthMap();

//                     toggleDescriptionsAndDirectionsOpacity(true);

//                     street.classList.add('visible');

//                     if(option.value === "szadek" || option.value === "wygwizdow") {
//                         street.classList.add('visibleSz');
//                         addCenterClassToNorthMap();

//                         elements.buildings.forEach(building => {
//                             removeVisibleClassFromBuilding(building);
//                         });

//                         toggleDescriptionsAndDirectionsOpacity(false);

//                         // reset buliding select when north map is visible ↓↓↓
//                         removeAllSelectedBuildings();
                            
//                     };
//                 };
//            });
//         };
//     });
// };

// //te dwie skończone ↓↓↓

// function handleSelectBuildings() {
//     elements.buildingOptions.forEach(option => {
//         if(option.selected) {
//             elements.buildings.forEach(building => {
//                 removeVisibleClassFromBuilding(building);
//                 removeVisibleClassFromSzadekStreet();

//                 removeAllSelectedStreets();

//                 removeCenterClassFromNorthMap();
//                 toggleDescriptionsAndDirectionsOpacity(true);

//                 if(building.classList.contains(`${option.value}`)) {
//                     addVisibleClassToBuilding(building);
//                 };
//             });
//          };
//      });
//  };

//  function handleSelectBuildingsAside() {
//     elements.buildingOptionsAside.forEach(option => {
//         if(option.selected) {
//             elements.buildings.forEach(building => {
//                 removeVisibleClassFromBuilding(building);
//                 removeVisibleClassFromSzadekStreet();

//                 if(elements.mapaSzadek.classList.contains('center')) {
//                     removeActiveButtonClass();
//                 };
                
//                 removeCenterClassFromNorthMap();
//                 toggleDescriptionsAndDirectionsOpacity(true);

//                 if(building.classList.contains(`${option.value}`)) {
//                     addVisibleClassToBuilding(building);
//                 };
//             });
//          };
//      });
//  };

//  function handleButtonClick() {
    
//      removeActiveButtonClass();


//      elements.streets.forEach(street => {
//         removeVisibleClassFromAllStreets(street);
        
//         removeCenterClassFromNorthMap();

//         toggleDescriptionsAndDirectionsOpacity(true);
//      });

//      if(this.textContent.trim() === "Szadek" || this.textContent.trim() === "Wygwizdów") {

//         addCenterClassToNorthMap();

//         this.classList.add("activeButton");

//         elements.buildings.forEach(building => {
//             removeVisibleClassFromBuilding(building);
//         });

//         removeAllSelectedAsideBuildings();
        
//         toggleDescriptionsAndDirectionsOpacity(false);

//         if(this.textContent.trim() === "Szadek") {
//             document.querySelector('.szadek').classList.toggle("visibleSz");
//         } else if (this.textContent.trim() === "Wygwizdów") {
//             document.querySelector('.wygwizdow').classList.toggle("visibleSz");
//         };

//     } else {

//         document.querySelector('[data-ulica="' + this.className + '"]').classList.toggle("visible");
//         this.classList.add("activeButton");

//         };
//     };
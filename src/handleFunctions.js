import * as elements from './elements.js';
import { removeAllSelectedBuildings, removeAllSelectedStreets, removeAllSelectedAsideBuildings, toggleDescriptionsAndDirectionsOpacity } from './helpers.js';
import { removeCenterClassFromNorthMap, addCenterClassToNorthMap, removeActiveButtonClass, addVisibleClassToBuilding, removeVisibleClassFromBuilding, removeVisibleClassFromSzadekStreet, removeVisibleClassFromAllStreets } from './classListHelpers.js';

export function handleSelectStreets() {
    elements.streetOptions.forEach(option => {
        if(option.selected) {
             elements.streets.forEach(street => {
                 removeVisibleClassFromAllStreets(street);
 
                 if(street.classList.contains(`${option.value}`)) {
                     removeCenterClassFromNorthMap();
                     toggleDescriptionsAndDirectionsOpacity(true);
 
                     street.classList.add('visible');
 
                     if(option.value === "szadek" || option.value === "wygwizdow") {
                         street.classList.add('visibleSz');
                         addCenterClassToNorthMap();
 
                         elements.buildings.forEach(building => {
                             removeVisibleClassFromBuilding(building);
                         });
 
                         toggleDescriptionsAndDirectionsOpacity(false);
 
                         // reset buliding select when north map is visible ↓↓↓
                         removeAllSelectedBuildings();
                             
                     };
                 };
            });
         };
     });
 };
 
 
export function handleSelectBuildings() {
     elements.buildingOptions.forEach(option => {
         if(option.selected) {
             elements.buildings.forEach(building => {
                 removeVisibleClassFromBuilding(building);
                 removeVisibleClassFromSzadekStreet();
 
                 removeAllSelectedStreets();
 
                 removeCenterClassFromNorthMap();
                 toggleDescriptionsAndDirectionsOpacity(true);
 
                 if(building.classList.contains(`${option.value}`)) {
                     addVisibleClassToBuilding(building);
                 };
             });
          };
      });
  };
 
export function handleSelectBuildingsAside() {
     elements.buildingOptionsAside.forEach(option => {
         if(option.selected) {
             elements.buildings.forEach(building => {
                 removeVisibleClassFromBuilding(building);
                 removeVisibleClassFromSzadekStreet();
 
                 if(elements.mapaSzadek.classList.contains('center')) {
                     removeActiveButtonClass();
                 };
                 
                 removeCenterClassFromNorthMap();
                 toggleDescriptionsAndDirectionsOpacity(true);
 
                 if(building.classList.contains(`${option.value}`)) {
                     addVisibleClassToBuilding(building);
                 };
             });
          };
      });
  };
 
export function handleButtonClick() {
      removeActiveButtonClass();
 
      elements.streets.forEach(street => {
         removeVisibleClassFromAllStreets(street);
         removeCenterClassFromNorthMap();
         toggleDescriptionsAndDirectionsOpacity(true);
      });
 
      //part to handle north map

      if(this.textContent.trim() === "Szadek" || this.textContent.trim() === "Wygwizdów") {
         addCenterClassToNorthMap();
         this.classList.add("activeButton");
 
         elements.buildings.forEach(building => {
             removeVisibleClassFromBuilding(building);
         });
 
         removeAllSelectedAsideBuildings();
         toggleDescriptionsAndDirectionsOpacity(false);
 
         if(this.textContent.trim() === "Szadek") {
             document.querySelector('.szadek').classList.toggle("visibleSz");
            } else if (this.textContent.trim() === "Wygwizdów") {
                document.querySelector('.wygwizdow').classList.toggle("visibleSz");
            };
 
     } else {
         //part to handle all streets without streets on north map
         
         document.querySelector('[data-ulica="' + this.className + '"]').classList.toggle("visible");
         this.classList.add("activeButton");
         };
     };
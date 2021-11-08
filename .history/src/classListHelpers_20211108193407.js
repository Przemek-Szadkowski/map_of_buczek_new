import * as elements from './elements.js';

//functions to control adding and removing classes to HTML elements ↓↓↓

export const removeCenterClassFromNorthMap = () => {
    elements.mapaSzadek.classList.remove('center');
    elements.streetsSzadek.classList.remove('center');
    elements.szadekStreet.classList.remove('center');
    elements.wygwizdowStreet.classList.remove('center');
};

export const addCenterClassToNorthMap = () => {
    elements.mapaSzadek.classList.add('center');
    elements.streetsSzadek.classList.add('center');
    elements.szadekStreet.classList.add('center');
    elements.wygwizdowStreet.classList.add('center');
};

export const removeActiveButtonClass = () => {
    elements.buttons.forEach(button => {
        button.classList.remove("activeButton");
    });
};

export const removeVisibleClassFromSzadekStreet = () => {
    elements.streets.forEach(street => {
        if(street.classList.contains('visibleSz')) {
            street.classList.remove('visibleSz');
        }
    });
};

export const removeVisibleClassFromAllStreets = street => {
    street.classList.remove('visible');
    street.classList.remove('visibleSz');
};


export const removeVisibleClassFromBuilding = building => {
    building.classList.remove('visible2');
    building.style.opacity = '0';
};

export const addVisibleClassToBuilding = building => {
    building.classList.add('visible2');
    building.addEventListener('animationend', function() {
        building.style.opacity = '1';
    })
};
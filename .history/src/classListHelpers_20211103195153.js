import * as elements from './elements.js';

export const removeCenterClassFromNorthMap = () => {
    elements.mapaSzadek.classList.remove('center');
    elements.streetsSzadek.classList.remove('center');
    elements.szadekStreet.classList.remove('center');
    elements.wygwizdowStreet.classList.remove('center');
};

export const addCenterClassForNorthMap = () => {
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
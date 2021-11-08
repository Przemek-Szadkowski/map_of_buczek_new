import * as elements from './elements.js';

export const removeCenterClassFromNorthMap = () => {
    elements.mapaSzadek.classList.remove('center');
    elements.streetsSzadek.classList.remove('center');
    elements.szadekStreet.classList.remove('center');
    elements.wygwizdowStreet.classList.remove('center');
}
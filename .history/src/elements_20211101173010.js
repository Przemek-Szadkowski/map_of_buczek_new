import * as constants from './constants';
import { getElement, getElementsInParentsElement } from './helpers';

export const selectStreets = getElement(constants.SELECT_STREETS_SELECTOR);
export const streetOptions = getElementsInParentsElement(constants.OPTIONS_SELECTOR, selectStreets);
export const selectBuildings = getElement(constants.SELECT_BUILDINGS_SELECTOR);
export const buildingOptions = getElementsInParentsElement(constants.OPTIONS_SELECTOR, selectBuildings);
export const aside = getElement(constants.ASIDE_BUILDINGS_SELECTOR);
export const selectBuildingsAside = document.querySelector('.select_buildings_aside');
export const buildingOptionsAside = getElementsInParentsElement(constants.OPTIONS_SELECTOR, selectBuildingsAside);
export const directions = getElementsInParentsElement(constants.DIRECTIONS_SELECTOR);
export const descriptions = getElementsInParentsElement(constants.DESCRIPTIONS_SELECTOR);
export const streets = getElementsInParentsElement(constants.STREETS_SELECTOR);
export const buildings = getElementsInParentsElement(constants.BUILDINGS_SELECTOR);





const mapaSzadek = document.querySelector(".mapnorth");
const streetsSzadek = document.querySelector(".mapnorth_top");

const szadekStreet = document.querySelector('.szadek');
const wygwizdowStreet = document.querySelector('.wygwizdow');

const buttons = document.querySelectorAll('div button');
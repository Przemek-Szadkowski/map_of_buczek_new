import * as constants from './constants.js';
import { getElement, getElementsInParentsElement } from './helpers.js';

export const selectStreets = getElement(constants.SELECT_STREETS_SELECTOR);
export const streetOptions = getElementsInParentsElement(constants.OPTIONS_SELECTOR, selectStreets);
export const selectBuildings = getElement(constants.SELECT_BUILDINGS_SELECTOR);
export const buildingOptions = getElementsInParentsElement(constants.OPTIONS_SELECTOR, selectBuildings);
export const aside = getElement(constants.ASIDE_BUILDINGS_SELECTOR);
export const selectBuildingsAside = getElement(constants.SELECT_ASIDE_BUILDINGS_SELECTOR);
export const buildingOptionsAside = getElementsInParentsElement(constants.OPTIONS_SELECTOR, selectBuildingsAside);
export const directions = getElementsInParentsElement(constants.DIRECTIONS_SELECTOR);
export const descriptions = getElementsInParentsElement(constants.DESCRIPTIONS_SELECTOR);
export const streets = getElementsInParentsElement(constants.STREETS_SELECTOR);
export const buildings = getElementsInParentsElement(constants.BUILDINGS_SELECTOR);
export const mapaSzadek = getElement(constants.MAP_OF_SZADEK_SELECTOR);
export const streetsSzadek = getElement(constants.STREETS_OF_SZADEK_SELECTOR);
export const szadekStreet = getElement(constants.SZADEK_STREET_SELECTOR);
export const wygwizdowStreet = getElement(constants.WYGWIZDOW_STREET_SELECTOR);
export const buttons = getElementsInParentsElement(constants.BUTTONS_SELECTOR);







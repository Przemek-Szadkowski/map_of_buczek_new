import * as constants from './constants';
import { getElement, getElementsInParentsElement } from './helpers';

export const selectStreets = getElement(constants.SELECT_STREETS_SELECTOR);
export const streetOptions = getElementsInParentsElement(selectStreets, constants.OPTIONS_SELECTOR);
export const selectBuildings = getElement(constants.SELECT_BUILDINGS_SELECTOR);
export const buildingOptions = getElementsInParentsElement(selectBuildings, constants.OPTIONS_SELECTOR);
export const aside = getElement(constants.ASIDE_BUILDINGS_SELECTOR);
export const selectBuildingsAside = document.querySelector('.select_buildings_aside');





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
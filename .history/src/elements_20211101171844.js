import * as constants from './constants';
import { getElement, getElementsInParentsElement } from './helpers';

export const selectStreets = getElement(constants.SELECT_STREETS_SELECTOR);
const options = select.querySelectorAll('option');




const select_buildings = document.querySelector('.select_buildings');
const building_options = select_buildings.querySelectorAll('option');

const aside = document.querySelector('.aside_buildings');
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
import { buildingOptions } from './elements.js';

//function to get and return one single element ↓↓↓

export const getElement = (selector) => {
    const element = document.querySelector(selector);

    if(!element) throw new Error(`Element not found! Element selector: ${selector}`);

    return element;
};

//function to get and return elements in groups ↓↓↓

export const getElementsInParentsElement = (selector, parentElement = document) => {
    const elements = parentElement.querySelectorAll(selector);

    if(!elements) throw new Error(`Elements not found! Elements selector: ${selector}`);

    return elements;
};

export function removeAllSelectedBuildings() {
    buildingOptions.forEach(option => {
        option.selected = false;
        if(option.value === "---") {
            option.selected = true;
        }
    })
}
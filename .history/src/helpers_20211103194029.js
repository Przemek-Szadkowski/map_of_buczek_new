import * as elements from './elements.js';

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

export const removeAllSelectedBuildings = () => {
    elements.buildingOptions.forEach(option => {
        option.selected = false;
        if(option.value === "---") {
            option.selected = true;
        }
    })
};

export const toggleOpacity = (bool) => {
    elements.directions.forEach(direction => {
        direction.style.opacity = bool ? '1' : '0';
    })
    elements.descriptions.forEach(description => {
        description.style.opacity = bool ? '1' : '0';
    })
}
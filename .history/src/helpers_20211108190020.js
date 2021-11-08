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

//function to reset all selected buildings ↓↓↓

export const removeAllSelectedBuildings = () => {
    elements.buildingOptions.forEach(option => {
        option.selected = false;
        if(option.value === "---") {
            option.selected = true;
        };
    });
};

//function to reset all selected buildings in aside select input ↓↓↓

export const removeAllSelectedAsideBuildings = () => {
    elements.buildingOptionsAside.forEach(option => {
        option.selected = false;
        if(option.value === "---") {
            option.selected = true;
        };
    });
};

//function to reset all selected streets ↓↓↓

export const removeAllSelectedStreets = () => {
    elements.streetOptions.forEach(option => {
        option.selected = false;
        if(option.value === "---") {
            option.selected = true;
        };
    });
};

//function to toggle description and directions opacity when north map is visible or not ↓↓↓

export const toggleDescriptionsAndDirectionsOpacity = (bool) => {
    elements.directions.forEach(direction => {
        direction.style.opacity = bool ? '1' : '0';
    });
    elements.descriptions.forEach(description => {
        description.style.opacity = bool ? '1' : '0';
    });
}
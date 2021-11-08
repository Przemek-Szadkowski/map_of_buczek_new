//function to get and return one single element ↓↓↓

export const getElement = (selector) => {
    const element = document.querySelector(selector);

    if(!element) throw new Error(`Element not found! Element selector: ${selector}`);

    return element;
};

//function to get and return elements in groups ↓↓↓

export const getElementsInParentsElement = (parentElement = document, selector) => {
    const elements = parentElement.querySelectorAll(selector);

    if(!elements) throw new Error(`Elements not found! Elements selector: ${selector}`);

    return elements;
};
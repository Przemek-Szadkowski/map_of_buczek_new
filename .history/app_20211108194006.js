import * as elements from './src/elements.js';
import  { handleButtonClick, handleSelectBuildings, handleSelectStreets, handleSelectBuildingsAside } from './src/handleFunctions.js';

//event listeners ↓↓↓

elements.buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

elements.selectBuildingsAside.addEventListener('change', handleSelectBuildingsAside);

elements.selectStreets.addEventListener('change', handleSelectStreets);

elements.selectBuildings.addEventListener('change', handleSelectBuildings);
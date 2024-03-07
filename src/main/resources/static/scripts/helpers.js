const getElementById = (elementId) => document.getElementById(elementId);
const addClassAttribute = (element, attribute) => element.classList.add(attribute);
const removeClassAttribute = (element, attribute) => element.classList.remove(attribute);

export {
    getElementById,
    addClassAttribute,
    removeClassAttribute,
}
// Function to change text content
function changeText() {
    const textElement = document.getElementById('changeable-text');
    const currentText = textElement.textContent;
    textElement.textContent = currentText === 'This text will change when you click the button below.' 
        ? 'Text has been changed successfully!' 
        : 'This text will change when you click the button below.';
}

// Function to modify CSS styles
function changeStyle() {
    const styleElement = document.getElementById('style-demo');
    const currentColor = styleElement.style.color;
    
    if (currentColor === 'red') {
        styleElement.style.color = 'black';
        styleElement.style.fontSize = '16px';
        styleElement.style.fontWeight = 'normal';
    } else {
        styleElement.style.color = 'red';
        styleElement.style.fontSize = '24px';
        styleElement.style.fontWeight = 'bold';
    }
}

// Function to add a new element
function addElement() {
    const container = document.getElementById('element-container');
    const newElement = document.createElement('p');
    newElement.textContent = 'New element added at ' + new Date().toLocaleTimeString();
    newElement.className = 'dynamic-element';
    container.appendChild(newElement);
}

// Function to remove the last added element
function removeElement() {
    const container = document.getElementById('element-container');
    const elements = container.getElementsByClassName('dynamic-element');
    if (elements.length > 0) {
        container.removeChild(elements[elements.length - 1]);
    }
}

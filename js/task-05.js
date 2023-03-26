const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
    const nameValue = event.target.value.trim();
    
    if (nameValue) {
        outputName.textContent = nameValue;
    } else {
        outputName.textContent = 'Anonymous';
    }
});
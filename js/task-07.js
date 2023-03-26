const controlSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

controlSize.addEventListener("input", function () {
    text.style.fontSize = `${controlSize.value}px`
})
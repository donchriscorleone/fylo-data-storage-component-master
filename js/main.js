const range = document.getElementById('range');
const storageLeft = document.querySelector('.storage-left');
const usedStorage = document.querySelector('span.used-storage');

window.addEventListener('load',(e) => {
    calculateStorage(range.value);
})

range.addEventListener('input', (e) => {
    // range.style.width = range.value / 10 + 'px'
    calculateStorage(range.value);
})

function calculateStorage(value) {
    storageLeft.innerHTML = 1000 - value;
    usedStorage.innerHTML = value + ' GB';
}
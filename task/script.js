const displayButton = document.getElementById('display');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let input = document.getElementById('input');


clearButton.addEventListener("click", function() {
    output.innerHTML = "";
});

displayButton.addEventListener("click", function() {
    output.innerHTML = input.value;
    input.value = null;
});
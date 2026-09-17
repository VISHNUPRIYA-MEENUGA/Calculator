let display = document.getElementById("display");
function clearDisplay() {
    display.value = "";
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    display.value = eval(display.value);
}
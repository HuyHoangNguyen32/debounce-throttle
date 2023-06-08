import debounce from "lodash.debounce";
import throttle from "lodash.throttle";

const debounceInput = document.getElementById("debounce");
const debounceText = document.querySelector(".debounceText");
debounceInput.addEventListener(
  "input",
  debounce((e) => {
    debounceText.textContent = e.target.value;
    console.log(e.target.value);
  }, 1000)
);

const throttleInput = document.getElementById('throttle');
const throttleText = document.querySelector('.throttleText');
throttleInput.addEventListener('input', throttle((e) => {
  throttleText.textContent = e.target.value;
  console.log(e.target.value)
}, 5000))
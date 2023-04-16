import Typed from "typed.js";

var type_home = document.querySelector(".text-blink");

if (type_home) {
    var typed = new Typed(type_home, {
        strings: ["Developer.", "Designer.", "Photographer."],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
    });
}
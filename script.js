// zmienne dotyczace szadku i wygwizdowa na osobnych planszach

const szadekSt = document.querySelector(".ulszadek");
const ulicaSza = document.querySelector(".szadek");
const wygwizdowSt = document.querySelector(".ulwygwizdow");
const ulicaWyg = document.querySelector(".wygwizdow");
const mapaSzadek = document.querySelector(".mapnorth");
const streetsSzadek = document.querySelector(".mapnorth_top");
var centerPositionofSzadek = false;
var centerPositionofWygwizdow = false;

const btnSzadek = document.querySelector("button.ulszadek");
const btnWygwizdow = document.querySelector("button.ulwygwizdow");

// zmienne funkcji wyczysc

const clearButton = document.querySelector(".clear");
const buttons = document.querySelectorAll(".button");
const streets = document.querySelectorAll(".street");
const buildings = document.querySelectorAll("div.map i.fas");
const mainStreets = document.querySelectorAll(".mainmap");

//warunki działania ulicy szadek i wygwizdów, by sie nie wyłączały

szadekSt.addEventListener("click", function () {
    if (centerPositionofWygwizdow == false) {
        mapaSzadek.classList.toggle("center");
        ulicaSza.classList.toggle("center");
        ulicaWyg.classList.toggle("center");
        streetsSzadek.classList.toggle("center");
        ulicaSza.classList.toggle("visibleSz");
        szadekSt.classList.toggle("green");
        if (centerPositionofSzadek == false) {
            centerPositionofSzadek = true;
        } else if (centerPositionofSzadek == true) {
            centerPositionofSzadek = false;
            ulicaSza.classList.remove("visibleSz");
            szadekSt.classList.remove("green");
            wygwizdowSt.classList.remove("green");
            ulicaWyg.classList.remove("visibleSz");
            ulicaSza.classList.remove("center");
            ulicaWyg.classList.remove("center");
        }
    } else if (centerPositionofWygwizdow == true) {
        ulicaSza.classList.toggle("visibleSz");
        szadekSt.classList.toggle("green");
    };
});

wygwizdowSt.addEventListener("click", function () {
    if (centerPositionofSzadek == false) {
        mapaSzadek.classList.toggle("center");
        streetsSzadek.classList.toggle("center");
        wygwizdowSt.classList.toggle("green");
        ulicaWyg.classList.toggle("visibleSz");
        ulicaSza.classList.toggle("center");
        ulicaWyg.classList.toggle("center");
        if (centerPositionofWygwizdow == false) {
            centerPositionofWygwizdow = true;
        } else if (centerPositionofWygwizdow == true) {
            centerPositionofWygwizdow = false;
            wygwizdowSt.classList.remove("green");
            ulicaWyg.classList.remove("visibleSz");
            ulicaSza.classList.remove("visibleSz");
            szadekSt.classList.remove("green");
            ulicaSza.classList.remove("center");
            ulicaWyg.classList.remove("center");
        }
    } else if (centerPositionofSzadek == true) {
        ulicaWyg.classList.toggle("visibleSz");
        wygwizdowSt.classList.toggle("green");
    };
});

// przelaczenie na inna ulice po wcisnieciu przycisku na szadku i wygwizdowie

mainStreets.forEach(function (mainStreet) {
    mainStreet.addEventListener("click", function () {
        mapaSzadek.classList.remove("center");
        streetsSzadek.classList.remove("center");
        wygwizdowSt.classList.remove("green");
        ulicaWyg.classList.remove("visibleSz");
        ulicaSza.classList.remove("visibleSz");
        szadekSt.classList.remove("green");
        ulicaSza.classList.remove("center");
        ulicaWyg.classList.remove("center");
        centerPositionofSzadek = false;
        centerPositionofWygwizdow = false;
    })
});

// nasłuchiwanie na buttony i ich działanie

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        document.querySelector('[data-ulica="' + this.className + '"]').classList.toggle("visible");
        if (this.getAttribute("id") != "green") {
            this.setAttribute("id", "green");
        } else {
            this.removeAttribute("id", "green");
        }
    })
});

// dzialanie przycisku wyczyść

clearButton.addEventListener("click", function () {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute("id", "green");
        buttons[i].classList.remove("green");
    }
    for (let i = 0; i < streets.length; i++) {
        streets[i].classList.remove("visible");
    }
    for (let i = 0; i < buildings.length; i++) {
        buildings[i].classList.remove("visible2");
    }
    centerPositionofSzadek = false;
    centerPositionofWygwizdow = false;
    mapaSzadek.classList.remove("center");
    streetsSzadek.classList.remove("center");
    ulicaSza.classList.remove("visibleSz");
    szadekSt.classList.remove("green");
    wygwizdowSt.classList.remove("green");
    ulicaWyg.classList.remove("visibleSz");
    ulicaSza.classList.remove("center");
    ulicaWyg.classList.remove("center");
})


// dodać responsywność
// zmienić jquery buttonów budynków na js
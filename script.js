let scrollpos = function(){return window.scrollY};

//Siden er loadet
window.addEventListener("load", loadside);

function loadside() {
    console.log("loadsiden");

document.querySelector("#h1_container").classList.add("fixed");
    document.querySelector("#section_one").classList.add("fixed_bg");
    }

window.addEventListener('scroll',function() {

    scrollpos = window.scrollY;

    if(scrollpos >400) {
        addFixed();
    }

    else if(scrollpos <400) {
        removeFixed();
    }

});

function addFixed() {
    document.querySelector("#h1_container").classList.remove("fixed");
    document.querySelector("#h1_container").classList.add("absolute");
    console.log("add fixed");

}

function removeFixed() {
    document.querySelector("#h1_container").classList.remove("absolute");
    document.querySelector("#h1_container").classList.add("fixed");
    console.log("stop fixed");
}

window.addEventListener('scroll',function() {

    scrollpos = window.scrollY;

    if(scrollpos >110) {
        removeFixedBG();
    }

    else if(scrollpos <110) {
        addFixedBG();
    }

});

function removeFixedBG() {
    document.querySelector("#section_one").classList.remove("fixed_bg");
    document.querySelector("#section_one").classList.add("absolute_bg");
}
function addFixedBG() {
    document.querySelector("#section_one").classList.remove("absolute_bg");
    document.querySelector("#section_one").classList.add("fixed_bg");
}

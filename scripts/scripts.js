let hamb = document.getElementById("h-button");
let activeHamburger = false;
hamb.addEventListener("click", function() {
    if (!activeHamburger){
        document.getElementById("h-menu").style.display = "block";
        activeHamburger = true;
    }
    else {
        document.getElementById("h-menu").style.display = "none";
        activeHamburger = false;
    }
});

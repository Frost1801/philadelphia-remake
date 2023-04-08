let hamb = document.getElementById("h-button");
let activHamburger = false;
hamb.addEventListener("click", function() {
    if (!activHamburger){
        document.getElementById("h-menu").style.display = "block";
        activHamburger = true;
    }
    else {
        document.getElementById("h-menu").style.display = "none";
        activHamburger = false;
    }
});

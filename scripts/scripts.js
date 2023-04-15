let hamb = document.getElementById("h-button");
let search = document.getElementById("eyeglass");
let activeHamburger = false;
let activeSearchbar = false;

hamb.addEventListener("click", function() {
    if (!activeHamburger){
        document.getElementById("d-menu").style.display = "block";
        activeHamburger = true;
    }
    else {
        document.getElementById("d-menu").style.display = "none";
        activeHamburger = false;
    }
});

search.addEventListener("click", function() {
    if (!activeSearchbar){
        document.getElementById("search-bar").style.display = "inline";
        activeSearchbar = true;
    }
    else {
        document.getElementById("search-bar").style.display = "none";
        activeSearchbar = false;
    }
});
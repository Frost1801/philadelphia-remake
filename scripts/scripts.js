let hamb = document.getElementById("h-button");
let search = document.getElementById("eyeglass");
let date = document.getElementById("date");
let activeHamburger = false;
let activeSearchbar = false;

window.onload = function() {
    let today = new Date();
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = daysOfWeek[today.getDay()];
    let month = monthsOfYear[today.getMonth()];
    let date = today.getDate();
    let year = today.getFullYear();

    let dateString = day + ", " + month + " " + date + ", " + year;

    document.getElementById("date").innerHTML = dateString;
}


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
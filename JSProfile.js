
const i = document.getElementById("ulModules");
const x = document.getElementById("ulPersonalInfo");

// This function is used to reveal or hide the list on the right //
function showlist1() {
    if (i.style.display !== "block") {
        i.style.display = "block";
    }else {
        i.style.display = "none";
    }
}
// this function is used to reveal or hide the list on the left //
function showlist2() {
    if (x.style.display !== "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//-- Testing to see if TJ works -- //
 console.log("JS works!");
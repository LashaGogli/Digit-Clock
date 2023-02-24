
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let ampmdiv = document.querySelector(".ampmdiv");

let ampmP = document.createElement("p");
ampmdiv.appendChild(ampmP);



let hoursP = document.createElement("p");
hoursP.classList.add('myclass');
let minutesP = document.createElement("p");
minutesP.classList.add('myclass');
let secondsP = document.createElement("p");
secondsP.classList.add('myclass');


hours.appendChild(hoursP);
minutes.appendChild(minutesP);
seconds.appendChild(secondsP);


let hourscount = 0;
let minutescount = 0;
let secondscount = 0;

setInterval(function () {
    if (hourscount == 24) {
        hourscount = 0;
      
    }
    if (secondscount == 60) {
        secondscount = 0;
        minutescount++;
    }
    if (minutescount == 60) {
        minutescount = 0;
        hourscount++;
    }
    if (secondscount < 10) {
        secondsP.innerHTML = "0" + secondscount;

    } else {
        secondsP.innerHTML = secondscount;
    }
    if (minutescount < 10) {
        minutesP.innerHTML = "0" + minutescount;

    } else {
        minutesP.innerHTML = minutescount;
    }
    if (hourscount < 10) {
        hoursP.innerHTML = "0" + hourscount;

    } else {
        hoursP.innerHTML = hourscount;
    }
    if (hourscount > 12) {
        ampmP.innerHTML="PM";

    } else {
        ampmP.innerHTML="AM";
    }
    secondscount++;
}, 1000);

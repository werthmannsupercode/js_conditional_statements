let age = document.getElementById('age');

function adult() {
    if (age.value > 17) {
        console.log("true");
        alert("Gratulation! Du bist volljährig 🍻.")
    }
    else if (age.value <= 17) {
        console.log("false");
        alert("Leider Pech gehabt. Melde dich wieder, wenn du 18 bist.")
    }
}

let wetter = document.getElementById('wetter');

function weather() {
    if (wetter.value >= 7) {
        alert("Wow.Bei dir ist das Wetter super 🌞.Freut mich!");
    }

    else if (wetter.value <= 8 && wetter.value >= 5) {
        alert("Nicht schlecht Herr Specht.Dein Wetter ist gut 🌤.");
    }

    else if (wetter.value <= 6 && wetter.value >= 2) {
        alert("Ooookay. Wenigstens kein Stress heute ins Freibad zu müssen. 🧘🏻‍♀️");
    }

    else if (wetter.value <= 3 && wetter.value >= 0) {
        alert("Schlecht ist eine Frage der Perpektive. Let's dance in the rain 🌧🕺🏻");
    }
}

let alter2 = document.getElementById("alter2");

function greaterThen() {
    event.preventDefault()

    if (alter2.value >= 18) {
        alert('Ja. Du kannst Shisha rauchen');
    }

    else if (alter2.value <= 17) {
        alert('Du darfst noch nicht Shisha rauchen');
    }
}

let label = document.getElementById("label");
let airQuality = document.getElementById("airQuality");
let healthConcern = document.getElementById("healthConcern");
let healthEffect = document.getElementById("healthEffect");
let bgColor = document.getElementById("bgColor");

function checkAirQuality() {
    label.innerHTML = "AQ: " + airQuality.value + "<br>";
    if (airQuality.value >= 0 && airQuality.value <= 50) {
        healthConcern.innerHTML = "Health Concern: Good";
        healthEffect.innerHTML = "Health Effect: Little or no risk";
        bgColor.style.backgroundColor = "green";
    }

    else if (airQuality.value >= 50 && airQuality.value <= 100) {
        healthConcern.innerHTML = "Health Concern: Moderate";
        healthEffect.innerHTML = "Health Effect: Acceptable Quality";
        bgColor.style.backgroundColor = "orange";
    }

    else if (airQuality.value >= 100 && airQuality.value <= 150) {
        healthConcern.innerHTML = "Health Concern: Unhealthy for sensitive groups";
        healthEffect.innerHTML = "Health Effect: Generable publics not likely affected";
        bgColor.style.backgroundColor = "red";
    }
}

let bundeslandInfo = document.getElementById('bundeslandInfo');
let bundeslandInfoErgebnis = document.getElementById('bundeslandInfoErgebnis');

function check() {
    // console.log(bundeslandInfo.value);
    switch (bundeslandInfo.value) {
        case "Bayern":
            bundeslandInfoErgebnis.innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
            break;
        case "Baden-Württemberg":
        case "Badenwürttemberg":
            bundeslandInfoErgebnis.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
        case "Berlin":
            bundeslandInfoErgebnis.innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Brandenburg":
            bundeslandInfoErgebnis.innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "Bremen":
            bundeslandInfoErgebnis.innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hamburg":
            bundeslandInfoErgebnis.innerHTML = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "Hessen":
            bundeslandInfoErgebnis.innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        case "Mecklenburg-Vorpommern":
            bundeslandInfoErgebnis.innerHTML = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
            break;
        case "Niedersachsen":
            bundeslandInfoErgebnis.innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
            break;
        case "Nordrhein-Westfalen":
            bundeslandInfoErgebnis.innerHTML = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
            break;
        case "Rheinland-Pfalz":
            bundeslandInfoErgebnis.innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
            break;
        case "Saarland":
            bundeslandInfoErgebnis.innerHTML = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
            break;
        case "Sachsen":
            bundeslandInfoErgebnis.innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
            break;
        case "Sachsen-Anhalt":
            bundeslandInfoErgebnis.innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
            break;
        case "Schleswig-Holstein":
            bundeslandInfoErgebnis.innerHTML = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
            break;
        case "Thüringen":
            bundeslandInfoErgebnis.innerHTML = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
            break;
        default:
            bundeslandInfoErgebnis.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht."

    }

}

let myform = document.getElementById("myform");
let mylist = document.getElementById("mylist");
let masse = document.getElementById("masse");

function showtxt() {
    switch (mylist.value) {
        case "0":
            masse.innerHTML = "<b>Brief und Postkarte</b><br>L: 10 - 23,5 cm<br>B: 7 - 12,5 cm<br>H: bis 1 cm";
            break;
        case "1":
            masse.innerHTML = "<b>DHL Paket 2 kg</b><br>bis 60 x 30 x 15 cm";
            break;
        case "2":
            masse.innerHTML = "<b>DHL Paket 5 kg</b><br>bis 120 x 60 x 60 cm";
            break;
        case "3":
            masse.innerHTML = "<b>DHL Paket 10 kg</b><br>bis 120 x 60 x 60 cm";
            break;
        default:
            masse.innerHTML = "Wählen Sie ein Feld aus";
    }
}

let sternzeichen = document.getElementById('sternzeichen');
let horoskop = document.getElementById('horoskop');

function showHoroskop() {
    switch (sternzeichen.value) {
        case "1":
            horoskop.innerHTML = "<h3>ARIES:</h3><h4>Mar</h4><p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p><img src='https://www.horoscopedates.com/img/icon_aries.png' alt='Aries'>";
            break;
        case "2":
            horoskop.innerHTML = "<h3>TAURUS:</h3><h4>Apr</h4><p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…</p><img src='https://www.horoscopedates.com/img/icon_taurus.png' alt='Taurus'>";
            break;
        case "3":
            horoskop.innerHTML = "<h3>GEMINI:</h3><h4>May</h4><p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…</p><img src='https://www.horoscopedates.com/img/icon_gemini.png' alt='Gemini'>";
            break;
        case "4":
            horoskop.innerHTML = "<h3>CANCER:</h3><h4>Jun</h4><p>Too many different elements in your life are overlapping with each other right now—and it's your…</p><img src='https://www.horoscopedates.com/img/icon_cancer.png' alt='Cancer'>";
            break;
        case "5":
            horoskop.innerHTML = "<h3>LEO:</h3><h4>Jul</h4><p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…</p><img src='https://www.horoscopedates.com/img/icon_leo.png' alt='Leo'>";
            break;
        case "6":
            horoskop.innerHTML = "<h3>VIRGO:</h3><h4>Aug</h4><p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…</p><img src='https://www.horoscopedates.com/img/icon_virgo.png' alt='Virgo'>";
            break;
        case "7":
            horoskop.innerHTML = "<h3>LIBRA:</h3><h4>Sep</h4><p>Pick a cultural event that's coming up and get some tickets for it today.</p><img src='https://www.horoscopedates.com/img/icon_libra.png' alt='Libra'>";
            break;
        case "8":
            horoskop.innerHTML = "<h3>SCORPIO:</h3><h4>Oct</h4><p>Someone will challenge a belief that you've held for a very long time today—and they will say an…</p><img src='https://www.horoscopedates.com/img/icon_scorpio.png' alt='Skorpio'>";
            break;
        case "9":
            horoskop.innerHTML = "<h3>SAGITTARIUS:</h3><h4>Nov</h4><p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to...</p><img src='https://www.horoscopedates.com/img/icon_sagittarius.png' alt='Sagittarius'>";
            break;
        case "10":
            horoskop.innerHTML = "<h3>CAPRICORN:</h3><h4>Dec</h4><p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity.</p><img src='https://www.horoscopedates.com/img/icon_capricorn.png' alt='Capricorn'>";
            break;
        case "11":
            horoskop.innerHTML = "<h3>AQUARIUS:</h3><h4>Jan</h4><p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…</p><img src='https://www.horoscopedates.com/img/icon_aquarius.png' alt='Aquarius'>";
            break;
        case "12":
            horoskop.innerHTML = "<h3>PISCES:</h3><h4>Feb</h4><p>Communication is very important today—written, spoken, and even nonverbal body language will all…</p><img src='https://www.horoscopedates.com/img/icon_pisces.png' alt='Pisces'>";
            break;
        default:
            horoskop.innerHTML = "Bitte wähle ein Sternzeichen aus."
    }
}


//  
//  
// 
// 
//  
//  
//  
// 
//  
//  
// 
// 
//  
//  
// 
// 

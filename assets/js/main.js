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
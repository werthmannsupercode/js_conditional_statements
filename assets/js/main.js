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
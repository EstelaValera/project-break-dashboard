function updateClock() {
    let now = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = now.toLocaleDateString('es-ES', options);
    date = date.charAt(0).toUpperCase() + date.slice(1);
    
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.getElementById('date').innerText = date;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('second').innerText = second;

    let message = '';
    if (hour >= 0 && hour < 7) {
        message = "¡Buenas noches! Que descanses 🤍";
    } else if (hour >= 7 && hour < 12) {
        message = "¡Buenos días! Un día menos para la jubilación 💪🏻";
    } else if (hour >= 12 && hour < 13) {
        message = "Ánimo, pronto pararás a comer.";
    } else if (hour >= 13 && hour < 15) {
        message = "¡Hora de comer!";
    } else if (hour >= 15 && hour < 17) {
        message = "Venga, último empujón";
    } else if (hour >= 17 && hour < 22) {
        message = "Te mereces un decanso y tiempo para ti 🤞🏻";
    } else {
        message = "Prepárate para el mejor momento del día.. ¡A DORMIR! 😴";
    }

    document.getElementById('message').innerText = message;

}

setInterval(updateClock, 1000);
updateClock();



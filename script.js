// 12/24 format
let twelveFormat = false;

const formatBtn = document.getElementById("formatBtn");

formatBtn.addEventListener("click", () => {
    twelveFormat = !twelveFormat;
    formatBtn.textContent = twelveFormat
        ? "Switch to 24 Hours"
        : "Switch to 12 Hours";
    updatetime();
})

//clock

function updatetime() {
    let now = new Date();

    let date = now.getDate();
    let year = now.getFullYear();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //Greeting

    let currentHour = now.getHours();

    let period = currentHour >= 12 ? "PM" : "AM";

    if (currentHour < 12) {
        greeting.innerText = "Good Morning ☀️";
    }
    else if (currentHour < 17) {
        greeting.innerText = "Good Afternoon 🌤️";
    }
    else {
        greeting.innerText = "Good Evening 🌙";
    }

    hours = currentHour;

    if (twelveFormat) {
        hours = hours % 12 || 12;
    }

    // Date format
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const days = [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday","Sunday" 
    ]

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds} ${twelveFormat ? period : ""}`;
    const dateString = `${days[now.getDay()-1]} ${date} ${months[now.getMonth()]} ${year}`;

    document.getElementById("clock").textContent = timeString;
    document.getElementById("date").textContent = dateString;
}
setInterval(updatetime, 1000);
updatetime();


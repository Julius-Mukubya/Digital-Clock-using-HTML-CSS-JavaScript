function UpdateDate() {
    // Arrays for day and month names
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    // Get the current date
    const fullDate = new Date();
    let day = fullDate.getDay(); // Get day index (0-6)
    let month = fullDate.getMonth(); // Get month index (0-11)

    // Convert index values to actual names
    day = days[day];
    month = months[month];
    const date = fullDate.getDate();
    const year = fullDate.getFullYear();

    // Format and display the date
    const dateString = `${day} ${month} ${date}, ${year}`;
    document.getElementById("date").textContent = dateString;
}

function UpdateClock() {
    // Get the current time
    const date = new Date();
    let hours = date.getHours();
    const meridian = (hours >= 12) ? "PM" : "AM"; // Determine AM/PM

    // Convert to 12-hour format and ensure two-digit format
    hours = ((hours > 12) ? hours - 12 : hours).toString().padStart(2, '0');

    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    // Format and display the time
    const stringTime = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent = stringTime;
}

// Initial update
UpdateClock();
UpdateDate();

// Update the clock every second
setInterval(UpdateClock, 1000);

// Update the date every second (not necessary, but keeps it synced)
setInterval(UpdateDate, 1000);

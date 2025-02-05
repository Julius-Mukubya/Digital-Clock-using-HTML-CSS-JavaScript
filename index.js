function UpdateDate(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const months = [
        "January", "Feburary", "March", "April", "May", "June", "July",
         "August", "September", "October", "November","December"
        ]

    const fullDate = new Date();
    let day = fullDate.getDay();
    let month = fullDate.getMonth();

    day = days[day];
    month = months[month];
    const date = fullDate.getDate();
    const year = fullDate.getFullYear();

    const dateString = `${day} ${month} ${date}, ${year}` 
    document.getElementById("date").textContent = dateString
}




function UpdateClock(){
    const date = new Date();
    let hours = date.getHours();
    const meridian = (hours > 12) ? "PM" : "AM";

    hours = ((hours > 12) ? hours - 12 : hours).toString().padStart(2, 0);

    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);

    const stringTime = `${hours}: ${minutes}: ${seconds} ${meridian}`;

    document.getElementById("clock").textContent = stringTime;
}

UpdateClock();
UpdateDate();

setInterval(UpdateClock, 1000);
setInterval(UpdateDate, 1000);
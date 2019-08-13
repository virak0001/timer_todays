var time = () => {
    let day = new Date();
    // allDay
    let days = day.getDay();
    let allDay = ["Sunday","Monday", "Tuesday", "Wendneday", "Thursday", "Friday", "Saturday"];
    let outputDay = "";
    for(let i = 0; i < allDay.length; i++) {
        switch(days) {
            case i:
                outputDay = allDay[i];
            break;
        } 
    }
    // all month
    let months = day.getMonth();
    let allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let ouptMonth = "";
    for(let i = 0; i < allMonth.length; i++) {
        switch(months) {
            case i:
                ouptMonth = allMonth[i];
            break;
        }
    }
    //all years
    let years = day.getFullYear();
    //date
    let date = day.getDate().toString();
    if(date.length < 2) {
        date = '0' + date;
    }
    //topDate
    let topDate = "";
    switch(day.getDate) {
        case 1:
        case 21:
        case 31:
            topDate = 'st';
        break;
        case 2:
        case 22:
            topDate = 'nd';
        break;
        case 3:
        case 23: 
            topDate = 'rd';
        break;
        default:
            topDate = "th";
    }
    //time
    let hours = (day.getHours()%12).toString();
    if(hours.length < 2) {
        hours = '0' + hours;
    }
    let minutes = day.getMinutes().toString();
    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }
    let second = day.getSeconds().toString();
    if(second.length < 2) {
        second = '0' + second;
    }
    //background
    if(second % 2 == 0) {
        // document.body.style.backgroundColor = "red";
        document.querySelector('h1').style.color ="blue";
    }else {
        // document.body.style.backgroundColor = "green";
        document.querySelector('h1').style.color ="orange";
    }
    //output
    document.querySelector('h1').innerHTML = outputDay + " / " + date + "<sup>" + topDate + "</sup>" + " / " + ouptMonth + " / " + years;
    if( day.getHours()< 12) {
        document.querySelector('h2').innerHTML = hours +":"+minutes +":"+second + "AM";
    }else if(day.getHours() === 12) {
        document.querySelector('h2').innerHTML = day.getHours() +":"+minutes +":"+second + "PM";
    }else 
    document.querySelector('h2').innerHTML = hours +":"+minutes +":"+second + "PM";
} 

time();
setInterval(time, 1000);

var change = () => {
    let hello = document.getElementById("time");
    if(hello.style.color == "teal") {
        hello.style.color = "blue";
    }else {
        hello.style.color = "teal";
    }
}
change();
setInterval(change, 1000);
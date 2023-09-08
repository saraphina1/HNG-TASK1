const dateElement = document.querySelector(".date");
const timeElement = document.querySelector(".time");



function formatDate(date){
    const DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const MONTHS=["January","February","March","April","May","June","July","August","September","October","November","December"]

    return `${DAYS[date.getDay()]}`
}
function formatTime(date){
    const hours12= date.getHours() % 12 || 12;
    const minutes= date.getMinutes();
    const isAM = date.getHours() < 12;

    return `${hours12.toString().padStart(2, "0")}: ${minutes.toString().padStart(2, "0")} ${isAM ? "AM" : "PM"}`;
}

setInterval(()=>{
    const current= new Date();
    dateElement.textContent= formatDate(current);
    timeElement.textContent=formatTime(current);
}, 200);
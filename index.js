const dateElement = document.querySelector(".date");
const timeElement = document.querySelector(".time");

const date= new Date();

const DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const dayOfTheWeek= DAYS[date.getDay()];
dateElement.textContent=dayOfTheWeek;

function currentMillisecond(){
    const now= new Date();
    const todayMilliseconds= Date.now();
    timeElement.textContent= todayMilliseconds;
}

setInterval(currentMillisecond, 1000);



// function formatDate(date){
//     const DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//     return `${DAYS[date.getDay()]}`
// }
// //  function formatTime(date){
// //          const hours12= date.getHours() % 12 || 12;
// //     const minutes= date.getMinutes();
// //      const isAM = date.getHours() < 12;

// //      return `${hours12.toString().padStart(2, "0")}: ${minutes.toString().padStart(2, "0")} ${isAM ? "AM" : "PM"}`;
// //  }

//  function formatTime(){

// let timee= Date.now()
// return timee
// }
// setInterval(()=>{
//     const current= new Date();
    
//     dateElement.textContent= formatDate(current);
//     timeElement.textContent=formatTime(current);
// },1000);
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYerTime = new Date("Jan 1, 2025 00:00:00").getTime();


updateCount();

function updateCount(){
    const now = new Date().getTime();
    const gap = newYerTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap%day)/hour);
    const m = Math.floor((gap%hour)/minute);
    const s = Math.floor((gap%minute)/second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCount,1000);
}
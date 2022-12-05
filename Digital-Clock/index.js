const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm="PM"
  }

  

  hourEl.innerText=h;
  minutesEl.innerText=m;
  secondEl.innerText=s;
  ampmEl, (innerText=ampm);
  setTimeout(()=>{
    updateClock();
  },1000)
}
updateClock();

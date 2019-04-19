const clock = document.querySelector('.clock');
const clockM = document.querySelector('.clock-m');

for (let i = 1; i <= 12; i++) {
  let clockHour = '';
  let clockMin = '';

  clockHour += `<div class="hour-wrap">
  <span class="hour-24">${i+12}</span>
  <span class="line"></span>
  <span class="hour-12">${i}</span>
</div>`;
  clockMin += `<div class="minute-wrap">
<span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span>
</div>`;

  clock.innerHTML += clockHour;
  clockM.innerHTML += clockMin;

}


const secondHand = document.querySelector('.hand-sec');
const minsHand = document.querySelector('.hand-min');
const hourHand = document.querySelector('.hand-hour');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360);
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  console.log(seconds);
  const mins = now.getMinutes();
  const minsDegree = ((mins / 60) * 360);
  minsHand.style.transform = `rotate(${minsDegree}deg)`;
  const hours = now.getHours();
  const hoursDegree = ((hours / 12) * 360);
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
setDate();
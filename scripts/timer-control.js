//timer buttons
let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');

let btnMinusTime = document.querySelector('.minus');
let btnPlusTime = document.querySelector('.plus');
let timerInput = document.querySelector('.timer-input');

//timer display
let timerHour = document.querySelector('.timer-hour');
let timerMinute = document.querySelector('.timer-minute');

let startTime = 30;
timerInput.value = startTime;

function disableBtn() {
  if (timerInput.value <= 5) {
    btnMinusTime.disabled = true;
    startTime = 5;
  }
  if (timerInput.value > 5) {
    btnMinusTime.disabled = false;
  }
}

function refreshTimer() {
  timerInput.value = startTime;

  if (startTime >= 60) {
    timerHour.innerText = `${Math.floor(startTime / 60)} h`;
    timerMinute.innerText = `${startTime % 60 == 0 ? 0 : startTime % 60} min`;
  } else {
    timerHour.innerText = startTime;
    timerMinute.innerText = 'min';
  }
  console.log(startTime);
}

function decrementTimerValue() {
  startTime -= 5;
  disableBtn();
  refreshTimer();
  stopTimer();
}

function incrementTimerValue() {
  disableBtn();
  startTime += 5;
  refreshTimer();
  stopTimer();
}

btnMinusTime.addEventListener('click', decrementTimerValue);

btnPlusTime.addEventListener('click', incrementTimerValue);

let timer;

function startTimer() {
  timer = setInterval(() => {
    startTime -= 1;
    refreshTimer();
    document.querySelector('.display-time').classList.add('active-timer');
    btnStart.disabled = true;
    btnStop.disabled = false;
    if (startTime == 0) {
      stopTimer();
      setTimeout(() => {
        startTime = 30;
        refreshTimer();
      }, 1000);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  document.querySelector('.display-time').classList.remove('active-timer');
  btnStart.disabled = false;
  btnStop.disabled = true;
}

function refreshTimerProgress() {
  let progress = document.querySelector('.progress');

  let progressValue = '';
}

btnStart.addEventListener('click', startTimer);

btnStop.addEventListener('click', stopTimer);

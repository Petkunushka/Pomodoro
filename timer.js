import { alarm } from './alarm';
import { state } from './state';

const minutesElem = document.querySelector('time__minutes');
const secondsElem = document.querySelector('time__seconds');

const showTime = (seconds) => {
    minutesElem.textContent = Math.floor(seconds/60);
    secondsElem.textContent = seconds % 60;
}

export const startTimer = () => {
    state.timeLeft -=1;

    showTime(state.timeLeft);

    if (state.timeLeft > 0 && state.isActive) {
        state.timerId = setTimeout(startTimer, 1000);
    }

    if (state.timerLeft <= 0) {
        alarm();
    }
}
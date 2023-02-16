import { state } from './state';
import { startTimer } from './timer';

const btnStart = document.querySelector('.control__btn_start');

export const initControl = () => {
    btnStart.addEventListener('click', () => {
        if (state.isActive) {
            clearTimeout(state.timerId);
            state.isActive = false;
            btnStart.textContent = 'Старт';
        } else {
            state.isActive = true;
            btnStart.textContent = 'Пауза';
            startTimer();
        }

    })
}
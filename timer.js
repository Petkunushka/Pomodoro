import { alarm } from './alarm';
import { state } from './state';

const minutesElem = document.querySelector('time__minutes');
const secondsElem = document.querySelector('time__seconds');

const showTime = (seconds) => {
    minutesElem.textContent = Math.floor(seconds/60);
    
}
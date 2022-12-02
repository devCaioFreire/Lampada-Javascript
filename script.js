const turnOn = document.querySelector('#btnOn');
const turnOff = document.querySelector('#btnOff');
const restart = document.querySelector('#btnRestart');
const broken = document.querySelector('#lamp');
const lamp = document.querySelector('#lamp');

function isLampBroken() {
    return lamp.src.indexOf('lampBroken') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/lampOn.png';
    }
};

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/lampOff.png';
    }
};

function lampBroken() {
    lamp.src = './img/lampBroken.png'
}

function lampOk() {
    if (isLampBroken() > -1) {
        lamp.src = './img/lampOff.png';
        return;
    }
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
restart.addEventListener('click', lampOk)
broken.addEventListener('dblclick', lampBroken);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
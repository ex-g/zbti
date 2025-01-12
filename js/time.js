// // 시간 js

const makeTimer = () => {
    var now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    ampm = hr >= 12 ? "PM" : "AM";
    hr = hr % 12;
    hNum = hr ? hr : 12;

    // 분이 한 자리 숫자일 때 앞에 0 붙이기
    if(min >= 10) {
        mNum = min;
    } else {
        mNum = "0" + min;
    }
    document.querySelector('.hour').innerHTML = `${hNum}`;
    document.querySelector('.min').innerHTML = `${mNum}`;
    document.querySelector('.diff').innerHTML = ampm;
}

window.onload = makeTimer;

setInterval(makeTimer, 1000);
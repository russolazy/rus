let displayTime = document.querySelector(".hero-time");

function currentTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let formattedTime = `${hr} : ${min} : ${sec}`;
    displayTime.textContent = formattedTime;
}

currentTime();
setInterval(currentTime, 1000);

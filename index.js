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

document.addEventListener("DOMContentLoaded", function () {
    const countUrl = "https://api.countapi.xyz/hit/russolazy.github.io/rus/visits";
    const displayElement = document.getElementById("visitor-count");

    fetch(countUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            displayElement.textContent = data.value;
        })
        .catch((error) => {
            console.error("Error fetching visitor count:", error);
            displayElement.textContent = "0";
        });
});

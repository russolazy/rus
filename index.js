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
    const apiKey = "gNoWl0tivsgh8Oe+W+R4oA==eW2CheIJEXnAK6tU";
    const countUrl = "https://api.api-ninjas.com/v1/counter?id=rus-portfolio&hit=true";

    fetch(countUrl, {
        method: "GET",
        headers: { "X-Api-Key": apiKey },
    })
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("visitor-count").textContent = data.value;
        })
        .catch((error) => {
            console.error("Error fetching visitor count:", error);
            document.getElementById("visitor-count").textContent = "Error fetching count";
        });
});

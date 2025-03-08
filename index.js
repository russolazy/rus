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

const apiKey = "gNoWl0tivsgh8Oe+W+R4oA==eW2CheIJEXnAK6tU";
fetch("https://api.api-ninjas.com/v1/counter?id=rus-portfolio&hit=true", {
    method: "GET",
    headers: { "X-Api-Key": apiKey },
})
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("visitor-count").textContent = data.value;
    })
    .catch((error) => {
        console.error("Error fetching visitor count:", error);
    });

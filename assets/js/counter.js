const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://yjhbqwu4sersl2gpv7vgc2ubum0eabxl.lambda-url.us-west-2.on.aws/")
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
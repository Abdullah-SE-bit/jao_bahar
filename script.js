let count = 0;

function increaseCounter() {
    count++;

    document.getElementById("counter").textContent = count;
}

document.getElementById("counterButton").addEventListener(
    "click",
    increaseCounter
);
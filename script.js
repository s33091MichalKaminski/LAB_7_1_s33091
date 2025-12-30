document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn1").addEventListener("click", addDiv);
    document.getElementById("btn2").addEventListener("click", removeFirstDiv);
    document.getElementById("btn3").addEventListener("click", changeThirdDivColor);
    document.getElementById("btn4").addEventListener("click", changeAllText);
});

function addDiv() {
    const container = document.getElementById("container");
    const count = container.children.length + 1;

    const div = document.createElement("div");
    div.className = "box";
    div.innerText = "Div " + count;

    container.appendChild(div);
}

function removeFirstDiv() {
    const container = document.getElementById("container");
    if (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    }
}

function changeThirdDivColor() {
    const container = document.getElementById("container");
    if (container.children[2]) {
        container.children[2].style.backgroundColor = "lightblue";
    }
}

function changeAllText() {
    const divs = document.querySelectorAll(".box");
    divs.forEach(div => div.innerText = "nowy tekst");
}

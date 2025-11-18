const sen = document.getElementById("sen");
const btn_y = document.getElementById("btn_y");
const btn_n = document.getElementById("btn_n");
const box = document.querySelector(".container");

function centerBox() {
    box.style.left = "50%";
    box.style.top = "50%";
    box.style.transform = "translate(-50%, -50%)";
}

function moveRandom() {
    const maxX = window.innerWidth - box.offsetWidth - 10;
    const maxY = window.innerHeight - box.offsetHeight - 10;

    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;

    box.style.left = randX + "px";
    box.style.top = randY + "px";
    box.style.transform = "none"; // remove centering effect
}

centerBox();

btn_y.addEventListener('click', () => {
    sen.innerText = "Haa mko pta tha tu Pagal hi hai!😂";
    btn_n.remove();
    btn_y.remove();
     const refreshBtn = document.createElement("button");
        refreshBtn.innerText = "🔄";
        box.appendChild(refreshBtn);
        refreshBtn.style.background = "white";
        refreshBtn.addEventListener("click", () => {
        location.reload();
     });
    centerBox();   
});

let arr = [
    "Tu hai tko pta nahi hai ! 😏",
    "Ae pagal ! 😁",
    "Tu bhot badi Pagal Hai ! 🥱",
    "Ledgi ! 😛",
    "Tu Puri Pagal hai ! 😝"
];

let tempArr = [...arr];

btn_n.addEventListener('click', () => {
    const randIndex = Math.floor(Math.random() * tempArr.length); 
    const item = tempArr[randIndex];

    sen.innerText = item;
    tempArr.splice(randIndex, 1);

    if (tempArr.length === 0) tempArr = [...arr];

    moveRandom();  // jump randomly
});

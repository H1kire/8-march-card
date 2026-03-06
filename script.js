// ======================
// ПЕЧАТАЮЩИЙСЯ ТЕКСТ
// ======================

const text =
    `Поздравляю с прекрасным праздником весны!

Пусть каждый день будет наполнен
радостью, теплом и улыбками.

Пусть сбываются мечты,
а счастье и любовь всегда будут рядом. 💖`;

let i = 0;

function typeWriter(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,40);
    }
}

typeWriter();

// ======================
// КНОПКА БУКЕТА
// ======================
const bouquetBtn = document.getElementById("bouquetBtn");
const bouquet = document.getElementById("bouquet");

bouquetBtn.addEventListener("click", () => {
    bouquet.classList.remove("show");
    setTimeout(() => {
        bouquet.classList.add("show");
    }, 50);
});

// ======================
// ПАРАЛЛАКС ФОН
// ======================
const bg = document.querySelector(".background");

function updateBg(x, y) {
    if(!bg) return;
    const offsetX = (x / window.innerWidth - 0.5) * 30;
    const offsetY = (y / window.innerHeight - 0.5) * 30;
    bg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// Десктоп: мышь
document.addEventListener("mousemove", (e)=>{
    if(window.innerWidth > 600) updateBg(e.clientX, e.clientY);
});

// Мобильные устройства: сенсор (наклон)
document.addEventListener("deviceorientation", (e)=>{
    if(window.innerWidth <= 600){
        const x = e.gamma || 0; // наклон по горизонтали
        const y = e.beta || 0;  // наклон по вертикали
        bg.style.transform = `translate(${x*1.5}px, ${y*1.5}px)`;
    }
});

// ======================
// ВЕТЕР
// ======================
let wind = 0;
setInterval(()=>{
    wind = (Math.random()-0.5) * 0.8;
},3000);

// ======================
// ЛЕПЕСТКИ САКУРЫ
// ======================
let petalsCount = 0;
const maxPetals = 30;

function createPetal() {
    if(petalsCount >= maxPetals) return;
    petalsCount++;

    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerText = "🌸";
    document.body.appendChild(petal);

    let posX = Math.random() * window.innerWidth;
    let posY = -40;
    const size = Math.random()*18 + 12;
    const fallSpeed = Math.random()*1.5 + 0.8;
    const sway = Math.random()*0.5 + 0.2;
    petal.style.fontSize = size + "px";

    function update(){
        posY += fallSpeed;
        posX += wind + Math.sin(posY*0.03)*sway;
        petal.style.left = posX + "px";
        petal.style.top = posY + "px";
        petal.style.transform = `rotate(${posY}deg)`;

        if(posY < window.innerHeight + 50){
            requestAnimationFrame(update);
        } else {
            petal.remove();
            petalsCount--;
        }
    }
    update();
}

setInterval(createPetal, 400);

// ======================
// ЧАСТИЦЫ СВЕТА
// ======================
function createParticle(){
    const p = document.createElement("div");
    p.className="particle";
    p.style.left=Math.random()*window.innerWidth+"px";
    p.style.top=Math.random()*window.innerHeight+"px";
    p.style.animationDuration=(Math.random()*5+5)+"s";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),6000);
}

setInterval(createParticle,500);

// ======================
// СЕРДЕЧКИ ПРИ КЛИКЕ
// ======================
document.addEventListener("click",(e)=>{
    for(let i=0;i<3;i++){
        const heart=document.createElement("div");
        heart.className="heart";
        heart.innerText="💖";
        heart.style.left=(e.clientX+(Math.random()*40-20))+"px";
        heart.style.top=(e.clientY+(Math.random()*40-20))+"px";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),2000);
    }
});
import services from './services.js';
import servicesChoose from './servicesChoose.js';
import portfolio from './portfolio.js';

const bar = document.querySelector(".bar");
const cls = document.querySelector(".close");
let ul = document.querySelector(".ul");

let chk = document.getElementById('theme');
chk.onclick = () => {
    if (chk.checked == true) {
        let m = document.querySelector('meta[name="color-scheme"]');
        m.content = 'dark'
        document.getElementById("banner").style.backgroundColor = '#333';
        document.getElementById("service").style.backgroundColor = '#474747';
        document.getElementById("weAre").style.backgroundColor = '#333';
    } else {
        document.querySelector('meta[name="color-scheme"]').content = '';
        document.getElementById("banner").style.backgroundColor = '';
        document.getElementById("service").style.backgroundColor = '';
        document.getElementById("weAre").style.backgroundColor = '';
    }
}

// let redMore = document.getElementById('readMore');
// redMore.onclick = 
function redrc(param) {
    window.location.href = param;
}


bar.onclick = () => {
    // console.log(ul);
    ul.classList.remove('transition');
}
cls.onclick = () => {
    // console.log(ul);
    ul.classList.add('transition');
}



/////////////////////////services//////////////////////////////////
const service_container = document.getElementById("servide_container");


const template = (service, ind) => {
    return `<!-- box ${ind} --> 
    <div class="box service_box">
        <div class="box_icon"><i class="${service.icon}"></i></div>
        <div class="box_meta">
            <h3><b>${service.heading}</b></h3>
            <p>${service.desc}</p>
            <button type="button" id="readMore" onClick="redrc('${service.links}')">Read More</button>
        </div>
    </div>`;
}

services.forEach((obj, ind) => {
    let html = template(obj, ind);
    service_container.innerHTML += html;
});

// -------------------->>>>>>>>>>>  choose us 
// let chooseUs = document.getElementById("chooseus_main");
const chooseUsBox = (elements, ind) => {
    return `<div class="choose_box box">
    <div class="box_icon"><i class="${elements.icon}"></i></div>
    <div class="box_meta">
        <h3><b>${elements.heading}</b></h3>
        <p>${elements.desc}</p>
        <!-- <button type="button" id="readMore" onClick="redrc()">Read More</button> -->
    </div>
</div>`;
}

servicesChoose.forEach((obj, ind) => {
    let html = chooseUsBox(obj, ind);
    document.getElementById("chooseus_main").innerHTML += html;
    // console.log(obj);
});

// portfolio grid

const card = (elements, ind) => {
    return `<div class="cards" data-name="${elements.name}">
    <div class="portfolio_card">
        <img src="${elements.img}" alt="img 1" />
        <!-- <div class="portfolio_card_meta">
            <span><i class="fal fa-plus"></i></span>
            <span><i class="fal fa-link"></i></span>
        </div> -->
    </div>
</div>`;
}

portfolio.forEach((obj, ind) => {
    let html = card(obj, ind);
    document.getElementById("portfolio_grid").innerHTML += html;
    // console.log(obj);
});

// profile filters
const btns = document.querySelectorAll(".portfolio_btns");
const cards = document.querySelectorAll(".portfolio_grid .cards");

// define filter card function
const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    // iterate over each filter card
    cards.forEach(card => {
        card.classList.add("hide");
        // check if the card matches the selected filter of "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
}
// add click event listener to each filter buttons
btns.forEach(btn => btn.addEventListener('click', filterCards));

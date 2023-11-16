import services from './services.js';
import servicesChoose from './servicesChoose.js';
import portfolio from './portfolio.js';
import team from './team.js';

const bar = document.querySelector(".bar");
const cls = document.querySelector(".close");
let ul = document.querySelector(".ul");
let chk = document.getElementById('theme');

// dark mode enable disable
chk.onclick = () => {
    if (chk.checked == true) {
        let m = document.querySelector('meta[name="color-scheme"]');
        m.content = 'dark'
        document.getElementById("banner").style.backgroundColor = '#333';
        document.getElementById("service").style.backgroundColor = '#474747';
        document.getElementById("weAre").style.backgroundColor = '#333';
        document.getElementById("team").style.backgroundColor = '#474747';
        document.getElementById("testimonial").style.backgroundColor = '#333';
        document.getElementById("status").style.backgroundColor = '#474747';
        document.getElementById("study").style.backgroundColor = '#333';
        document.getElementById("blog").style.backgroundColor = '#474747';
        document.getElementById("tutorials").style.backgroundColor = '#333';
        document.getElementById("footer").style.backgroundColor = '#474747';
    } else {
        document.querySelector('meta[name="color-scheme"]').content = '';
        document.getElementById("banner").style.backgroundColor = '';
        document.getElementById("service").style.backgroundColor = '';
        document.getElementById("weAre").style.backgroundColor = '';
        document.getElementById("team").style.backgroundColor = '';
        document.getElementById("testimonial").style.backgroundColor = '';
        document.getElementById("study").style.backgroundColor = '';
        document.getElementById("blog").style.backgroundColor = '';
        document.getElementById("tutorials").style.backgroundColor = '';
        document.getElementById("footer").style.backgroundColor = '';
        document.getElementById("status").style.backgroundColor = '';
    }
}

// let redMore = document.getElementById('readMore');
// redMore.onclick = 
function redrc(param) {
    window.location.href = param;
}

// mobile responsive menue 
bar.onclick = () => {
    ul.classList.remove('transition');
}
cls.onclick = () => {
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

////////////////////////////  choose us  ///////////////////////////////
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
});

/////////////////////////////////// portfolio //////////////////////////////////////

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
});

// filters
const btns = document.querySelectorAll(".portfolio_btns");
const cards = document.querySelectorAll(".portfolio_grid .cards");

// define filter card function
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // iterate over each filter card
    cards.forEach(card => {
        card.classList.add("hide");
        // check if the card matches the selected filter of "all" is selected
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    })
}
// add click event listener to each filter buttons
btns.forEach(btn => btn.addEventListener('click', filterCards));

// ===================> TEAM <====================
const teamTemplate = (elements, ind) => {
    return `<div class="pro profileBox-${ind}">
    <div class="pro_img"><img src="${elements.image}" alt="" srcset=""></div>
    <div class="pro_desc">
        <h2>${elements.name}</h2>
        <p class="des">${elements.designation}</p>
        <p class="des_p">${elements.desc}</p>
    </div>
    <!-- social link -->
    <div class="social">
        <a href="${elements.social.facebook}" class="f"><i class="${elements.social.f_icon}"></i></a>
        <a href="${elements.social.twitter}" class="t"><i class="${elements.social.t_icon}"></i></a>
        <a href="${elements.social.instagram}" class="ins"><i class="${elements.social.ins_icon}"></i></a>
        <a href="${elements.social.linkedin}" class="lin"><i class="${elements.social.lin_icon}"></i></a>
        <a href="${elements.social.whatsapp}" class="wp"><i class="${elements.social.wp_icon}"></i></a>
        <a href="${elements.social.youtube}" class="y"><i class="${elements.social.y_icon}"></i></a>
    </div>
</div>`
}

team.forEach((obj, ind) => {
    let html = teamTemplate(obj, ind);
    document.getElementById("team_main_wrapper").innerHTML += html;
});

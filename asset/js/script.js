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
services = [
    {
        name: 'sd',
        icon: 'fas fa-database',
        heading: 'Software Development',
        desc: 'We will create custom software according to your demand and business, that will help you to growing up your business.',
        links: '../../sds.html'
    },
    {
        name: 'wd',
        icon: 'fas fa-laptop-code',
        heading: 'Website Development',
        desc: 'Now-a-days website is compulsory for a business either you have small or big business running. We will give you a great solution.',
        links: '../../wes.html'
    }
    ,
    {
        name: 'ad',
        icon: 'fab fa-android',
        heading: 'App Development',
        desc: 'For engaged with a lot of customers for your business is connect with them with a Android application. We will develop a great app for your business.',
        links: '../../apdev.html'
    },
    {
        name: 'sdt',
        icon: 'fas fa-laptop',
        heading: 'Software Development Training',
        desc: 'We provide Project based training with certified teachers. If you love to programming or want to built a career on IT sector then checkout our courses layout.',
        links: '../../softdevtraning.html'
    },
    {
        name: 'itc',
        icon: 'fas fa-lock',
        heading: 'IT Consultancy',
        desc: 'If you need any help with IT consultancy for your business or company then just contact with us. We will provide you a great and easy solution that will help you to solve your problems.',
        links: '../../itcon.html'
    },
    {
        name: 'ha',
        icon: 'fas fa-tv',
        heading: 'Hardware Accessories',
        desc: 'For your office, company or business you must need hardware accessories now-a-days. We will provide all kind of hardware accessories at a cheap rate.',
        links: '../../hardwareacc.html'
    },
];


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


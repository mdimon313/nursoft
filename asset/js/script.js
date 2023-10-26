const bar = document.querySelector(".bar");
const cls = document.querySelector(".close");
let ul = document.querySelector(".ul");


bar.onclick = ()=> {
    // console.log(ul);
    ul.classList.remove('transition');
}
cls.onclick = ()=> {
    // console.log(ul);
    ul.classList.add('transition');
}
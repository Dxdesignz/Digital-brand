let loader = document.querySelector(".loading");

window.addEventListener("load", vanish);
function vanish(){
    loader.classList.add("dispper");
}

let navbar = document.querySelector('.navbar');

document.querySelector("#menu").onclick = () => {
    navbar.classList.toggle('active');
}

$(document).ready(function () {
    $("#pro").click(function () {
        $("#button1").slideToggle("slow");
    });
});

function mOver() {
    document.getElementById("slider").style.border="3px solid var(---red)";
    document.getElementById("b1").style.color="var(---red)";
}
function mOut() {
    document.getElementById("slider").style.border="none";
    document.getElementById("b1").style.color="var(---black)";
}

function mOver2() {
    document.getElementById("slider2").style.border="3px solid var(---red)";
    document.getElementById("b2").style.color="var(---red)";
}
function mOut2() {
    document.getElementById("slider2").style.border="none";
    document.getElementById("b2").style.color="var(---black)";
}

function mOver3() {
    document.getElementById("slider3").style.border="3px solid var(---red)";
    document.getElementById("b3").style.color="var(---red)";
}
function mOut3() {
    document.getElementById("slider3").style.border="none";
    document.getElementById("b3").style.color="var(---black)";
}

var swiper = new Swiper(".tes-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        690: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});

const faq = document.querySelectorAll('.accordian');
faq.forEach(faq =>{
    const icon = faq.querySelector('.down-arrow');
    const answer = faq.querySelector('.answer');

    faq.addEventListener('click', ()=>{
        icon.classList.toggle('faq-active');
        answer.classList.toggle('faq-active')
    })
})

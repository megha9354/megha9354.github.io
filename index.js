// Auto Typed Name
// let typed = new Typed(".auto-typed", {
//     strings: ["Wasim Rehman,"],
//     typeSpeed: 220,
//     backSpeed: 220,
//     loop: true,
// });

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

//

var swiper = new Swiper(".swiper-container1", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
var swiper = new Swiper(".swiper-container2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
var swiper = new Swiper(".swiper-container3", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
const GetDetail1 = () => {
    document.getElementById("project1_Info").style.display = "grid";
    document.getElementById("get1").style.display = "none";
    document.getElementById("close1").style.display = "flex";
    document.getElementById("box1").style.boxShadow =
        "0 3px 10px -5px #277ad894, -7px 5px 10px -5px #277ad894, 7px 5px 10px -5px #277ad894";
    l;
};
const CloseDetail1 = () => {
    document.getElementById("project1_Info").style.display = "none";
    document.getElementById("close1").style.display = "none";
    document.getElementById("get1").style.display = "flex";
    document.getElementById("box1").style.boxShadow = "none";
};
const GetDetail2 = () => {
    document.getElementById("project2_Info").style.display = "grid";
    document.getElementById("get2").style.display = "none";
    document.getElementById("close2").style.display = "flex";
    document.getElementById("box2").style.boxShadow =
        "0 3px 10px -5px #277ad894, -7px 5px 10px -5px #277ad894, 7px 5px 10px -5px #277ad894";
    l;
};
const CloseDetail2 = () => {
    document.getElementById("project2_Info").style.display = "none";
    document.getElementById("close2").style.display = "none";
    document.getElementById("get2").style.display = "flex";
    document.getElementById("box2").style.boxShadow = "none";
};
const GetDetail3 = () => {
    document.getElementById("project3_Info").style.display = "grid";
    document.getElementById("get3").style.display = "none";
    document.getElementById("close3").style.display = "flex";
    document.getElementById("box3").style.boxShadow =
        "0 3px 10px -5px #277ad894, -7px 5px 10px -5px #277ad894, 7px 5px 10px -5px #277ad894";
};
const CloseDetail3 = () => {
    document.getElementById("project3_Info").style.display = "none";
    document.getElementById("close3").style.display = "none";
    document.getElementById("get3").style.display = "flex";
    document.getElementById("box3").style.boxShadow = "none";
};

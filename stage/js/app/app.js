const tl = gsap.timeline({ defaults: { ease: "power1.out" } }),
    text = document.querySelectorAll(".intro-text .text"),
    slider = document.querySelector(".slider"),
    introSection = document.querySelector(".intro"),
    navLogo = document.querySelector("#logo"),
    navLink = document.querySelectorAll(".nav-links"),
    bigText = document.querySelector(".landing .big-text");
//- Animations
tl
    .to(text, { y: "0%", duration: 1, stagger: 0.50 })
    .to(slider, { y: "-100%", duration: 1.5, delay: 0.5 })
    .to(introSection, { y: "-100%", duration: 1 }, "-=1")
    .fromTo(navLogo, { opacity: "0", duration: 0.5 }, { opacity: "1" })
    .fromTo(navLink, { opacity: "0", duration: 0.5 }, { opacity: "1" }, "-=0.5")
    .fromTo(bigText, { y: "100%", opacity: "0", duration: 0.5 }, { y: "0%", opacity: "1" })
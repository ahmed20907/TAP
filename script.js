// =============================
// Cursor Glow Effect
// =============================

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// =============================
// Scroll Reveal Animation
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// =============================
// Smooth Navbar Shadow
// =============================

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>40){

        nav.style.boxShadow="0 10px 30px rgba(0,217,255,.25)";

    }

    else{

        nav.style.boxShadow="none";

    }

});

// =============================
// Hero Button Ripple Effect
// =============================

document.querySelectorAll(".button, .download").forEach(button=>{

    button.addEventListener("click",function(e){

        let ripple=document.createElement("span");

        ripple.classList.add("ripple");

        ripple.style.left=e.offsetX+"px";
        ripple.style.top=e.offsetY+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

// =============================
// Page Loader
// =============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});
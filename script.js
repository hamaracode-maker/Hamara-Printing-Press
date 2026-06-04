// Smooth Active Navbar Effect

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 100){
        header.style.background = "rgba(255,255,255,0.98)";
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.12)";
    }
    else{
        header.style.background = "rgba(255,255,255,0.92)";
        header.style.boxShadow = "none";
    }

});


// Counter Animation

const counters = document.querySelectorAll('.stat h4');

const speed = 100;

counters.forEach(counter => {

    const updateCount = () => {

        const target = +counter.innerText.replace('+','');

        const count = +counter.getAttribute('data-count') || 0;

        const increment = target / speed;

        if(count < target){

            const newCount = Math.ceil(count + increment);

            counter.setAttribute('data-count', newCount);

            counter.innerText = newCount + '+';

            setTimeout(updateCount,20);

        }

        else{

            counter.innerText = target + '+';

        }

    };

    updateCount();

});


// Fade In Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
'.service-card,.machine-card,.portfolio-grid img,.about-content,.contact-container'
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


// Floating CMYK Particles

const particleContainer = document.createElement("div");

particleContainer.className = "particles";

document.body.appendChild(particleContainer);

for(let i=0;i<30;i++){

    let particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left = Math.random()*100 + "%";

    particle.style.animationDelay =
    Math.random()*8 + "s";

    particle.style.animationDuration =
    6 + Math.random()*6 + "s";

    particleContainer.appendChild(particle);

}


// Portfolio Image Zoom

const portfolioImages =
document.querySelectorAll('.portfolio-grid img');

portfolioImages.forEach(img=>{

    img.addEventListener("click",()=>{

        const popup =
        document.createElement("div");

        popup.className = "lightbox";

        popup.innerHTML = `
            <img src="${img.src}">
        `;

        document.body.appendChild(popup);

        popup.addEventListener("click",()=>{

            popup.remove();

        });

    });

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior:'smooth'
        });

    });

});


// Loading Screen

window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    }

});
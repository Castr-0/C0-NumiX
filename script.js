// ==========================
// HEADER AO FAZER SCROLL
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow = "none";

    }

});

// ==========================
// ANIMAÇÕES
// ==========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// ==========================
// FAQ
// ==========================

document.querySelectorAll(".question").forEach(question=>{

    const p = question.querySelector("p");

    p.style.display="none";

    question.style.cursor="pointer";

    question.addEventListener("click",()=>{

        if(p.style.display==="block"){

            p.style.display="none";

        }else{

            p.style.display="block";

        }

    });

});

// ==========================
// LIGHTBOX
// ==========================

const images = document.querySelectorAll(".grid img");

const lightbox = document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

images.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        const img=document.createElement("img");

        img.src=image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

// ==========================
// BOTÃO VOLTAR AO TOPO
// ==========================

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.id="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("showButton");

    }else{

        topButton.classList.remove("showButton");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================
// EFEITO BOTÕES
// ==========================

document.querySelectorAll(".buy").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px) scale(1.02)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});



const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.padding = "15px 8%";
        header.style.background = "rgba(255,255,255,.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    } else {

        header.style.padding = "20px 8%";
        header.style.background = "rgba(255,255,255,.75)";
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.05)";

    }

});



const revealElements = document.querySelectorAll(
    ".card, .stat, .hero-text, .hero-image, .title"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .15

});

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = ".8s ease";

    revealObserver.observe(el);

});



document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});



const imagens = document.querySelectorAll(".card img");

imagens.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});



const stats = document.querySelectorAll(".stat h2");

const statsObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const elemento = entry.target;

            const texto = elemento.innerText;

            const numero = parseInt(texto.replace(/\D/g,""));

            let atual = 0;

            const incremento = Math.ceil(numero / 80);

            const atualizar = () => {

                atual += incremento;

                if(atual >= numero){

                    elemento.innerText = texto;

                }else{

                    elemento.innerText = atual + "+";

                    requestAnimationFrame(atualizar);

                }

            }

            atualizar();

            statsObserver.unobserve(elemento);

        }

    });

});

stats.forEach(stat=>{

    statsObserver.observe(stat);

});



const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.background = "#0E5EFF";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
topButton.style.transition = ".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



const form = document.querySelector(".newsletter-form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Obrigado! Você foi inscrito.");

        form.reset();

    });

}



const footerSmall = document.querySelector("footer small");

if(footerSmall){

    footerSmall.innerHTML = `
        © ${new Date().getFullYear()} Travelly. Todos os direitos reservados.
        <br><br>
        Este é um projeto fictício desenvolvido exclusivamente para fins de estudo e demonstração.
    `;

}
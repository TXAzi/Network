/* ==========================================
   TXAZI BYTE PREMIUM 2026
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MENU MOBILE
    ========================== */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if(menuBtn){

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if(navbar.classList.contains("active")){
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            }else{
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    }

    document.querySelectorAll(".navbar a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

    /* ==========================
       FORMULÁRIO WHATSAPP
    ========================== */

    const pedidoForm = document.getElementById("pedidoForm");

    if(pedidoForm){

        pedidoForm.addEventListener("submit", function(e){

            e.preventDefault();

            const nome =
            document.getElementById("nome").value;

            const numero =
            document.getElementById("numero para mandar").value;

            const pacote =
            document.getElementById("pacote").value;

            const pagamento =
            document.getElementById("pagamento").value;

            const mensagem =

`🚀 NOVO PEDIDO TXAZI BYTE

👤 Nome: ${nome}

📱 Número Vodacom:
${numero}

📦 Pacote Escolhido:
${pacote}

💳 Método de Pagamento:
${pagamento}

Solicito ativação deste pacote.

Obrigado.`;

            window.open(
            `https://wa.me/258871545619?text=${encodeURIComponent(mensagem)}`,
            '_blank'
            );

        });

    }

    /* ==========================
       ANIMAÇÃO AO SCROLL
    ========================== */

    const revealElements =
    document.querySelectorAll(
        ".card,.service-card,.stat,.sobre"
    );

    const revealOnScroll = () => {

        revealElements.forEach(el => {

            const top =
            el.getBoundingClientRect().top;

            const windowHeight =
            window.innerHeight;

            if(top < windowHeight - 100){

                el.style.opacity = "1";
                el.style.transform =
                "translateY(0)";

            }

        });

    };

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform =
        "translateY(40px)";
        el.style.transition =
        "all .7s ease";

    });

    window.addEventListener(
        "scroll",
        revealOnScroll
    );

    revealOnScroll();

    /* ==========================
       CONTADOR ANIMADO
    ========================== */

    const counters =
    document.querySelectorAll(".stat h2");

    counters.forEach(counter => {

        const targetText =
        counter.innerText;

        const target =
        parseInt(targetText);

        if(isNaN(target)) return;

        let count = 0;

        const speed =
        Math.ceil(target / 100);

        const updateCounter = () => {

            count += speed;

            if(count < target){

                counter.innerText =
                count + "+";

                requestAnimationFrame(
                    updateCounter
                );

            }else{

                counter.innerText =
                targetText;

            }

        };

        updateCounter();

    });

    /* ==========================
       HEADER SCROLL
    ========================== */

    const header =
    document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            header.style.background =
            "rgba(0,0,0,.98)";

            header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

        }else{

            header.style.background =
            "rgba(13,17,23,.95)";

            header.style.boxShadow =
            "none";

        }

    });

});

/* ==========================
   BOTÃO VOLTAR AO TOPO
========================== */

const topButton =
document.createElement("button");

topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topButton.classList.add("top-btn");

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#E60000";
topButton.style.color = "#fff";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.fontSize = "20px";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
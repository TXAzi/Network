/* ==========================================
   TXAZI BYTE PREMIUM 2026
   SCRIPT.JS OFICIAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MENU MOBILE
    ========================== */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", () => {

            navbar.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                if (navbar.classList.contains("active")) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });

        document.querySelectorAll("#navbar a").forEach(link => {

            link.addEventListener("click", () => {

                navbar.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            });

        });

    }

    /* ==========================
       FORMULÁRIO WHATSAPP
    ========================== */

    const pedidoForm = document.getElementById("pedidoForm");

    if (pedidoForm) {

        pedidoForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const nome =
                document.getElementById("nome")?.value.trim();

            const numero =
                document.getElementById("numero")?.value.trim();

            const pacote =
                document.getElementById("pacote")?.value;

            const pagamento =
                document.getElementById("pagamento")?.value;

            if (!nome || !numero || !pacote || !pagamento) {

                alert("Por favor preencha todos os campos.");
                return;

            }

            const mensagem = `🚀 NOVO PEDIDO TXAZI BYTE

👤 Nome: ${nome}

📱 Número Vodacom:
${numero}

📦 Pacote Escolhido:
${pacote}

💳 Método de Pagamento:
${pagamento}

Solicito a ativação deste pacote.

Obrigado.`;

            const whatsappURL =
                `https://wa.me/258871545619?text=${encodeURIComponent(mensagem)}`;

            window.open(whatsappURL, "_blank");

            pedidoForm.reset();

        });

    }

    /* ==========================
       ANIMAÇÃO AO SCROLL
    ========================== */

    const revealElements = document.querySelectorAll(
        ".card, .service-card, .stat, .sobre"
    );

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all .7s ease";

    });

    function revealOnScroll() {

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                el.style.opacity = "1";
                el.style.transform = "translateY(0)";

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    /* ==========================
       CONTADORES
    ========================== */

    const counters = document.querySelectorAll(".stat h2");

    counters.forEach(counter => {

        const textoOriginal = counter.innerText;

        const numero = parseInt(textoOriginal);

        if (isNaN(numero)) return;

        let valor = 0;

        const incremento = Math.ceil(numero / 100);

        function atualizar() {

            valor += incremento;

            if (valor < numero) {

                counter.innerText = valor + "+";

                requestAnimationFrame(atualizar);

            } else {

                counter.innerText = textoOriginal;

            }

        }

        atualizar();

    });

    /* ==========================
       HEADER SCROLL
    ========================== */

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                header.style.background = "rgba(0,0,0,.95)";
                header.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,.25)";

            } else {

                header.style.background =
                    "rgba(13,17,23,.95)";

                header.style.boxShadow = "none";

            }

        });

    }

    /* ==========================
       BOTÃO VOLTAR AO TOPO
    ========================== */

    const topButton = document.createElement("button");

    topButton.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    topButton.className = "top-btn";

    document.body.appendChild(topButton);

    Object.assign(topButton.style, {

        position: "fixed",
        right: "20px",
        bottom: "20px",
        width: "55px",
        height: "55px",
        border: "none",
        borderRadius: "50%",
        background: "#E60000",
        color: "#fff",
        cursor: "pointer",
        display: "none",
        fontSize: "20px",
        zIndex: "9999",
        boxShadow: "0 10px 25px rgba(0,0,0,.3)"

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topButton.style.display = "block";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

});

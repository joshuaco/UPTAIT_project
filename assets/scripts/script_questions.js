const button = document.querySelectorAll(".select-button");
let score = 0;
let counter = 0; /* Contador de botones deshabilitados */

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', (e) => {
        if (button[i].classList.contains("correct")) {
            button[i].style.backgroundColor = "green";
            score += 5;
            console.log(score);
        }
        else {
            button[i].style.backgroundColor = "red";
            if (score > 0) {
                score -= 2;
            }
            console.log(score);
        }
        button[i].disabled = true;
        getSiblings(button[i]).forEach(element => {
            element.disabled = true;
            element.classList.add("disabled");
            counter++;
        });
        counter++;
        if (counter == button.length) {
            showScore();
        }
    });  
}

/* Retorna a todos los hermanos del elemento */
let getSiblings = (e) => {
    let siblings = [];
    let sibling = e.parentNode.firstChild;
    for (; sibling; sibling = sibling.nextSibling) {
        if (sibling.nodeType == 1 && sibling != e) {
            siblings.push(sibling);
        }
    }
    return siblings;
}

const goBack = () => {
    window.history.back();
}

const topButton = document.querySelector("#top-button");

window.onscroll = function () {scrollFunction()};

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

const backToTop = () => {
    window.scrollTo(0, 0);
}

// Boton cerrar modal
/* const closeButton = document.createElement("button");
closeButton.setAttribute("id", "close-button");
closeButton.innerHTML = "Cerrar";
closeButton.addEventListener("click", () => {
    dialogSuccess.close();
    dialogFailed.close();
});
dialogSuccess.appendChild(closeButton); */

const showScore = () => {
    const dialog = document.createElement("dialog");
    dialog.setAttribute("id", "dialog-score");
    dialog.innerHTML = `<div class="modal-content"></div>`;

    if (score >= 15) {
        dialog.firstElementChild.innerHTML += `<h3>Felicidades! Tu puntuación es ${score}</h3>`;
    } else {
        dialog.firstElementChild.innerHTML += `<h3>Lo sentimos, tu puntuación es ${score}</h3>`;
        dialog.firstElementChild.innerHTML += `<button id="again-button">Intentar de nuevo</button>`;
    }
    dialog.firstElementChild.innerHTML += `<button id="close-button">Salir</button>`;

    document.body.appendChild(dialog);
    dialog.showModal();
    document.querySelector("#close-button").addEventListener("click", () => {
        dialog.close();
        window.location.href = "index.html";
    });
    // if exists again button
    if (document.querySelector("#again-button")) {
        document.querySelector("#again-button").addEventListener("click", () => {
        window.location.reload();
        });
    }
    
    console.log(dialog);
}
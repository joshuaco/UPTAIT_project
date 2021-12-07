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

const showScore = () => {
    if (score >= 10) {
        alert("Felicidades tu puntuación es " + score + ", has ganado!");
    }
    else {
        alert("Lo siento tu puntuación es " + score + ", has perdido!");
    }
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
const button = document.querySelectorAll(".select-button");
let score = 0;

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener('click', (e) => {
        if (button[i].classList.contains("correct")) {
            button[i].style.backgroundColor = "green";
            score += 10;
            console.log(score);
        }
        else {
            button[i].style.backgroundColor = "red";
            if (score > 0) {
                score -= 10;
            }
            console.log(score);
        }
    });
    
}
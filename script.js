function submitQuiz() {

    const correctAnswer = {
        q1 : "Paris",
        q2 : "Mercure",
        q3 : "Jupiter",
    }

    const form = document.getElementById("quiz-form");
    let score = 0;

    for (const question in correctAnswer) {
        const userAnswer = form[question].value
        if (userAnswer === correctAnswer[question]) {
            score++;
        }
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Votre score est de : ${score}`

    if (score === 3) {
        resultDiv.innerHTML += "<br> Excellent ! "
    } else  if (score === 2 ) {
        resultDiv.innerHTML += "<br> Bon travail ! "
    } else {
        resultDiv.innerHTML += "<br> Vous pouvez faire mieux ! "
    }
}
function endQuiz() {
    // stop timer
    clearInterval(timerId);

    // show end screen with final score
    var endScreenEl = document.getElementById('score-container');
    endScreenEl.removeAttribute('style');

    // show final score
    var finalScoreEl = document.getElementById('score');
    finalScoreEl.textContent = time;
}
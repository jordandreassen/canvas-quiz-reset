var tabs = document.getElementById('section-tabs');

tabs.innerHTML += '<li id="resetQuiz" class="section"><a href="#">Reset Quiz</a></li>';

var resetButton = document.getElementById('resetQuiz');

resetButton.addEventListener('click', resetQuiz);

function resetQuiz() {
	var answerArrow = document.getElementsByClassName('answer_arrow');

	while(answerArrow.length > 0) answerArrow[0].remove();

	var selected = document.getElementsByClassName('question_input');

	for(var i = 0; i < selected.length; i++) {
		selected[i].checked = false;
	};

	var answers = document.getElementsByClassName('answer_for_');

	for(var j = 0; j <answers.length; j++) {
		answers[j].classList.remove('answer');
	};
};
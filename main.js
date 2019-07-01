var newName = document.getElementById('name');
var changeName = document.getElementById('change-dog-name');
var nameGiven = document.getElementById('input-name');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var paraHow = document.querySelector('.how');
var paraWhat = document.querySelector('.what');
var paraFacts = document.querySelector('.facts');

changeName.addEventListener('click', updateName);
button1.addEventListener('click', changeHow);
button2.addEventListener('click', changeWhat);
button3.addEventListener('click', changeFacts);

function updateName (e) {
	e.preventDefault();
	newName.innerText = nameGiven.value;
}

function changeHow () {
	if (paraHow.style.visibility === 'hidden') {
		paraHow.style.visibility = 'visible';
	} else {
		paraHow.style.visibility = 'hidden';
	}	
}


function changeWhat () {
	if (paraWhat.style.visibility === 'hidden') {
		paraWhat.style.visibility = 'visible';
	} else {
		paraWhat.style.visibility = 'hidden';
	}	
}

function changeFacts () {
	if (paraFacts.style.visibility === 'hidden') {
		paraFacts.style.visibility = 'visible';
	} else {
		paraFacts.style.visibility = 'hidden';
	}	
}
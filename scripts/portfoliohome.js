function hideText(){
	document.getElementById('wrapper').style.display = 'none';
	document.getElementById('personal').style.display = 'none';
	document.getElementById('professional').style.display = 'none';
	document.getElementsByTagName('body')[0].style.backgroundColor = "#009DFF";
}

function showPersonal(){
	hideText();
	document.getElementById('wrapper').style.display = 'block';
	document.getElementById('personal').style.display = 'block';
	document.getElementById('personal').style.height = '300px';
	document.getElementsByTagName('body')[0].style.backgroundColor = '#8DC6FF';
}

function showProfessional(){
	hideText();
	document.getElementById('wrapper').style.display = 'block';
	document.getElementById('professional').style.display = 'block';
	document.getElementsByTagName('body')[0].style.backgroundColor = '#8DC6FF';
}
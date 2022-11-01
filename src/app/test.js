// var listaID = ['LINK_quien_soy', 'LINK_edu', 'LINK_experiencia', 'LINK_skills', 'LINK_arte'];


// quienSoy.onclick = apagarTodasExcepto(quienSoy);
// edu.onclick = apagarTodasExcepto(edu);
// exp.onclick = apagarTodasExcepto(exp);
// skills.onclick = apagarTodasExcepto(skills);
// arte.onclick = apagarTodasExcepto(arte);

// function apagarTodasExcepto(esta){
//     document.write(esta)
//     var el = document.getElementById(esta);
//     // var todas = [quienSoy, edu, exp, skills, arte];
//     // for (var i = 0; i < todas.length; i++) {
//     //     todas[i].style.display = 'none';
//     // }
//     quienSoy.style.display = 'none';
//     edu.style.display = 'none';
//     exp.style.display = 'none';
//     skills.style.display = 'none';
//     arte.style.display = 'none';

//     el.style.display = 'block';
// }


// function apagarTodasExcepto(obj){
//     var quienSoy = document.getElementById('SEC_quien_soy');
//     var edu = document.getElementById('SEC_edu');
//     var exp = document.getElementById('SEC_experiencia');
//     var skills = document.getElementById('SEC_skills'); 
//     var arte = document.getElementById('SEC_arte'); 
    
//     var el = document.getElementById(obj);

//         quienSoy.style.display = 'none';
//         edu.style.display = 'none';
//         exp.style.display = 'none';
//         skills.style.display = 'none';
//         arte.style.display = 'none';

//         el.style.display = 'block';

// }


// function logIn(link){
//     var win = window.open(link, '_blank');
//     win.focus();
// }

function newPopup(url) {
	popupWindow = window.open(
		url,'popUpWindow','height=300,width=400,left=50%,top=50%,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes');
}
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function verify(){
	var userId = document.getElementById('userId').value;
	var pass = document.getElementById('pass').value;

	if(userId === 'admin' && pass === 'admin12310test'){
		window.location.replace("pages/index.html");
	}
	else{
		alert("Wrong UserID or Password");
		window.location.replace("login.html");
	}
}

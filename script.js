header = document.getElementById('header')
form = document.getElementById('form')
username = document.getElementById('username')
password = document.getElementById('password')
conPassword = document.getElementById('con-password')
form.addEventListener("submit",(e)=>{
	e.preventDefault()
	if(username.value === ''){
		alert("Username cannot be empty!")
	}
	if(password.value != conPassword.value){
		alert("Passwords do not match!")
	}
	header.innerHTML = `Welcome ${username.value}`
})
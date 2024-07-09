<template>
<div class="login-main">
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

		<div class="login">
				<form class="vstack gap">
                    <div class="title">Log In</div>
                    <div class="form">
                        <p for="name">Email:</p>
                        <input type="email" id="email" name="email" required>
					</div>
                    <div class="form">
                        <p for="name">Password:</p>
                        <input type="password" id="password" name="password" onblur="validatePassword()" required>
                    </div>
					<div class="d-flex justify-content-around">
						<button type="submit">SIGN IN</button>
					</div>
					
					<div class="bottom">
						<span class="forget-pass">Forgot password?</span>
                    	<span class="sign-up">Don't have an account? <RouterLink to="/register" style="color: #035e96;">Sign up</RouterLink></span>
					</div>
					
				</form>
        </div>
	</div>
</div>
</template>


<style scoped>
:root {
    --button-hover: #1261A6;
    --button: #2a95bf;
    --pastel: #73C6D9;
    --dark-blue: #126DA6;
    --grey: #5c6677;
    --navy: #23395d;
	--text: #021534;
}
.login-main{
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-family: 'Jost', sans-serif;
	background: #035e96;
}
.main{
	width: 30%;
	height: 80%;
	background: #fff;
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #000;
}
.title{
	color: #23395d;;
	font-size: 2.5em;
	justify-content: center;
	display: flex;
	font-weight: bold;
	cursor: pointer;
	margin: 20px auto;
	text-shadow: 2px 2px 3px #2a95bf;
}

#chk{
	display: none;
}
input{
	width: 80%;
	height: 45px;
	justify-content: center;
	display: flex;
	margin: 15px auto;
	padding: 12px 24px;
	border: 1px solid #035e96;
	outline: none;
	border-radius: 2px;
	margin: 20px auto;
}

button{
	align-items: center;
	width: 80%;
	height: 45px;
	justify-content: center;
	display: flex;
	color: #fff;
	background: #035e96db;
	font-size: 1.2em;
	font-weight: 400;
	outline: none;
	border: none;
	border-radius: 2px;
	transition: .2s ease-in;
	cursor: pointer;
	margin-top: 12px;
	
}
button:hover{
	background: #199aeb;
}

p{
    font-size: 1em;
    color: #035e96;
	width: 100%;
	height: 5px;
	display: flex;
	justify-content: left;
	margin-left: 40px;
}
.bottom {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

  }
  
  .forget-pass {
	font-size: 14px;
	margin-top: 12px;
	color: #035e96;
  }
  .sign-up {
	font-size: 14px;
	color: #212529;
  }
</style>


 
<script>
	export default {
		name: "Login"
	}

	function ValidateEmail() {
		var email = document.getElementById("email");
		var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if (email.value.match(validRegex)) {
			alert("Valid email address!");
			document.form1.text1.focus();
			return true;
		} else {

			alert("Invalid email address!");
			document.form1.text1.focus();
			return false;
		}

	}
	function validatePassword() {
		console.log("A")
  		var passwordField = document.getElementById("password");
  		var password = passwordField.value;

  		if (password.length < 6) {
    		alert("Mật khẩu phải có ít nhất 6 ký tự.");
    		passwordField.focus();
    		return false;
  		}

  	return true;
}


</script>
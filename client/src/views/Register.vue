@@ -0,0 +1,164 @@
<template>
	<div class="main">  
		<input type="checkbox" id="chk" aria-hidden="true">

    
        <div class="signup">
            <form>
                <label for="chk" aria-hidden="true">Sign up</label>
                <span>
                    <input type="text" name="name" placeholder="Full name" required="">
                </span>
                
                
                <div class="input-birthday">
                    <span class="date-input">
                        <span class="date-label">Birthday</span>
                        <input type="date" id="birthday" name="birthday">

                    </span>
                  </div>

                <input type="String" name="address" placeholder="Address" required="">
                <button>Sign up</button>
            </form>
        </div>
    </div>	
</template>

<style scope>
body{
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	font-family: 'Jost', sans-serif;
	background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
}
.main{
	width: 350px;
	height: 500px;
	background: red;
	overflow: hidden;
	background: linear-gradient(to right, #6ee2f5, #6454f0);
	border-radius: 10px;
	box-shadow: 5px 20px 50px #000;
}
#chk{
	display: none;
}
.signup{
	position: relative;
	width:100%;
	height: 100%;
}
label{
	color: #fff;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 60px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}
input{
	width: 60%;
	height: 35px;
	background: gainsboro;
	justify-content: center;
	display: flex;
	margin: 15px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
}
.input-birthday {
    align-items: center;
    width: 60%;
	height: 35px;
	background: gainsboro;
	justify-content: center;
	display: flex;
	margin: 15px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
  }
  
  .date-input {
    display: flex;
    align-items: center;
  }
  
  .date-label {
    margin-left: 5px;
  }
input[type="email1"] {
  background: rgba(61, 116, 164, 0.521);
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
input[type="password1"] {
  background: rgba(61, 116, 164, 0.521);
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

button{
	width: 60%;
	height: 40px;
	margin: 10px auto;
	justify-content: center;
	display: block;
	color: #fff;
	background: #0c85d1;
	font-size: 1em;
	font-weight: bold;
	margin-top: 20px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}
button:hover{
	background: #0c44d1;
}
.login{
	height: 460px;
	background: gainsboro;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
	transition: .8s ease-in-out;
}
.login label{
	color: #0c44d1;
	transform: scale(.6);
}

#chk:checked ~ .login{
	transform: translateY(-500px);
}
#chk:checked ~ .login label{
    transform: scale(1);	
}
#chk:checked ~ .signup label{
	transform: scale(.6);
}

</style>

<script>
export default {
    name: "Register"
}


</script>
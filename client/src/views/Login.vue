<template>
<div class="login-main">
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

		<div class="login">
				<form class="vstack gap">
                    <div class="title">Login</div>
                    <div class="form">
                        <p for="name">Email:</p>
                        <input type="email" name="email" required="">
                        
                        <p for="name">Password:</p>
                        <input type="password" name="pswd" required="">
                    </div>
					<div class="d-flex justify-content-around">
						<button>Login</button>
					</div>
					
					<div class="bottom">
						<span class="forget-pass">Forget password</span>
                    	<span class="form-tip"><RouterLink to="/register">Sign up</RouterLink></span>
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
	background: #0c86d19a;
}
.main{
	width: 600px;
	height: 400px;
	background: #2a95bf;
	overflow: hidden;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #000;
}
.title{
	color: #021534;
	font-size: 2.5em;
	justify-content: center;
	display: flex;
	font-weight: bold;
	cursor: pointer;
	margin: 20px auto;
	text-shadow: 2px 2px 3px rgba(124, 158, 221, 0.695);
}
#chk{
	display: none;
}
input{
	width: 60%;
	height: 35px;
	background: rgba(124, 158, 221, 0.695);
	justify-content: center;
	display: flex;
	margin: 15px auto;
	padding: 10px 20px;
	border: none;
	outline: none;
	border-radius: 5px;
	margin: 30px auto;
}

button{
	align-items: center;
	width: 130px;
	height: 45px;
	justify-content: center;
	display: flex;
	color: #fff;
	background: #0c85d1;
	font-size: 1.5em;
	font-weight: bold;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
	
}
button:hover{
	background: #126DA6;
}

p{
    font-size: 1em;
    color: #021534;
	width: 100%;
	height: 5px;
	display: flex;
	justify-content: left;
	margin-left: 130px;
}
.bottom {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

  }
  
  .forget-pass {
	font-size: 14px;
	margin-top: 5px;
  }
  .forget-tip {
	font-size: 14px;
  }
</style>


 
<script>
function login(userNameOrEmail, password, callback) {
  // Send credentials to external database API
  let hashedPassword = hash(password);

  let options = {
    url: "https://example.com/api/authenticate",
    body: {
      email: userNameOrEmail,
      password: hashedPassword
    }
  };

  send(options, (err, profileData) => {
    // Return error in callback if authentication is unsuccessful
    if (err) {
      return callback(new WrongUsernameOrPasswordError(userNameOrEmail, "My custom error message."));
    } else {
      // Return profile data in callback if authentication is successful
      let profile = {
        username: profileData.username,
        email: profileData.emailAddress,
        user_id: profileData.userId
      };

      return callback(null, profile);
    }
  });
}
</script>
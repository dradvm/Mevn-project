<template>
<div class="login-main">
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

		<form class="login">
			<div class="vstack gap">
				<div class="title">Log In</div>
				<div class="form">
					<p for="email">Email:</p>
					<input type="text" v-model="email" name="email" required>
				</div>
				<div class="form">
					<p for="password">Password:</p>
					<input type="text" v-model="password" name="password" required>
				</div>
				<div class="d-flex justify-content-around">
					<button type="button" @click="ValidateForm">SIGN IN</button>
				</div>
				
				<div class="bottom">
					<span class="forget-pass">Forgot password?</span>
					<span class="sign-up">Don't have an account? <RouterLink to="/register" style="color: #EF8121;">Sign up</RouterLink></span>
				</div>
				
			</div>
        </form>
	</div>
</div>
</template>


<style scoped>

.login-main{
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-family: 'Jost', sans-serif;
	background: #F3FBFF;
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
	color: #225771;
	font-size: 2.5em;
	justify-content: center;
	display: flex;
	font-weight: bold;
	cursor: pointer;
	margin: 20px auto;
	text-shadow: 2px 2px 3px #EF8121;
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
	border: 1px solid #225771;
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
	background: #225771;
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
	background: #F3FBFF;
	color: #225771;
}

p{
    font-size: 1em;
    color: #225771;
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
	color: #EF8121;
  }
  .sign-up {
	font-size: 14px;
	color: #212425;
  }
</style>


 
<script>
import UsersService from '@/services/UsersService';

export default {
	name: "Login",
	data(){
		return {
			email: "",
			password: "",
			check: true
		}

	},

	methods: {

		ValidateForm(){
			this.ValidateEmail();
				if(this.check == true){
					UsersService.login(this.email, this.password)
					.then((res) => {
						if(res.data.length != 0){
							alert("Đăng nhập thành công");
							this.$router.push('/');
						} else alert("Sai mật khẩu");
					})
					.catch((err) => console.log(err))
			}
			

		},

		ValidateEmail(){
          UsersService.checkAccount(this.email)
		  .then((res) => {
			if(res.data.length == 0){
				alert("Tài khoản không tồn tại");
				this.check = false;
			}
		  })
		  .catch((err) => console.log(err))
        },
		
	}

}

</script>
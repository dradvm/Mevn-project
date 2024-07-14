<template>
  <div class="register-main">
    <div class="main">  	
      <input type="checkbox" id="chk" aria-hidden="true">
      <form class="register">

        <div class="title">Sign Up</div>
        <div class="content">
          <div class="container">
            
            <div class="row">

              <div class="col-sm">
                <span class="details">Full name:</span>
                <input type="text" name="fullname" v-model="name" placeholder="Enter your full name" required>
              </div>

              <div class="col-sm">
                  <span class="details">Birthday:</span>
                  <input type="date" name="birthday" v-model="birthday" required>
                </div>

              <div class="col-sm">
                <span class="details">Gender:</span>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="gender" required>
                  <option selected value="">Choose your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

            </div>


            <div class="row">
              <div class="col-sm-8">
                <span class="details">Email:</span>
                <input type="text" name="email" v-model="email" placeholder="Enter your email" @click="validateForm" required>
              </div>

              <div class="col-sm-4">
                <span class="details">Phone number:</span>
                <input type="text" name="phone" v-model="phone" maxlength="10" placeholder="Enter your number" @click="validateForm" required>
              </div>
            </div>
              


            <div class="row">
              <div class="col-sm">
                <span class="details">Password:</span>
                <input type="text" name="password" v-model="password" placeholder="Enter your password" pattern=".{6,}" title="Six or more characters">
                <div class="error" id="passErr"></div>
              </div>

              <div class="col-sm">
                <span class="details">Confirm Password:</span>
                <input type="password" name="password-confirmation" v-model="passwordconfirm" placeholder="Confirm your password" required>
                <div class="error" id="re-passErr"></div>
              </div>
              <div class="col-sm">
                <span class="details">Address:</span>
                <input type="text" name="address" v-model="address" placeholder="Enter your address" required>
                
              </div>

            </div>

            <button class="login-but" type="button" @click="ValidateForm">SIGN UP</button>
            <div class="bottom">
              <div class="log-in">Already have an account? <RouterLink to="/login" style="color: #EF8121;">Log in</RouterLink></div>
            </div>
          </div>
            
        </div>

      </form>
    </div>
  </div>
</template>
    
    
<style scoped>
  .register-main{
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
    width: 60%;
    height: 85%;
    background: #fff;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
    justify-content: center;
    display: flex;
  }

  .title{
    color: #225771;
    font-size: 2.5em;
    justify-content: center;
    display: flex;
    font-weight: bold;
    cursor: pointer;
    margin: 20px auto;
    text-shadow: 2px 2px 3px  #EF8121;
  }
  #chk{
    display: none;
  }
  .container{
    padding-left: 40px;
    padding-right: 40px;
  }
  input, select{
    width: 100%;
    height: 45px;
    justify-content: center;
    display: flex;
    padding: 12px 24px;
    border: 1px solid #225771;
    padding: 10px 20px;
    outline: none;
    border-radius: 2px;
    margin-bottom: 20px;
  }
  span{
    font-size: 1em;
    color: #225771;
    width: 100%;
    height: 5px;
    display: flex;
    justify-content: left;
    margin-left: 10px;
    margin-bottom: 20px;
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
    
  .log-in {
    font-size: 14px;
    margin-top: 8px;
    justify-content: center;
    color: #021534;
  }

  button{
    align-items: center;
    width: 100%;
    height: 45px;
    
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
    margin-top: 4px;
    justify-content: center;
  }
  button:hover{
    background: #F3FBFF;
    color: #225771;
  }
  .error{
    color: red;
    font-size: 90%;
  }
  .input-1{
    background-repeat: no-repeat;
    border: 1px solid #01cc40;
  }
  .input-2{
    background-repeat: no-repeat;
    border: 1px solid red;
  }
  

    
</style>

<script>
import UsersService from '@/services/UsersService';

  export default {
    name: "Register",
    data(){
      return {
        name: "",
        birthday: "",
        gender: "",
        email: "",
        phone: "",
        password: "",
        passwordconfirm: "",
        address: "",
        check: true,

      }
    },
    methods: {

        ValidateForm(){
          this.check = true;
          this.ValidateName();
          this.ValidateBirthday();
          this.ValidateGender();
          this.ValidateEmail();
          this.ValidatePhone();
          this.ValidatePassword();
          this.ValidateRePass();
          this.ValidateAddress();
          if(this.check == true) {
            UsersService.register(this.name, this.address, this.birthday, this.email, this.gender, this.password, this.phone)
            .then((res) => alert("Đăng ký thành công!"))
            .catch((res) => alert("Đăng ký không thành công!"))
          }
        },
        
        ValidateName(){
          if(this.name == ""){
            alert("Full name can't be blank");
            document.focus();
            this.check = false;
            return false;
          }
        },
        ValidateBirthday(){
          if(this.date == ""){
            alert("Birthday can't be blank!");
            document.focus();
            this.check = false;
            return false;
          }
        },
        ValidateGender(){
    
          if(this.gender == ""){
            alert("Gender can't be blank!");
            document.focus();
            this.check = false;
            return false;
          }
        },
        ValidateEmail() {
  
          var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(this.email == ""){
            alert("Email can't be blank!");
            document.focus();
            this.check = false;
            return false;
          } else if (this.email.match(validRegex)) {

          } else {
    
            alert("Email address is not valid!");
            document.focus();
            this.check = false;
            return false;
          }
    
        },
        ValidatePhone(){
      
          if(this.phone == ""){
            alert("Phone can't be blank!");
            document.focus();
            return false;
          } else if(this.phone.length < 10){
            alert("Phone number is not valid!");
            document.focus();
            this.check = false;
            return false;
          }
        },
        ValidatePassword() {
          
          if (this.password.length < 6) {
            alert("Password must be at least 6 characters!");
            document.focus();
            this.check = false;
            return false;
    
          }
        },
        ValidateRePass(){
          if(this.passwordconfirm != this.password){
            alert("Re-enter password is incorrect!");
            document.focus();
            this.check = false;
            return false;
          }
        },
        ValidateAddress(){
          if(this.address == ""){
            alert("Address can't be blank!");
            document.focus();
            this.check = false;
            return false;
    
          }
        }
      
    }
  }

  


</script>
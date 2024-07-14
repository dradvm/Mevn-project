<template>
  <div class="register-main">
    <div class="main">  	
      <input type="checkbox" id="chk" aria-hidden="true">
      <div class="login">

        <div class="title">Sign Up</div>
        <div class="content">
          <form action="#" class="container" method="post">
            
            <div class="row">

              <div class="col-sm">
                <span class="details">Full name:</span>
                <input type="text" name="fullname" id="fullname" placeholder="Enter your full name" required>
              </div>

              <div class="col-sm">
                  <span class="details">Birthday:</span>
                  <input type="date" name="birthday" required>
              </div>

              <div class="col-sm">
                <span class="details">Gender:</span>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example" required>
                  <option selected>Choose your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

            </div>


            <div class="row">
              <div class="col-sm-8">
                <span class="details">Email:</span>
                <input type="text" name="email" id="email" placeholder="Enter your email" @click="validateForm" required>
              </div>

              <div class="col-sm-4">
                <span class="details">Phone number:</span>
                <input type="text" name="phone" id="phone" placeholder="Enter your number" @click="validateForm" required>
              </div>
            </div>
              


            <div class="row">
              <div class="col-sm">
                <span class="details">Password:</span>
                <input type="text" name="password" id="password" placeholder="Enter your password" @click="validateForm" required>
              </div>

              <div class="col-sm">
                <span class="details">Confirm Password:</span>
                <input type="text" name="password-confirmation" id="password-confirmation" placeholder="Confirm your password" @click="validateForm" required>
              </div>
              <div class="col-sm">
                <span class="details">Address:</span>
                <input type="text" name="address" id="address" placeholder="Enter your address" required>
              </div>

            </div>

            <button class="login-but" type="button" @click="validateForm">SIGN UP</button>
            <div class="bottom">
              <span class="log-in">Already have an account? <RouterLink to="/login" style="color: #EF8121;">Log in</RouterLink></span>
            </div>
          </form>
            
        </div>

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
  }
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

    
</style>

<script>
  export default {
      name: "Register",
      methods: {
        validateForm() {
          var name = document.getElementById("fullname");
          var email = document.getElementById("email");
          var phone = document.getElementById("phone");
          var address = document.getElementById("address");
          var pass = document.getElementById("password");
          var pass2 = document.getElementById("password-confirmation");
          if(name.value != ""){
          } else {
            alert("Username is required!");
            name.focus();
          }

          if(pass.value != ""){
            if(pass.value.length < 6){
              alert("Make the password longer!");
              pass.focus();
            }

          } else {
            alert("Password is required!");
            pass.focus();
          }

          if(pass2.value != ""){
            if(pass2.value != pass.value){
              alert("Confirm Password is incorrect!");
              pass2.focus();
            }

          } else {
            alert("Confirm Password is required!");
            pass2.focus();
          }
        }
      }
      

  }

  


</script>
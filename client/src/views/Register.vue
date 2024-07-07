<template>
  <div class="register-main">
    <div class="main">  	
      <input type="checkbox" id="chk" aria-hidden="true">
      <div class="login">

        <div class="title">Sign up</div>
        <div class="content">
          <form action="#" class="vstack gap">
            
            <div class="user-details">

              <div class="input-two-col">
                <span class="details">Full name:</span>
                <input type="text" name="name" placeholder="Enter your full name" required>
              </div>

              <div class="input-two-col">
                  <span class="details">Birthday:</span>
                  <input type="date" name="birthday">
              </div>

              <div class="gender-details">
                <span class="details">Gender:</span>
                <select id="gender" name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="email-col">
                <span class="details">Email:</span>
                <input type="text" name="email" placeholder="Enter your email" required>
              </div>

              <div class="phone-col">
                <span class="details">Phone number:</span>
                <input type="text" name="phone" placeholder="Enter your number" required>
              </div>



              <div class="input-two-col">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter your password" required>
              </div>

              <div class="input-two-col">
                <span class="details">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required>
              </div>
              <div class="input-two-col">
                <span class="details">Address:</span>
                <input type="text" name="address" placeholder="Enter your address" required>
              </div>
              
            </div>

            <button class="login-but">Sign up</button>
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

    
    .user-details {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      margin: 10px 20px;
    }
    
    .input-two-col {
      grid-column: span 1;
    }
    
    .input-one-col {
      grid-column: span 1;
    }
    
    .email-col {
      grid-column: span 2;
    }
    
    .phone-col {
      grid-column: span 1;
    }
    
    .gender-details {
      grid-column: span 1;
    }
    
    @media (max-width: 768px) {
      .user-details {
        grid-template-columns: 1fr;
      }
    
      .input-two-col,
      .input-one-col,
      .email-col,
      .phone-col,
      .gender-details {
        grid-column: span 1;
      }
    }

input{
      width: 100%;
      height: 35px;
      background: rgba(124, 158, 221, 0.695);
      justify-content: center;
      display: flex;
      margin: 10px 20px;
      padding: 10px 20px;
      border: none;
      outline: none;
      border-radius: 5px;
  }
  form .input-two-col span.details{
      font-size: 1em;
      color: #021534;
      width: 100%;
      height: 5px;
      display: flex;
      margin: 5px auto;
      padding: 10px 20px;
  }
  form .input-one-col span.details{
    font-size: 1em;
    color: #021534;
    width: 100%;
    height: 5px;
    display: flex;
    margin: 5px auto;
    padding: 10px 20px;
}
form .gender-details span.details{
  font-size: 1em;
  color: #021534;
  width: 100%;
  height: 5px;
  display: flex;
  margin: 5px auto;
  padding: 10px 20px;
}
form .gender-details #gender{
  width: 100%;
  height: 35px;
  background: rgba(124, 158, 221, 0.695);
  justify-content: center;
  display: flex;
  margin: 10px 40px;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 5px;
}

button{
	width: 130px;
	height: 45px;
	margin: 20px auto;
	justify-content: center;
	display: block;
	color: #fff;
	background: #0c85d1;
	font-size: 1.5em;
	font-weight: bold;

    margin-bottom: 50px;
	outline: none;
	border: none;
	border-radius: 5px;
	transition: .2s ease-in;
	cursor: pointer;
}
button:hover{
	background: #126DA6;
}
    /*.content form .user-details{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 5px 100px 5px 100px;
      }
      form .user-details .input-two-col{
        width: calc(100% / 2 - 20px);
      }
      form .user-details .input-one-col{
        width: 100%;
      }
    input{
        width: 100%;
        height: 35px;
        background: rgba(124, 158, 221, 0.695);
        justify-content: center;
        display: flex;
        margin: 10px auto 5px auto;
        padding: 10px 20px;
        border: none;
        outline: none;
        border-radius: 5px;
    }
    form .input-two-col span.details{
        font-size: 1em;
        color: #021534;
        width: 100%;
        height: 5px;
        display: flex;
        margin: 5px auto;
        padding: 10px 20px;
    }
    form .input-one-col span.details{
      font-size: 1em;
      color: #021534;
      width: 60%;
      height: 5px;
      display: flex;
      margin: 5px auto;
      padding: 10px 20px;
  }



       form .category label{
         display: flex;
         align-items: center;
         cursor: pointer;
       }
       form .category label .dot{
        height: 18px;
        width: 18px;
        border-radius: 50%;
        margin-right: 10px;
        background: #d9d9d9;
        border: 5px solid transparent;
        transition: all 0.3s ease;
      }
       #dot-1:checked ~ .category label .one,
       #dot-2:checked ~ .category label .two,
       #dot-3:checked ~ .category label .three{
         background: #9b59b6;
         border-color: #d9d9d9;
       }
       form input[type="radio"]{
         display: none;
       }
       form .button{
         height: 45px;
         margin: 35px 0
       }
       button{
        width: 130px;
        height: 45px;
        margin: 20px auto;
        justify-content: center;
        display: block;
        color: #fff;
        background: #0c85d1;
        font-size: 1.5em;
        font-weight: bold;
      
          margin-bottom: 50px;
        outline: none;
        border: none;
        border-radius: 5px;
        transition: .2s ease-in;
        cursor: pointer;
      }
      button:hover{
        background: #126DA6;
      }
       @media(max-width: 584px){
       .container{
        max-width: 100%;
      }
      form .user-details .input-box{
          margin-bottom: 15px;
          width: 100%;
        }
        form .category{
          width: 100%;
        }
        .content form .user-details{
          max-height: 300px;
          overflow-y: scroll;
        }
        .user-details::-webkit-scrollbar{
          width: 5px;
        }
        }
        @media(max-width: 459px){
        .container .content .category{
          flex-direction: column;
        }
      }
      #chk{
        display: none;
    }*/



    /*.title{
        color: #021534;
        font-size: 2.5em;
        justify-content: center;
        display: flex;
        margin: 50px;
        margin-bottom: 5px;
        font-weight: bold;
        cursor: pointer;
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
        margin: 10px auto 5px auto;
        padding: 10px 20px;
        border: none;
        outline: none;
        border-radius: 5px;
    }
      
    button{
        width: 25%;
        height: 40px;
        margin: 20px auto;
        justify-content: center;
        display: block;
        color: #fff;
        background: #0c85d1;
        font-size: 1.2em;
        font-weight: bold;
    
        margin-bottom: 50px;
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
        width: 60%;
        height: 5px;
        display: flex;
        margin: 5px auto;
        padding: 10px;
    }*/
    
</style>

<script>
export default {
    name: "Register"
}


</script>
<template>
    <div class="m-3">
        <div class="title">My Profile</div>
        <div class="d-flex justify-content-center align-items-center">  	
        <input type="checkbox" id="chk" aria-hidden="true">
          <div class="content" style="width: 100%; padding:0px 24px;">
              <div class="row">
  
                <div class="col-sm-8">
                  <span class="details">Full name:</span>
                  <input type="text" name="fullname" v-model="name" placeholder="Enter your full name" required>
                </div>

                <div class="col-sm-4">
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
                    <span class="details">Birthday:</span>
                    <input type="date" name="birthday" v-model="birthday" required>
                  </div>
  
                <div class="col-sm">
                  <span class="details">Address:</span>
                  <input type="text" name="address" v-model="address" placeholder="Enter your address" required>
                  
                </div>

                <div class="col-sm">
                    <button type="button" @click="ValidateForm">SAVE</button>
                </div>
  
              </div>
  

              
          </div>

      </div>
    </div>
</template>




      
<style scoped>
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
    input, select, button{
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

      
    .log-in {
      font-size: 14px;
      margin-top: 8px;
      justify-content: center;
      color: #021534;
    }
  
    button{
      color: #fff;
      background: #225771;
      font-size: 1.2em;
      font-weight: 400;
      outline: none;
      border: none;
      border-radius: 2px;
      transition: .2s ease-in;
      cursor: pointer;
      justify-content: center;
      margin: 25px 0px 0px 0px;
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
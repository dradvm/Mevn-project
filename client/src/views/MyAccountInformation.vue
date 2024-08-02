<template>
    <div class="m-3" v-if="userLogin && userLogin.length" v-for="user of userLogin" :key="user._id">
        <div class="title">My Profile</div>
        <div class="d-flex justify-content-center align-items-center">  	
        <input type="checkbox" id="chk" aria-hidden="true">
          <form class="content" style="width: 100%; padding:0px 24px;" v-if="authStore.isLoggedIn" @submit.prevent="saveChanges">
              <div class="row">
  
                <div class="col-sm-8">
                  <span class="details">Full name:</span>
                  <input type="text" name="name" v-model="name">
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
                  <input type="text" name="email" v-model="email" readonly>
                </div>
  
                <div class="col-sm-4">
                  <span class="details">Phone number:</span>
                  <input type="text" name="phone" v-model="phone" maxlength="10">
                </div>
              </div>
                
  
  
              <div class="row">
                <div class="col-sm">
                    <span class="details">Birthday:</span>
                    <input type="date" name="birthday" v-model="birthday">
                  </div>
  
                <div class="col-sm">
                  <span class="details">Address:</span>
                  <input type="text" name="address" v-model="address">
                  
                </div>

                <div class="col-sm">
                    <button type="submit">SAVE</button>
                </div>
  
              </div>
  

              
            </form>

      </div>
    </div>
</template>

<script>
  import UsersService from '@/services/UsersService';
  import { useAuthStore } from '@/stores/counter';
  import { toast } from 'vue3-toastify';
  export default {
    name: "information",
    data() {
      return {
        userLogin: [],
        authStore: useAuthStore(),
        isUpdate: false,
        name: '',
        address: '',
        email: '',
        birthday: '',
        gender: '',
        phone: '',
        

      }
    },
    created() {
      UsersService.checkAccount(this.authStore.user)
        .then((res) => {
          this.userLogin = res.data
        })
        .catch((err) => console.log(err))

      this.fetchDataUpdate();
    },
    methods: {

        fetchDataUpdate() {
          console.log(this.authStore.user)
            UsersService.getUserByEmail(this.authStore.user)
                .then((res) => {
                    this.email = res.data.email
                    this.name = res.data.name
                    this.phone = res.data.phone
                    this.gender = res.data.gender
                    this.address = res.data.address
                    this.birthday = res.data.birthday
                    this.isUpdate = true
          
                })
                .catch((err) => console.log(err))
        },

        saveChanges() {
          var data = {
            name: this.name,
            address: this.address,
            birthday: this.birthday,
            gender: this.gender,
            phone: this.phone

          }
          var regexPhone = /^0[0-9]*$/;
          var today = new Date();
          if(this.name === ""){
            alert("Full name can't be blank");
            return
          }
          else if(this.gender === ""){
            alert("Gender can't be blank!");
            return
          }
          else if(this.phone === ""){
            alert("Phone can't be blank!");
            return
          } else if(this.phone.match(regexPhone)){
          } else {
            alert("Phone number is not valid!");
            return
          }
          if(this.address === ""){
            alert("Address can't be blank!");
            return
          }
          
          if(this.birthday === ""){
            alert("Birthday can't be blank!");
            return
          } else if(Date.parse(this.birthday) >= today){
            alert("Birthday is not valid!");
            return
          }


          if (this.isUpdate) {
                UsersService.updateUser(this.authStore.user, data)
                .then((res) => {
                    toast(res.data.message, {
                        type: 'success',
                        autoClose: 2000,
                        onClose: () => {
                            this.$router.push({name: "home"})
                        }
                    })
                })
                .catch((err) => {
                    toast(err, {
                        type: 'error',
                        autoClose: 2000
                    })
                })
            }

        },
  
    }
  }
  </script>


      
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
      text-align: center;
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
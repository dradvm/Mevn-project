<template>
  <div class="m-3" v-if="userLogin && userLogin.length" v-for="user of userLogin" :key="user._id">
      <div class="title">Change Password</div>
      <div class="d-flex justify-content-center align-items-center">  	
      <input type="checkbox" id="chk" aria-hidden="true">
        <form class="content" style="width: 100%; padding:0px 24px;" v-if="authStore.isLoggedIn"  @submit.prevent="saveChanges">
            <div class="row">
              <div class="col-sm-6">
                <span class="details">Email:</span>
                <input type="text" name="email" v-model="email" readonly>
              </div>

              <div class="col-sm-6">
                <span class="details">Password:</span>
                <input type="text" name="password" v-model="oldPassword">
          
              </div>
            </div>
              

            <div class="row">
              <div class="col-sm-6">
                <span class="details">New Password:</span>
                <input type="password" name="password"  v-model="password" pattern=".{6,}" title="Six or more characters">
              </div>

              <div class="col-sm-6">
                <span class="details">Confirm New Password:</span>
                <input type="password" name="password-confirmation" v-model="newPassConfirm">
              </div>
            </div>


            <div class="row">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" type="button" style="background-color: #22577158;">CANCEL</button>
                <button class="btn btn-primary" type="submit">SAVE</button>
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
    name: "changePass",
    data() {
      return {
        userLogin: [],
        authStore: useAuthStore(),
        isUpdate: false,
        email: '',
        password: '',
        newPassConfirm: ''

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
                    this.password = res.data.password
                    this.isUpdate = true
          
                })
                .catch((err) => console.log(err))
        },

        saveChanges() {
          console.log("Hàm save")
          var data = {
            password: this.password,

          }
          // if(this.oldPassword.match(password)){

          // } else {
          //   alert("Mật khẩu cũ khong đúng");
          //   return
          // }
          if(this.password === ""){
            alert("New password can't be blank");
            return
          } 
          else if(this.newPassConfirm.match(password)){

          } else {
            alert("Nhập lại mật khẩu mới không đúng");
            return
          }
          
          // if(this.newpasswordconfirm.match(newpassword)){

          // } else {
          //   alert("Mật khẩu mới phải giống!");
          //   return
          // }
        


          if (this.isUpdate) {
                UsersService.updateUser(this.authStore.user, data)
                .then((res) => {
                  console.log("Chạy them của save")
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
    width: 20%;
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
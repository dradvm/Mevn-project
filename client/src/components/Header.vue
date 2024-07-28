<template>
  <div class="container">
    <div class="row">
      <img src="../assets/img/background.png"/>
    </div>
  
    <div class="row">
      <div class="col-6 col-md-2">
        <RouterLink to="/">
          <img class="logo" src="../assets/img/logo.png" style="width: 200px; height: 80px; justify-content: center;"/>
        </RouterLink>
        
      </div>
      <div class="col-6 col-md-8">
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div class="col-6 col-md-2 d-flex flex-row bd-highlight mb-3">
        <div class="dropdown">
          <a class="p-2 bd-highlight" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <font-awesome-icon :icon="['fas', 'user']" style="font-size: 32px;"/>
          </a>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li v-if="!isLoggedIn"><router-link to="/register" class="dropdown-item">Sign up</router-link></li>
            <li v-else><div class="dropdown-item" @click="confirmLogout">Log out</div></li>
            <li v-if="!isLoggedIn"><router-link to="/login" class="dropdown-item">Log in</router-link></li>
            <li v-else><router-link to="/myaccount" class="dropdown-item">My account</router-link></li>
          </ul>

        </div>
        
        <router-link class="p-2 bd-highlight" to="/cart" v-if="isLoggedIn">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" style="font-size: 32px;"/>
        </router-link>

        <router-link class="p-2 bd-highlight" to="/order" v-if="isLoggedIn">
          <font-awesome-icon :icon="['fas', 'receipt']" style="font-size: 32px;"/>
        </router-link>
        
      </div>
    </div>
  
    <!-- Columns are always 50% wide, on mobile and desktop -->
    <div class="row" style="height: 40px; background-color: #225771;">
      <nav class="nav">
        <a class="nav-link" aria-current="page"><RouterLink to="/" style="color: #fff;">Home</RouterLink></a>
        <a class="nav-link"><RouterLink to="/about" style="color: #fff;">About</RouterLink></a>
        <a class="nav-link"><RouterLink to="/myshop" style="color: #fff;">My Shop</RouterLink></a>
        
        
      </nav>
    </div>
  </div>
    

    
</template>
<style scoped>
  :root {
      --text: #212425;
      --nav: #225771;
      --orange: #EF8121;
      --text: #021534;
      --head: #F3FBFF;
  }

  .container{
    max-width: 1620px;
    font-family: 'Jost', sans-serif;
  }

  .d-flex{
    justify-content: center;
    padding-top: 28px;
  }
  input{
    border: 1px solid #225771;
  }
  button{
    border: 1px solid #225771;
    color: #212425;
  }
  button:hover{
    background-color: #225771;
    color: #fff
  }
  .p-2{
    justify-content: center;
    display: flex;
    padding-top: 20px;
    margin: 0px 12px;
    color: #225771;
    width: 40px;
    height: 40px;
    padding: 20px;
  }

  .nav-link{
    height: 40px;
    font-size: 20px;
    justify-content: center;
    display: flex;
    text-align: center;
    padding: 4px 24px;
  }

</style>

<script>

import { useAuthStore } from '@/stores/counter';
import { useRouter } from 'vue-router';

export default {
  computed: {
    isLoggedIn() {
      return useAuthStore().isLoggedIn;
    },
  },
  methods: {
    confirmLogout() {
      console.log("confirmLogout");
      // Hiển thị cửa sổ xác nhận trước khi đăng xuất
      if (confirm("Are you sure you want to log out?")) {
        this.logout();
      }
    },
    logout() {
      const authStore = useAuthStore();
      authStore.logout();
      const router = useRouter();
      this.$router.push({name: "login"});
    },
  },
};

</script>
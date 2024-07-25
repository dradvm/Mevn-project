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
            <li><a class="dropdown-item"><RouterLink :to="isLoggedIn ? '/logout' : '/login'" style="color: #225771;">{{isLoggedIn ? 'Log out' : 'Log in'}}</RouterLink></a></li>
            <li><a class="dropdown-item"><RouterLink :to="isLoggedIn ? '/information' : '/register'" style="color: #225771;">{{isLoggedIn ? 'My Account' : 'Sign up'}}</RouterLink></a></li>
          </ul>
        </div>


        <a href="/cart" class="p-2 bd-highlight">
          <font-awesome-icon :icon="['fas', 'cart-shopping']" style="font-size: 32px;"/>
        </a>
        <a href="/order" class="p-2 bd-highlight">
          <font-awesome-icon :icon="['fas', 'receipt']" style="font-size: 32px;"/>
        </a>
        
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
export default {
	name: "Header",
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    loginSuccessful(){
      this.isLoggedIn = true;
    }
  }
}

</script>
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
        <a href="#" class="p-2 bd-highlight">
          <font-awesome-icon :icon="['fas', 'user']" style="font-size: 32px;"/>
        </a>
        <a href="#" class="p-2 bd-highlight">
          <font-awesome-icon :icon="['fas', 'cart-shopping']" style="font-size: 32px;"/>
        </a>
        <a href="#" class="p-2 bd-highlight">
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
        <a class="nav-link"><RouterLink to="/login" style="color: #fff;">Login</RouterLink></a>
        <a class="nav-link"><RouterLink to="/register" style="color: #fff;">Sign up</RouterLink></a>
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


<!-- <div class="vstack gap">
        <div class="header-top">

        </div>

        <div class="header-mid">
          <a class="navbar-brand" href="../views/Home.vue">
            <img src="../assets/logo.png" class="logo"/>
          </a>
          <h1>Tìm kiếm</h1>
        </div>

        <div class="header-menu">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../views/Home.vue">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>
                    <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
              </nav>
        </div>



    </div> -->
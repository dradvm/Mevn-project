<template>
  <div class="container">
    <div class="row">
      <img src="../assets/img/background.png"/>
    </div>
  
    <div class="row">
      <div class="col-6 col-md-4">
        <RouterLink to="/">
          <img class="logo" src="../assets/img/logo.png" style="width: 80px; height: 80px; justify-content: center;"/>
        </RouterLink>
        
      </div>
      <div class="col-6 col-md-4">
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div class="col-6 col-md-4" style="text-align: end;">TK ĐH GH</div>
    </div>
  
    <!-- Columns are always 50% wide, on mobile and desktop -->
    <div class="row" style="background-color: #225771;">
      <div class="col-4">Trang chủ  Sản phẩm</div>
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
  }

  .d-flex{
    justify-content: center;
    padding-top: 24px;
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
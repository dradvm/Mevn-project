<template>
    <div class="container">
        <div class="row">

          <div class="col">
            <div class="vstack gap">
                <img src="../assets/img/logo.png" style="width: 200px; height: 80px; justify-content: center; margin-top: 20px;"/>
            </div>
            <p class="content">
                ONLINE SHOP is an e-commerce platform in Vietnam.
            </p>
          </div>


          <div class="col">
            <p class="tilte">INFORMATION</p>
            <div class="vstack gap">
                <a><RouterLink to="/about">About Shopee Vietnam</RouterLink></a>
                <a href="#">Recruitment</a>
                <a href="#">Shopee Terms</a>
            </div>
          </div>


          <div class="col">
            <p class="tilte">CUSTOMER CARE</p>
            <div class="vstack gap">
                <a href="#">Shopping</a>
                <a href="#">Sales</a>
                <a href="#">Pay</a>
                <a href="#">Privacy Policy</a>
            </div>
            
          </div>


          <div class="col">
            <p class="tilte">PAYMENT</p>
            <div class="d-flex">
                <img src="../assets/img/momo.png" style="width: 60px; height: 60px; margin-right: 12px;"/>
                <img src="../assets/img/VietcomBank.png" style="width: 120px; height: 60px;"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12" style="background-color: #225771; height: 40px;">
                <p class="bottom">Bản quyền thuộc về Online Shop.</p>
            </div>
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
    --footer: #CEE6F2;
}
    .container{
        max-width: 1620px;
        font-family: 'Jost', sans-serif;
        background-color: #CEE6F2;
    }
    .col{
        margin: 0px 12px;
    }
    a{
        color: #212425;
        margin-bottom: 4px;
    }
    .tilte{
        margin: 24px 0px;
        font-size: 1.2em;
        font-weight: 500;
        color: #225771;
    }
    .bottom{
        justify-content: center;
        text-align: center;
        margin: 8px auto;
        color: #fff;
    }
</style>
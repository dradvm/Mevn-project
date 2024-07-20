<template>
  <!-- <br> -->
  <div class="main">
    <div class="card" style="width: 18rem;" v-if="items && items.length" v-for="item of items" :key="item.name_product">
        <img class="card_img" :src=" item.image " alt="Ảnh sản phẩm">
      <div class="card_body">       
          <h5 class="card_name">{{ item.name_product}}</h5>       
        <h6 class="card_price">{{ item.price }}đ</h6>
        <router-link :to="'/detail/' + item.name_product" class="routerlink">Mua Ngay</router-link>
      </div>
      <br>
    </div>
  </div>
  
</template>

<script>
    import ProductService from '@/services/ProductService';
    // import { toast } from 'vue3-toastify';
    export default {
      name: "Home",
      data() {
        return {
            items: [],
        }
      },
        created() {
          ProductService.getAll()
            .then((res) => {
              this.items = res.data
            })
            .catch((err) => console.log(err))
        },
}

</script>

<style>
  .routerlink {
    color: blue;
    margin: 0px 33% 0px;
    border-style: solid;
    border-radius: 5px;
    padding: 5px;
  }
  .routerlink.router-link-active,
    .my-link.router-link-exact-active {
        /* Màu cho liên kết khi đã được truy cập hoặc đang kích hoạt */
        color: purple;
    }

    .routerlink:hover {
        /* Màu khi di chuột qua liên kết */
        color: green;
    }
  .card {
    border: 5px solid rgba(30, 144, 255, 0.5);
    margin: auto;
  }
  .card_name {
    text-align: center;
    font-size: 30px;
  }
  .card_price {
    text-align: center;
    font-size: 25px;
    color: red
  }
  .main {
    background-color: rgba(0, 255, 255, 0.2);
  }
  .button_text {
    border-style: solid;
    border-radius: 5px;
    padding: 5px;
    /* background-color: red; */
    color: whitesmoke;
  }
  .button {
    margin: 5px 33% 5px;
  }
  
</style>

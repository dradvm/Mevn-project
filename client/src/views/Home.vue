<template>

  <div class="main">
    <div class="card" style="width: 18rem;" v-if="items && items.length" v-for="item of items">
        <img class="card_img" :src=" item.image " alt="Ảnh sản phẩm">
      <div class="card_body">
        <a href="/detail">
          <h5 class="card_name">{{ item.name_product}}</h5>
        </a>
        <h6 class="card_price">{{ item.price }}</h6>
        <button class="button"> <a href="/detail" ><h5 class="button_text">Mua ngay</h5></a></button>
      </div>
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
        }
      }

</script>

<style>
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
    margin: auto;
    columns: auto;
    column-width: auto;
    


  }
  .button_text {
    border-style: solid;
    border-radius: 5px;
    padding: 5px;
    background-color: blue;
    color: whitesmoke;
  }
  .button {
    margin: 5px 33% 5px;
  }
  
</style>

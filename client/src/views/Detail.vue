<template>
  <div class="card" style="width: 18rem;" v-if="items && items.length" v-for="item of items">
    <img class="card_img" :src=" item.image " alt="Ảnh sản phẩm">
      <div class="card_body">
        <a href="/detail">
          <h5 class="card_name">{{ item.name_product}}</h5>
        </a>
        <h6 class="card_price">{{ item.price }}</h6>
  </div>
  </div>
</template>

<script>
import ProductService from '@/services/ProductService';
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    // Lấy giá trị của productId từ Vue Router
    this.productName = this.$route.params.productName;
    ProductService.showOne(this.productName)
            .then((res) => {
              this.items = res.data
            })
            .catch((err) => console.log(err))
  },
  // methods: 
  
};
</script>

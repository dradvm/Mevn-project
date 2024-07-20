<template>
    <div>
      <hr>
      <div class="text" v-if="items && items.length" v-for="item of items">
        <iframe width="560" height="315" :src="item.video"  frameborder="0" allowfullscreen></iframe>
        <hr>
        <h1>{{ item.name_product }}</h1>
        <h4 style="color: red;">Giá: {{ item.price }}đ</h4>
        <hr>
        <h3>Information:</h3>
          <p>fromUserShop: {{ item.fromUserShop }}</p>
          <p>quantity: {{ item.quantity }}</p>
          <p>screen: {{ item.screen }}</p>
          <p>operating_system: {{ item.operating_system }}</p>
          <p>front_camera: {{ item.front_camera }}</p>
          <p>rear_camera: {{ item.rear_camera }}</p>
          <p>chip: {{ item.chip }}</p>
          <p>ram: {{ item.ram }}</p>
          <p>Storage_capacity: {{ item.Storage_capacity }}</p>
          <p>pin: {{ item.pin }}</p>
          <p>charger: {{ item.charger }}</p>
      </div>
</div>
<hr>
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
    this.productName = this.$route.params.productName;
    ProductService.showOne(this.productName)
            .then((res) => {
              this.items = res.data
            })
            .catch((err) => console.log(err))
  },
  
};
</script>

<style>
  .text {
    text-align: center;
    font-size: 20px;
  }
  
</style>

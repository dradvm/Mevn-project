<template>

    <div class="text">
      <hr>
      <div>
        <div class="header-container">
          <div>
            <br>
            <iframe width="560" height="385" :src="item.display.video"  frameborder="0" allowfullscreen></iframe>
          </div>
          <div>
            <br>
            <h1> {{ item.name_product }}</h1>
            <h4 style="color: crimson;">{{ item.price }}đ</h4>
            <div>
              <div class="cards-container">
                <div v-for="(image, index) in item.display.images" :key="index">
                  <img :src="image" alt="Image {{ index + 1 }}">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
        <h4>Mẫu mã: </h4>
        <div class="quality-container">
          <div class="alert alert-primary" role="alert" v-if="item.quantityList && item.quantityList.length" v-for="index of item.quantityList">
            {{ index.properties }} <br>
            SL: {{ index.quantity }}
          </div>
        </div>
      <hr>
      <div class="product-description">
        <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggleDropdown">Infomation
        </button>
        <div v-if="showDropdown">
          <p><pre>{{ item.description }}</pre></p>
        </div>
      </div>
      <hr>

    </div>
    
    
</template>

<script>
import ProductService from '@/services/ProductService';
export default {
  data() {
    return {
      showDropdown: false,
      item: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    ProductService.showOne(this.id)
            .then((res) => {
              this.item = res.data
            })
            .catch((err) => console.log(err))
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown; // Khi bấm vào nút, hiển thị/ẩn dropdown
    }
  }
};
</script>

<style>
  .text {
    text-align: center;
    font-size: 20px;
  }
  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:space-around /* Hoặc sử dụng space-around, space-evenly, etc. */
  }
  .header-container {
    display: flex;
    /* justify-content: space-evenly; */
    /* flex-direction: row; */
    /* flex-wrap: nowrap; */
    height:auto;
    width: auto;
  }
  .cards-container img {
    max-width: 100%; /* Điều chỉnh kích thước ảnh theo ý muốn */
    margin: 0px;
  }
  .product-description {
    margin:0px 15% 0px;
    text-align: left;
    font-size: 12px;
    
  }
  .quality-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:space-around
  }
</style>

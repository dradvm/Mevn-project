<template>
    <div class="text">
      <div>
        <div class="header-container">
          <div>
            <br>
            <h1> {{ item.name_product }}</h1>
            <h4 style="color: crimson;">{{ item.price }}đ</h4>
            <div>
              <div class="cards-container">
                <div v-for="image of item.display.images">
                  <img :src="image" :alt="'Ảnh ' + item.name_product">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
        <h4>Chọn loại mẫu mã: </h4>
        <div class="quality-container">
          <div v-if="item.quantityList && item.quantityList.length" v-for="index of item.quantityList">
            <button class="button" @click="handleChoose(index.properties)">
            <div> 
              {{ index.properties }} <br>
              SL: {{ index.quantity }}
            </div>
            <!-- <select name="mySelect">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select> -->
          </button>
          </div>
        </div>
      <hr>
        <h4>Lựa chọn của bạn: {{ chooseType }}</h4>
        <div class="quality">
          <button class="editQuality" @click="decrement">-</button>
          <input class="editQuality" v-model="chooseQuality" placeholder="Enter your quantity"/>
          <button class="editQuality" @click="increment">+</button>
        </div>
        <div>
          <button class="button" @click="addTocart(item._id)">Thêm vào giỏ hàng</button>
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
      <div>
            <br>
            <iframe width="560" height="385" :src="item.display.video"  frameborder="0" allowfullscreen></iframe>
          </div>
      <hr>

    </div>
    
    
</template>

<script>
import ProductService from '@/services/ProductService';
import CartService from '@/services/CartService';
export default {
  data() {
    return {
      showDropdown: false,
      item: [],
      chooseType: "",
      chooseQuality: 0,
      idOfProduct: "",
      index: 0,
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
    },
    increment() {
        this.chooseQuality++;
    },
    decrement() {
      if (this.chooseQuality > 1) {
        this.chooseQuality--;
      }
    },
    addToCart(id) {
      this.idOfProduct= id;
      CartService.addToCart(this.idOfProduct, this.chooseType, this.chooseQuality)
        .then((res) => alert("Đăng ký thành công!"))
        .catch((err) => alert("Đăng ký không thành công!"))
    },
    handleChoose(option) {
      this.chooseType = option;
    },
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
    /* flex-direction: row; */
    /* flex-wrap: nowrap; */
    justify-content:space-around;
    /* border-style: solid; */

  }
  .button {
    border: 2px solid blue;
    border-radius: 8px;
    margin: 5px;
    padding: 5px;
  }
  .button:hover {
    border: 2px solid red;
  }
  .button:active {
    border: 2px solid red;
  }
  .quality {
    text-align: center;
    margin: 0px 33% 0px;
  }
  .editQuality {
    /* border: 2px solid blue; */
    width: 50px;
    text-align: center;
    border: 2px solid blue;
  }
</style>

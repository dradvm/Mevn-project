<template>
    <div class="text">
      <div>
        <div class="header-container">
          <div>
            <br>
            <h1> {{ item.name_product }}</h1>
            <h2 style="color: crimson;">{{ item.price }}đ</h2>
            <div>
              <div class="cards-container">
                <div v-for="image in item.display.images">
                    
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
          </button>
          </div>
        </div>
      <hr>
        <h4>Mẫu bạn đã chọn: <h4 style="color:red;">{{ chooseType }}</h4></h4>
        <h4>Chọn số lượng:</h4>
        <div class="quality">
          <button class="editQuality" @click="decrement">-</button>
          <input class="editQuality" style="color:red;" v-model="chooseQuality" placeholder="Enter your quantity"/>
          <button class="editQuality" @click="increment">+</button>
        </div>
        <div>
          <button class="button" @click="addToCart">Thêm vào giỏ hàng</button>
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
      <div v-if="item.display.video!=''">
        <br>
          <iframe width="560" height="385" :src="item.display.video"  frameborder="0" allowfullscreen></iframe>
          <hr>
      </div>

    </div>
    
    
</template>

<script>
  import ProductService from '@/services/ProductService';
  import CartService from '@/services/CartService';
  import { useAuthStore } from '@/stores/counter';
  export default {
    data() {
      return {
        showDropdown: false,
        item: [],
        idOfProduct: "",
        chooseType: "",
        chooseQuality: 0,
        authStore: useAuthStore(),
        check: false,
      };
    },
    created() {
      this.idOfProduct = this.$route.params.id;
      ProductService.showOne(this.idOfProduct)
              .then((res) => {
                this.item = res.data
                console.log(this.item)
              })
              .catch((err) => console.log(err))
      // this.idOfProduct = item._id
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      },
      increment() {
          this.chooseQuality++;
      },
      decrement() {
        if (this.chooseQuality > 1) {
          this.chooseQuality--;
        }
      },
      addToCart() {
        if(this.authStore.isLoggedIn) {
          this.check = true;
          this.validateType()
          this.validateQuality()
          if(this.check == true) {
            alert("Id_SP: "+this.idOfProduct+ "\ntype: "+this.chooseType+ "\nquality: "+this.chooseQuality+ "\nId_User: "+this.authStore.idUser);
          }
        }
        else {
          alert('Hãy đăng nhập để thêm được sản phẩm')
          this.$router.push('/login');
        }
      },
      handleChoose(option) {
        this.chooseType = option;
      },
      validateType() {
        if(this.chooseType == ""){
            alert("Hãy chọn mẫu sản phẩm ");
            // document.focus();
            this.check = false;
            return false;
          }
      },
      validateQuality() {
        if(this.chooseQuality == 0){
            alert("Hãy chọn số lượng sản phẩm ");
            // document.focus();
            this.check = false;
            return false;
          }
      },

    }
  };

</script>

<style scoped>
  .text {
    text-align: center;
    font-size: 20px;
  }
  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:space-around 
  }
  .header-container {
    display: flex;
    height:auto;
    width: auto;
  }
  .cards-container img {
    max-width: 100%; 
    margin: 0px;
  }
  .product-description {
    margin:0px 33% 0px;
    text-align: left;
    font-size: 12px;
    
    
  }
  .quality-container {
    display: flex;
    justify-content:space-around;
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
    width: 50px;
    text-align: center;
    border: 2px solid blue;
  }
</style>

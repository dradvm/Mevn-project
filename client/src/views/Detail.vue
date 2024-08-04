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
      </div>
      <hr>
      <div class="w-100 overflow-x-scroll text-start">
        <div class="d-flex" :style="{'width': (vouchers.length+1)*500 + 'px' }">
          <div class="d-flex ms-5 border" style="width: 500px" v-for="voucher in vouchers">
            <div style="width: 25%;">
              <img src="../assets/img/voucher.jpg" class="w-100 h-100" />
            </div>
            <div class="px-3 py-2 d-flex flex-column justify-content-between" style="width: 70%">
              <div>
                <div class="fs-6 fw-medium text-center">{{ getTitleVoucher(voucher) }}</div>
                <div class="fs-7" v-html="getDetailVoucher(voucher)">
                </div>
              </div>
              <div>
                <button @click="saveVoucher(voucher)" class="fs-6 fw-medium w-100 bg-primary py-1" :class="{'btn-dis': voucher.checkSave}" :disabled="voucher.checkSave">{{ !voucher.checkSave ? "Save" : "Saved" }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
</template>

<script>
  import ProductService from '@/services/ProductService';
  import CartService from '@/services/CartService';
  import { useAuthStore } from '@/stores/counter';
import VoucherService from '@/services/VoucherService';
import { toast } from 'vue3-toastify';
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
        vouchers: []
      };
    },
    created() {
      this.idOfProduct = this.$route.params.id;
      ProductService.showOne(this.idOfProduct)
              .then((res) => {
                this.item = res.data
              })
              .catch((err) => console.log(err))
      // this.idOfProduct = item._id
      this.fetchVoucherList()
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
            // alert("Id_SP: "+this.idOfProduct+ "\ntype: "+this.chooseType+ "\nquality: "+this.chooseQuality+"\nGiá: "+this.item.price+ "\nId_User: "+this.authStore.idUser);
            alert("Thêm sản Phẩm vào giỏ hàng thành công !!!")
            CartService.addToCart(this.idOfProduct, this.chooseType, this.chooseQuality, this.item.price, this.authStore.idUser)
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
      fetchVoucherList() {
        VoucherService.getVoucherListByProduct(this.idOfProduct, this.authStore.idUser)
          .then((res) => this.vouchers = res.data.map((item) => {
            return {
              ...item,
              checkSave: false
            }
          }))
          .catch((err) => console.log(err))
      },
      getTitleVoucher(voucher) {
        var str = ["Giảm"]
        if (voucher.type.includes("Percent")) {
          str.push(`${voucher.discount*100}%`)
          if (voucher.maxDiscount != 0) {
            str.push(`Giảm tối đa ${this.currency(voucher.maxDiscount)}`)
          }
        }
        else {
          str.push(`${this.currency(voucher.discount)}`)
        }
        return str.join(" ")
      },
      getDetailVoucher(voucher) {
        var str = []
        if (voucher.type.includes("First")) {
          str.push("Áp dụng cho đơn hàng đầu tiên<br/>")
        }
        if(!voucher.type.includes("One")) {
          if (voucher.condition === "<=") {
            str.push(`Đơn tối đa ${this.currency(voucher.conditionDiscount)}<br/>`)
          }
          else if (voucher.condition === ">=") {
            str.push(`Đơn tối thiểu ${this.currency(voucher.conditionDiscount)}<br/>`)
          }
        }
        str.push(`Hiệu lực từ ${this.getDateString(voucher.startDate)}`)
        return str.join(" ")
      },
      currency(value, locale = 'vi-VN', currency = 'VND') {
          if (typeof value !== "number") {
              value = parseFloat(value);
          }
          return new Intl.NumberFormat(locale, {
              style: 'currency',
              currency: currency
          }).format(value);
      },
      getDateString(date) {
          const pad = (n) => n < 10 ? "0" + n : "" + n
          date = new Date(date)
          return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      },
      saveVoucher(voucher) {
        VoucherService.saveVoucher(voucher._id, this.authStore.idUser)
          .then((res) => {
            voucher.checkSave = true
          })
          .catch((err) => {
            toast(err, {
              type: 'error',
              autoClose: 2000
            })
          })
      }
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
  button {
    position: relative;
    transition: .2s
  } 
  button:hover {
      transform: translateY(-2px);
  }
  button:active {
      transform: translateY(-1px)
  }
  button.btn-dis {
      background-color: #bbb !important;
      color: white !important;
  }
  button.btn-dis:active {
      transform: translateY(0px);
  }
  button.btn-dis {
      transform: translateY(0px);
  }
</style>

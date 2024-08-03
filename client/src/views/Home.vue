<template>
  <div>
    <div v-if="authStore.isLoggedIn">
      <div>
        <h1 style="text-align: center;">Chào bạn:   {{ this.userLogin[0].name }} </h1>
        {{ this.getIdUser(this.userLogin[0]._id) }}
        {{ this.checkCartExist() }}
        {{ this.createCart() }}
        {{ this.addUserInfor(this.userLogin[0]._id, this.userLogin[0].name) }}
      </div>
    </div>
    <div class="main image-container">
      <div class="card" style="width: 18rem;" v-if="items && items.length" v-for="item of items" :key="item._id">
          <img class="card_img" :src=" item.display.coverPhoto " alt="Ảnh sản phẩm">
        <div class="card_body">       
            <h5 class="card_name">{{ item.name_product}}</h5>       
          <h6 class="card_price">{{ item.price }}đ</h6>
          <router-link :to="'/detail/' + item._id" class="routerlink">Xem Ngay</router-link>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
    import ProductService from '@/services/ProductService';
    import UsersService from '@/services/UsersService';
    import CartService from '@/services/CartService';
    import { useAuthStore } from '@/stores/counter';
    // import { toast } from 'vue3-toastify';
    export default {
      name: "Home",
      data() {
        return {
            items: [],
            emailUser: '',
            userLogin: [],
            userId: "",
            CartExist: null,
            Cart: {
              userId: "",
              items: [],
              createdAt: "",
              updatedAt: ""
            },
            authStore: useAuthStore(),
        }
      },
        created() {
          this.getProducts(),
          this.emailUser = this.authStore.user;
          this.getUser(this.emailUser)

        },
        methods: {
          getProducts() {
            ProductService.getAll()
            .then((res) => {
              this.items = res.data
            })
            .catch((err) => console.log(err))
          },
          getUser(Email) {
            UsersService.checkAccount(Email)
            .then((res) => {
              this.userLogin = res.data
            })
            .catch((err) => console.log(err))
          },
          getIdUser(Id) {
            this.userId= Id
          },
          checkCartExist() {
              CartService.CartExist(this.userId)
              .then((res) => {
                this.CartExist = res.data.isExist
              })
              .catch((err) => console.log(err))
          },
          createCart() {
            if(this.CartExist === false) {
              this.Cart.userId= this.userId
              CartService.createCart(this.Cart)
            }  
          },
          addUserInfor(Id,name) {
            const authStore = useAuthStore();
			      authStore.addInfor(Id,name)
      },
        },
        
}

</script>

<style scoped>
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
    color: green;
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
  .image-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start; /* Hoặc sử dụng space-around, space-evenly, etc. */
    
  }
  .card {
    border: 5px solid rgba(30, 144, 255, 0.5);
    max-width: 100%; 
    margin: 0px;
  }
</style>

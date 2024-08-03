<template>
    <div class="information-shop">
        <div class="row">
            <div class="col">
                <div class="shop d-flex align-items-center">
                    <img src="../assets/img/shop-random.jpg" alt="Circular Image" class="avt-shop">
                    <p class="name-shop">Name</p> 
                  </div>
                
                
            </div>
            <div class="col">
                <div class="count-product d-flex align-items-center">
                  <font-awesome-icon :icon="['fas', 'store']" class="mr-2" />
                  <p class="mb-0">Product: </p>
                </div>
              </div>
        </div>

        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Product</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                    </div>
                </div>
            </nav>
        </div>
        <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div class="card-container">
                <div class="card" style="width: 14rem;" v-if="items && items.length" v-for="item of items" :key="item._id">
                    <img class="card_img" :src=" item.display.coverPhoto " alt="Ảnh sản phẩm">
                    <div class="card_body">       
                        <h5 class="card_name">{{ item.name_product}}</h5>       
                        <h6 class="card_price">{{ item.price }}đ</h6>
                        <router-link :to="'/detail/' + item._id" class="detail">Xem Ngay</router-link>
                  </div>
                  <br>
                </div>
            </div>

            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <h1>Chưa có thông tin giới thiệu shop</h1>
            </div>

        </div>


    </div>
</template>

<style scoped>
    .information-shop{
        font-family: 'Jost', sans-serif;
        margin: 24px;
    }
    .card{
        border-radius: 4px;
        box-shadow: 5px 5px 5px #CEE6F2;
        margin: 4px;
        width: 100%;
        margin-bottom: 8px;
    
    }
    .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .detail{
        color: #225771;
        margin: 0px 30% 0px;
        border-radius: 4px;
        background-color: #cee6f285;
    }
    .detail:hover {
        color: #EF8121;
        background-color: #fff;
    }
    .avt-shop {
        width: 80px; 
        height: 80px; 
        overflow: hidden;
        border-radius: 50%;
        object-fit: cover;
    }
      
    .card_name {
        text-align: center;
        font-size: 20px;
    }
    .card_price {
        text-align: center;
        font-size: 25px;
        color: red;
        font-weight: bold;
        
    }
    .main {
        background-color: rgba(0, 255, 255, 0.2);
    }
    .button_text {
        border-style: solid;
        border-radius: 5px;
        padding: 5px;
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

  

</style>
<script>
    import ProductService from '@/services/ProductService';
    import UsersService from '@/services/UsersService';
    import { useAuthStore } from '@/stores/counter';
    // import { toast } from 'vue3-toastify';
    export default {
      name: "InformationOfShop",
      data() {
        return {
            items: [],
            emailUser: '',
            userLogin: [],
            userId: "",
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
          addUserInfor(Id,name) {
            const authStore = useAuthStore();
			      authStore.addInfor(Id,name)
      },
        },
        
}

</script>
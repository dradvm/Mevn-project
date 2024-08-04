<template>
    <!-- <div>
        <h6>{{ order[1].status }}</h6>
    </div> -->
    
    <div class="main">
        <div class="div-title">
        <h1 class="title">Orders-Product</h1>
        <!-- <h4>User: {{ authStore.nameUser }}</h4> -->
        </div>
            <div class="body" style="border-bottom: 2px solid;">
                <div class="order" v-if="order && order.length" v-for="index in order" :key="index._id">
                    <div class="Order_Id"> 
                        <h5 style="font-size: 14px;">Order Id: {{ index._id }}</h5>
                    </div>
                    
                    <p class="Order_status" style="font-size: 14px;">Status: 
                        <span :class="{'text-green': index.status === 'Pending', 'text-red': index.status === 'Cancelled'}">
                            {{ index.status }}
                        </span>
                    </p>
                    <p class="Order_totalPrice">TotalAmount: {{ index.totalAmount }}đ</p>
                    <div class="Order_Voucher">
                        <button class="Voucher-dropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggleDropdown">Id Vouchers</button>
                        
                            <div v-if="showDropdown">

                                        <div v-for="voucher in index.voucher" :key="voucher._id">
                                            <p style="margin-bottom: 5px;">{{ voucher }}</p>
                                        </div>          
                            </div>
                    </div>
                    <div class="ship">
                        <h5>Shipping:</h5>
                        <div>
                            <div v-for="shipping in index.shipping" :key="shipping._id">
                                    <p>Address: {{ shipping.address }}</p>
                                    <p>ShippingCost: {{ shipping.shippingCost }}</p>
                                    <p>ShippingMethod: {{ shipping.shippingMethod }}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>Payment:</h5>
                        <div>
                            <p>Method: {{ index.payment.method }}</p>
                            <p>TransactionId: {{ index.payment.transactionId }}</p>
                            <p>StatusPayment: {{ index.payment.statusPayment }}</p>
                        </div>
                    </div>
                    <div>
                        <div class="sgsv">
                        <RouterLink class="routerlink delete-Order" to="/order" @click="deleteOrder(index._id)" v-if="index.status == 'Pending'">Hủy Đơn</RouterLink>
                    </div>
                    </div>
                    
                <hr>
                </div>
                
            </div>
    </div>
</template>

<script>
    import OrderService from '@/services/OrderService';
    import { useAuthStore } from '@/stores/counter';
    export default {
        name: "Cart",
        data() {
            return {
                order: [],
                authStore: useAuthStore(),
                showDropdown: false,
        }
        },
        created() {
           this.getOrder(this.authStore.idUser)
        },
        methods: {
            getOrder(userId) {
                OrderService.findOfUser(userId)
                    .then((res) => {this.order = res.data})
                    .catch((err) => console.log(err))
            },
            deleteOrder(id) {
                OrderService.deleteOrder(id)
                this.getOrder(this.authStore.idUser)
            },
            toggleDropdown() {
                this.showDropdown = !this.showDropdown;
            },
        }
}

</script>

<style scoped>
    .main {
        text-align: center;
    }
    .title{
      color: #225771;
      font-size: 2.5em;
      justify-content: center;
      display: flex;
      font-weight: bold;
      cursor: pointer;
      margin: 20px auto;
      text-shadow: 2px 2px 3px  #EF8121;
      text-align: center;
    }
    .delete-Order {
        font-size: 20px;
        font-weight: bold;
        border: 2px solid green;
        border-radius: 8px;
        padding: 5px;
    }
    .routerlink {
    color: blue;
    margin: 0px 33% 0px;
    border-style: solid;
    border-radius: 5px;
    padding: 5px;
  }
  .routerlink.router-link-active,
    .my-link.router-link-exact-active {
      color: green;
    }

  .routerlink:hover {
    color: red;
    border: 2px solid red;
  }
  .order {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border-top: 2px solid;
    height: 147px;
  }
  .div-title {
    /* border-bottom: 2px solid; */
    /* border-top: 2px solid; */
    margin: 30px 0px 30px;
    padding: 10px;
  }
  .Order_Id {
    width: 175px;
    margin: 0px;
    padding: 50px 0px 50px;
    box-sizing: border-box;
  }
  .Order_status {
    width: 112px;
    margin: 0px;
    padding: 65px 0px 60px;
    /* border: 1px solid red; */
    box-sizing: border-box;
  }
  .Order_totalPrice {
    width: 150px;
    margin: 0px;
    padding: 40px 0px 40px;
    /* border: 1px solid red; */
    box-sizing: border-box;
  }
  .Order_Voucher {
    width: 300px;
    margin: 0px;
    padding: 10px 0px 10px;
    /* border: 1px solid; */
    box-sizing: border-box;
  }
  .Voucher-dropDown {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        margin: 0px 80px 0px 90px;
        cursor: pointer;
        box-sizing: border-box;
        
    }
    .Voucher-dropDown:hover {
        background-color: #0056b3;
    }
    .sgsv {
        width: 200px;
    }

</style>
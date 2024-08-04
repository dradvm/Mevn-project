<template>
    <!-- <div>
        <h6>{{ order[1].status }}</h6>
    </div> -->
    
    <div class="main">
        <hr>
        <h1 class="title">Orders-Product</h1>
        <h4>User: {{ authStore.nameUser }}</h4>
        <h3>User Id: {{ authStore.idUser }}</h3>
        <hr>
            <div>
                <div v-if="order && order.length" v-for="index in order" :key="index._id">
                    <h5>Order Id: {{ index._id }}</h5>
                    <h6>Cart ID: {{ index.cartId }}</h6>
                    <p style="color: red;">Status: {{ index.status }}</p>
                    <p>TotalAmount: {{ index.totalAmount }}</p>
                    <h5>Vouchers:</h5>
                        <div>
                            <div v-for="voucher in index.voucher" :key="voucher._id">
                                        <p>Voucher ID: {{ voucher }}</p>
                            </div>
                        </div>
                    <h5>Shipping:</h5>
                        <div>
                            <div v-for="shipping in index.shipping" :key="shipping._id">
                                        <p>Address: {{ shipping.address }}</p>
                                        <p>ShippingCost: {{ shipping.shippingCost }}</p>
                                        <p>ShippingMethod: {{ shipping.shippingMethod }}</p>
                            </div>
                        </div>
                    <h5>Payment:</h5>
                        <div>
                            <p>Method: {{ index.payment.method }}</p>
                            <p>TransactionId: {{ index.payment.transactionId }}</p>
                            <p>StatusPayment: {{ index.payment.statusPayment }}</p>
                        </div>
                    <div>
                        <button v-if="index.status !== 'Received'" class="delete-Order"> Hủy Đơn Hàng</button>
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
            }
        }
}

</script>

<style>
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
        border: 5px solid green;
        border-radius: 8px;
        padding: 5px;
    }
    .delete-Order:hover {
        border: 5px solid red;
    }

</style>
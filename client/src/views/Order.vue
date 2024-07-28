<template>
    <div class="main">
        <h1>Orders-Product</h1>
        <hr>
            <div>
                <div v-if="orders && orders.length" v-for="order in orders" :key="order._id">
                    <h2>Order Id: {{ order._id }}</h2>
                    <h3>User Id: {{ order.userId }}</h3>
                    <h3>Cart ID: {{ order.cartId }}</h3>
                    <p>Status: {{ order.status }}</p>
                    <p>TotalAmount: {{ order.totalAmount }}</p>
                    <p>Created At: {{ order.createdAt }}</p>
                    <p>Updated At: {{ order.updatedAt }}</p>
                    <h3>Vouchers:</h3>
                        <div>
                            <div v-for="voucher in order.voucher" :key="voucher._id">
                                        <p>Voucher ID: {{ voucher }}</p>
                            </div>
                        </div>
                    <h3>Shipping:</h3>
                        <div>
                            <div v-for="shipping in order.shipping" :key="shipping._id">
                                        <p>Address: {{ shipping.address }}</p>
                                        <p>ShippingCost: {{ shipping.shippingCost }}</p>
                                        <p>ShippingMethod: {{ shipping.shippingMethod }}</p>
                            </div>
                        </div>
                    <h3>Payment:</h3>
                        <div>
                            <p>Method: {{ order.payment.method }}</p>
                            <p>TransactionId: {{ order.payment.transactionId }}</p>
                            <p>StatusPayment: {{ order.payment.statusPayment }}</p>
                        </div>
                <hr>
                </div>
            </div>
    </div>
</template>

<script>
    import OrderService from '@/services/OrderService';
    export default {
      name: "Cart",
      data() {
        return {
            orders: [],
        }
      },
        created() {
            OrderService.getAll()
            .then((res) => {
              this.orders = res.data
            })
            .catch((err) => console.log(err))
        },
}

</script>

<style>
    .main {
        text-align: center;
    }
</style>
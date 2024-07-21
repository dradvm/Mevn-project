<template>
    <div class="main">
        <h1>CART-PRODUCT</h1>
        <hr>
            <div>
                <div v-if="carts && carts.length" v-for="cart in carts" :key="cart._id">
                    <h2>Cart ID: {{ cart._id }}</h2>
                    <p>User ID: {{ cart.userId }}</p>
                    <p>Created At: {{ cart.createdAt }}</p>
                    <p>Updated At: {{ cart.updatedAt }}</p>
                    <h3>Items:</h3>
                    <div>
                        <div v-for="item in cart.items" :key="item._id">
                            <p>Product ID: {{ item.productId }}</p>
                            <p>Quantity: {{ item.quantity }}</p>
                            <p>Price At Ordering: {{ item.priceAtOrdering }}</p>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
    </div>
</template>

<script>
    import CartService from '@/services/CartService';
    export default {
      name: "Cart",
      data() {
        return {
            carts: [],
        }
      },
        created() {
            CartService.getAll()
            .then((res) => {
              this.carts = res.data
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
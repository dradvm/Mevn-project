<template>
    <div class="main">
       <div class="header">
            <h1>CartProduct</h1>
            <!-- <p>{{ cart }}</p> -->
            <hr>
       </div>
       <div class="list-Product">
            <div class="list-column">
                <button class="column-checkBox">[ ]</button>
                <p class="column-Product">Product</p>
                <p class="column-Price">Unit Price</p>
                <p class="column-Quantity">Quantity</p>
                <p class="column-AllPrice">Total Price</p>
                <p class="column-Actions">Actions</p>
            </div>
            <div class="list-row"v-if="cart && cart.length" v-for="index of cart" :key="index._id">
                <div class="list-column" v-if="index.items && index.items.length" v-for="item of index.items" :key="item._id">
                    <button class="column-checkBox">[ ]</button>
                    <p class="column-Product row">Id: {{ item.productId }}</p>
                    <p class="column-Price row">{{ item.priceAtOrdering }}đ</p>
                    
                    <div class="column-Quantity">
                        <button class="editQuality" @click="decrement">-</button>
                        <input class="editQuality" :placeholder="item.quantity"/>
                        <button class="editQuality" @click="increment">+</button>
                    </div>

                    <p class="column-AllPrice row">{{ this.getPrice(item.priceAtOrdering, item.quantity) }}đ</p>
                    <button class="column-Actions">Xóa</button>
                </div>
            </div>
       </div>
       <div class="addVoucher">
            <h4 class="voucher-title">Voucher: </h4>
            <button class="Voucher-dropDown">Chọn Voucher của bạn</button>
       </div>
       <div class="checkOutCart">
            <h4>Tổng tiền: {{ priceAll }}đ</h4>
            <button class="Voucher-dropDown">Check Out</button>
       </div>
    </div>
</template>

<script>
    import CartService from '@/services/CartService';
    import { useAuthStore } from '@/stores/counter';
    export default {
    name: "Cart",
        data() {
            return {
                cart: [],
                authStore: useAuthStore(),
                priceAll: 0,
            }
        },
        created() {
            this.getCartOfUser(this.authStore.idUser)
        },
        methods: {
            getCartOfUser(idUser) {
                CartService.findOne(idUser)
                    .then((res) => {this.cart = res.data})
                    .catch((err) => console.log(err))
            },
            getPrice(priceOne, quantity) {
                var Price= priceOne*quantity;
                
                console.log(this.priceAll)
                return Price
            },
            increment() {
                this.chooseQuality++;
            },
            decrement() {
                if (this.chooseQuality > 1) {
                    this.chooseQuality--;
                }
            },
            getPriceOfCart(price, quality) {
                this.priceAll= this.priceAll+ (price*quality)
                // alert(this.priceAll)
            },
        }
}

</script>

<style scoped>
    .main {
        text-align: center;
        margin: 0px 10% 0px;
        font-size: 14;
        box-sizing: border-box;
    }
    .header {
        padding: 10px 0px 0px;
        box-sizing: border-box;
        
    }
    .column-checkBox {
        width: 50px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        border: 2px solid blue;
    }
    .column-Product {
        width: 400px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        border: 2px solid blue;
        margin: 0px;
    }
    .row-Product {
        width: 50px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        border: 2px solid blue;
        margin: 0px; 
    }
    .column-Price {
        width: 150px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        border: 2px solid blue;
        margin: 0px;
    }
    .column-Quantity {
        width: 200px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        border: 2px solid blue;
        margin: 0px;
    }
    .column-AllPrice {
        width: 250px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        border: 2px solid blue;
        margin: 0px;
    }
    .column-Actions {
        width: 126px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        border: 2px solid blue;
        margin: 0px;
    }
    .list-column {
        /* border: 2px solid brown; */
        display: flex;
        flex-direction: row;
    }
    .row {
        height: 50px;
        height: fit-content;
        box-sizing: border-box;
        padding: 10px;
        border: 2px solid blue;
        margin: 0px;
        text-align: center;
    }
    .editQuality {
        width: 50px;
        text-align: center;
        border: 2px solid blue;
        box-sizing: border-box;
    }
    .list-Product {
        text-align: center;
        margin: 0px;
        box-sizing: border-box;
    }
    .addVoucher {
        text-align: center;
        margin: 20px 0px 10px;
        border: 2px solid blue;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
    }
    .checkOutCart {
        text-align: center;
        margin: 20px 0px 0px;
        border: 2px solid blue;
        box-sizing: border-box;
    }
    .voucher-title {
        padding: 10px;
        margin: 0px 0px 0px 70%;
        box-sizing: border-box;
    }
    .Voucher-dropDown {
        padding: 10px 25px 10px 25px;
        box-sizing: border-box;
    }
    .Voucher-dropDown:hover {
        border: 2px solid red;
        border-radius: 5px;
    }
</style>
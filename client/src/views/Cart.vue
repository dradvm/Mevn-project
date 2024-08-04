<template>
    <div class="main">
       <div class="header">
            <h1 class="title">CartProduct</h1>
            <!-- <p>{{ this.cart[0].items }}</p> -->
            <hr>
       </div>
       <div class="list-Product">
            <div class="list-column">
                
                <p class="column-Product">Product</p>
                <p class="column-Price">Unit Price</p>
                <p class="column-Quantity">Quantity</p>
                <p class="column-AllPrice">Total Price</p>
                <p class="column-Actions">Actions</p>
            </div>
            <hr>
            <div class="list-row"v-if="cart && cart.length" v-for="index of cart" :key="index._id">
                <div class="list-column" v-if="index.items && index.items.length" v-for="item of index.items" :key="item._id">
                    
                    <p class="column-Product row">Id: {{ item.productId }}</p>
                    <p class="column-Price row">{{ item.priceAtOrdering }}đ</p>
                    
                    <div class="column-Quantity">
                        <button class="editQuality" @click="decrement(item)">-</button>
                        <input class="editQuality" type="number" @input="myInputHandler(item)" v-model="item.quantity" min="0" :placeholder="item.quantity"/>
                        <button class="editQuality" @click="increment(item)">+</button>
                    </div>

                    <p class="column-AllPrice row">{{ this.getPrice(item.priceAtOrdering, item.quantity) }}đ</p>
                    <button class="Delete-dropDown" @click="deleteProduct(item.productId)">Xóa</button>
                </div>
            </div>
       </div>
       <hr>
       <div class="addVoucher">
            <h4 class="voucher-title">Voucher: </h4>
            <button class="Voucher-dropDown">Chọn Voucher của bạn</button>
       </div>
       <hr>
       <div class="checkOutCart">
            <h4>Tổng tiền: <h4 style="color: red;">{{ priceAll() }}đ</h4></h4>
            <button class="Voucher-dropDown">Check Out</button>
       </div>
    </div>
</template>

<script>
    import CartService from '@/services/CartService';
    import { useAuthStore } from '@/stores/counter';
    import Swal from 'sweetalert2';
    export default {
    name: "Cart",
        data() {
            return {
                cart: [],
                authStore: useAuthStore(),
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
            increment(item) {
                item.quantity++;
                CartService.UpdateCart(this.cart[0].items, this.authStore.idUser)
            },
            decrement(item) {
                if (item.quantity > 1) {
                    item.quantity--;
                    CartService.UpdateCart(this.cart[0].items, this.authStore.idUser)
                }
            },
            myInputHandler() {
                CartService.UpdateCart(this.cart[0].items, this.authStore.idUser)
            },
            priceAll() {
                let totalPrice = 0;
                if (this.cart && this.cart.length) {
                    for (const index of this.cart) {
                        if (index.items && index.items.length) {
                            for (const item of index.items) {
                                totalPrice += this.getPrice(item.priceAtOrdering, item.quantity);
                            }
                        }
                    }
                }
                return totalPrice;
            },
            deleteProduct(Id) {

                Swal.fire({
                    title: "Do you want to delete?",
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: "OK",
                }).then((result) => {
                    if (result.isConfirmed) {
                        const indexToRemove = this.cart[0].items.findIndex(item => item.productId === Id);
                        if (indexToRemove !== -1) {
                            this.cart[0].items.splice(indexToRemove, 1);
                                CartService.UpdateCart(this.cart[0].items, this.authStore.idUser)
                                console.log("Đã xóa SP thành công!");
                                Swal.fire("Deleted!", "", "success");
                            // }
                        } else {
                            console.log("Lỗi không xóa được SP");
                            Swal.fire("Error!", "Unable to delete item.", "error");
                        }
                    }
                });

                
            },
            // watch: {
            //     'this.cart[0].items': {
            //         deep: true, // Theo dõi cả sự thay đổi của các thuộc tính con bên trong cart[]
            //         handler(newCart, oldCart) {
            //             console.log('Cart items changed:', newCart);
            //             CartService.UpdateCart(this.cart[0].items, this.authStore.idUser)
            //         },
            //     },
            // },
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
    .header {
        padding: 10px 0px 0px;
        box-sizing: border-box;
        
    }
    .column-checkBox {
        width: 50px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        /* border: 2px solid blue; */
    }
    .column-Product {
        width: 400px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        /* border: 2px solid blue; */
        margin: 0px;
    }
    .row-Product {
        width: 50px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        /* border: 2px solid blue; */
        margin: 0px; 
    }
    .column-Price {
        width: 150px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        /* border: 2px solid blue; */
        margin: 0px;
    }
    .column-Quantity {
        width: 200px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        /* border: 2px solid blue; */
        margin: 0px;
    }
    .column-AllPrice {
        width: 250px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px 20px 10px;
        /* border: 2px solid blue; */
        margin: 0px 0px 0px 30px;
    }
    .column-Actions {
        width: 126px;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        /* border: 2px solid blue; */
        margin: 0px;
    }
    .column-Actions:hover {
        
    }
    .list-column {
       margin: 0px 0px 10px;
        display: flex;
        flex-direction: row;
    }
    .row {
        height: 50px;
        height: fit-content;
        box-sizing: border-box;
        padding: 10px;
        /* border: 2px solid blue; */
        margin: 0px;
        text-align: center;
    }
    .editQuality {
        width: 50px;
        text-align: center;
        /* border: 2px solid blue; */
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
        /* border: 2px solid blue; */
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
    }
    .checkOutCart {
        text-align: center;
        margin: 20px 0px 0px;
        /* border: 2px solid blue; */
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
    .Delete-dropDown {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    .Delete-dropDown:hover {
        background-color: red;
    }
    .Voucher-dropDown {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        margin: 10px;
        cursor: pointer;
    }
    .Voucher-dropDown:hover {
        background-color: #0056b3;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
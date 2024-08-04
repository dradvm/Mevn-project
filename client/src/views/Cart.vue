<template>
    <div class="main">
       <div class="header">
            <h1 class="title">CartProduct</h1>
            <!-- <p>{{ this.cart[0].items }}</p> -->
             <!-- <p>{{ this.selectedVoucher }}</p> -->
             <!-- {{ checkvouchersuitable() }}
             <p>{{ this.voucher }}</p> -->
              <!-- <p>{{ this.account[0] }}</p> -->
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
            <div class="show-list-voucher"> 
            <button class="Voucher-dropDown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="toggleDropdown">Chọn Voucher của bạn</button>
                <div v-if="showDropdown">
                    <h4>Danh sách voucher phù hợp:</h4>
                    
                    <ul>
                        <li v-for="voucher in this.account[0].vouchers" :key="index">
                            <div style="display: flex;flex-direction: row;">
                                <p style="padding-top: 15px; width: 215px;">{{ voucher }}  </p> <!-- Hiển thị tên voucher -->
                                <button class="Delete-dropDown select-voucher" @click="selectVoucher(voucher)">Chọn</button> <!-- Nút chọn voucher -->
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       <hr>
       <div class="checkOutCart">
            <h4>Tổng tiền: <h4 style="color: red;">{{ priceAll() }}đ</h4></h4>
            <button class="Voucher-dropDown" @click="addToOrder()">Check Out</button>
       </div>
    </div>
</template>

<script>
    import CartService from '@/services/CartService';
    // import VoucherService from '@/services/VoucherService';
    import { useAuthStore } from '@/stores/counter';
    import UsersService from '@/services/UsersService';
    import OrderService from '@/services/OrderService';
    import Swal from 'sweetalert2';
import Order from './Order.vue';
    export default {
    name: "Cart",
        data() {
            return {
                cart: [],
                account: [],
                authStore: useAuthStore(),
                showDropdown: false,
                selectedVoucher: [],
                
            
                order: {
                    voucher: [],
                    shipping: {
                        address: "",
                        shippingCost: 10000,
                        shippingMethod: "express"
                    },
                    payment: {
                        method: "Phương thức thanh toán",
                        transactionId: "ID giao dịch",
                        statusPayment: "Trạng thái thanh toán"
                    },
                    status: "Pending",
                    totalAmount: 0,
                    userId: "",
                    items: []
                }
                // voucher: null,
                // vouchersuitable: ['nothing']
            }
        },
        created() {
            this.getCartOfUser(this.authStore.idUser)
            this.getUser(this.authStore.user)
        },
        methods: {
            getCartOfUser(idUser) {
                CartService.findOne(idUser)
                    .then((res) => {this.cart = res.data})
                    .catch((err) => console.log(err))
            },
            getUser(Email) {
                UsersService.checkAccount(Email)
                .then((res) => {
                this.account = res.data
                })
                .catch((err) => console.log(err))
            },
            // getVoucher(id) {
            //     if(this.voucher._id !== id)
            //     VoucherService.showOne(id)
            //         .then((res) => {this.voucher = res.data})
            //         .catch((err) => console.log(err))
            // },
            getPrice(priceOne, quantity) {
                var Price= priceOne*quantity;
                console.log(this.priceAll)
                return Price
            },
            toggleDropdown() {
                this.showDropdown = !this.showDropdown;
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
            selectVoucher(voucher) {
                this.selectedVoucher.push(voucher)
                
            },
            // checkvouchersuitable() {
            //     for (const voucher of this.account[0].vouchers ) {
            //         this.getVoucher(voucher)
            //         for (const i_OfApplicableProducts of this.voucher[0].vouchers) {
            //             for ( const j_OfProductOfCart of this.cart[0].items) {
            //                 if (i_OfApplicableProducts == j_OfProductOfCart.productId) {
            //                     this.vouchersuitable.push(this.voucher[0])
                                
            //                 }
            //             }
            //         }
            //     }

            // },
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
            addToOrder() {
                this.order.voucher= this.selectedVoucher
                this.order.shipping.address= this.account[0].address
                this.order.totalAmount= this.priceAll()
                this.order.userId= this.account[0]._id
                this.order.items= this.cart[0].items

                OrderService.addToOrder(this.order)
                alert("Tạo đơn hàng thành công !!!")

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
        margin: 0px 0px 0px 34%;
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
    .select-voucher {
        padding: 5px;
        margin: 10px;
    }
    .Delete-dropDown:hover {
        background-color: red;
    }
    .select-voucher:hover {
        background-color: greenyellow;
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
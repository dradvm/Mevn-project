<template>
    <div class="position-relative">

        <div @click="closeModal" class="position-absolute modal align-items-center justify-content-center w-100 h-100 top-0 z-3" :class="{'d-none': !modal, 'd-flex': modal}">
            <div class="bg-white rounded px-3 py-2 position-relative" @click.stop style="width: 70%; height: 85%;">
                <div class="text-center fw-medium fs-4">Select Product</div>
                <div class="row overflow-auto mt-3 gy-0" style="height: 85%;" >
                    <div class="col-2 d-flex justify-content-center mt-2" style="height: 250px;" v-for="item in items">
                        <div class="">
                            <div class="border rounded overflow-hidden h-75">
                                <img class="w-100 h-100" :src="item.display.coverPhoto"/>
                            </div>
                            <div class="h-25 d-flex flex-column justify-content-evenly align-items-center">
                                <div class="fw-medium">{{ currency(item.price) }}</div>
                                <button class="w-100 fw-medium py-1" @click="addSelectedProduct(item._id)" :class="{'bg-success': checkSelected(item._id), 'bg-primary': !checkSelected(item._id),'btn-dis': checkDisable(item._id)}">{{ checkSelected(item._id) ? 'Selected' : 'Select' }}</button>
                            </div> 
                        </div>
                    </div>
                </div>
                <button @click="closeModal" class="position-absolute cur-p" style="right: 2%; top: 3%;"><font-awesome-icon class="fs-5" :icon="['fas', 'xmark']" /></button>
            </div>
        </div>
        <div class="p-3 z-1">
            <RouterLink to="/myshop/voucher"><button class="bg-primary fw-medium rounded px-3 py-1">Return</button></RouterLink>
            <div class="mt-3 rounded bg-light px-3 py-4">
                <div class="row">
                    <div class="col-6">
                        <div class="mb-1 d-flex">
                            <div class="fw-bold me-1">Start Date:</div>
                            <div class="fw-medium">{{ startDate }}</div>
                        </div>
                        <div class="mb-1 d-flex">
                            <div class="fw-bold me-1">End Date:</div>
                            <div class="fw-medium">{{ endDate }}</div>
                        </div>
                        
                        <VueDatePicker 
                            v-model="date" 
                            range 
                            :multi-calendars="{solo: true}" 
                            inline 
                            hide-offset-dates 
                            :min-date="new Date()" 
                            time-picker-inline
                        ></VueDatePicker>
                    </div>
                    
                    <div class="col-6">
                        <div class="row">
                            <div class="col-6">
                                <div class="fw-medium mb-1">Code</div>
                                <div class="my-input-group bg-white d-flex align-items-center justify-content-between">
                                    <input required class="fw-medium" style="width: 80%" length="8" autocomplete="off" disabled v-model="code" type="text" aria-label="code" aria-describedby="basic-addon1">
                                    <span v-if="!isUpdate" class="cur-p px-3" @click="generateRandomCode"><font-awesome-icon :icon="['fas', 'rotate-right']" /></span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="fw-medium mb-1">Type</div>
                                <select class="form-select" aria-label="Default select example" v-model="typeSelected">
                                    <option disabled selected value="">Select Type</option>
                                    <option v-for="type in types">
                                        {{ type }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div v-if="typeSelected.includes('Percent')" class="col-6">
                                <div class="fw-medium mb-1 d-flex">
                                    Discount (%)
                                </div>
                                <div class="my-input-group bg-white">
                                    <input v-model="discount" required class="fw-medium w-100" type="number" min="1" max="100" aria-label="discount" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div v-if="typeSelected.includes('Fixed')" class="col-6">
                                <div class="fw-medium mb-1 d-flex">
                                    Discount (VNĐ)
                                </div>
                                <div class="my-input-group bg-white">
                                    <input v-model="discount" required class="fw-medium w-100" type="number" min="1000" step="1000" aria-label="discount" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div v-if="typeSelected.includes('Percent All') || typeSelected.includes('First Order Percent')" class="col-6">
                                <div class="fw-medium mb-1">Max discount (VNĐ)</div>
                                <div class="my-input-group bg-white">
                                    <input v-model="maxDiscount" required class="fw-medium w-100" type="number" min="0" step="1000" aria-label="discount" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3" v-if="!['Percent One', 'Fixed One'].includes(typeSelected)">
                            <div class="col-6">
                                <div class="fw-medium mb-1">Condition</div>
                                <select class="form-select" aria-label="Default select example" v-model="condition">
                                    <option disabled selected value="">Select Condition</option>
                                    <option value=">=">Đơn hàng trên</option>
                                    <option value="<=">Đơn hàng dưới</option>
                                </select>
                            </div>
                            <div class="col-6">
                                <div class="fw-medium mb-1">Condition Value (VNĐ)</div>
                                <div class="my-input-group bg-white">
                                    <input v-model="conditionDiscount" required class="fw-medium w-100" type="number" min="0" step="1000" aria-label="discount" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3" >
                            <div class="col-6">
                                <div class="fw-medium mb-1">Quantity</div>
                                <div class="my-input-group bg-white">
                                    <input v-model="quantity" required class="fw-medium w-100" type="number" min="1" step="1" aria-label="discount" aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="fw-medium mb-1">Limit Each user</div>
                                <div class="my-input-group bg-white">
                                    <input v-model="limit" required class="fw-medium w-100" type="number" min="1" step="1" aria-label="discount" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3" v-if="['Percent One', 'Fixed One'].includes(typeSelected)">
                            <div class="col-6">
                                <button @click="openModal" class="rounded px-3 py-1 bg-primary fw-medium">Select Product</button>
                            </div>
                            <div class="col-6">

                            </div>
                        </div>
                        <div class="d-flex justify-content-end mt-5">
                            <div>
                                <button @click="validate" class="rounded px-3 py-1 bg-primary fw-medium">
                                    Add Voucher
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>


<script>
import { ref } from 'vue';
import VoucherService from '@/services/VoucherService';
import ProductService from '@/services/ProductService';
import UsersService from '@/services/UsersService';
import { useAuthStore } from '@/stores/counter';
import { toast } from 'vue3-toastify';
export default {
    name: "MyShopVoucherAddAndUpdate",
    setup() {
        const date = ref();
        const startDate = ref("")
        const endDate = ref("")
        const text = ref("")
        const code = ref("")
        const types = ref()
        const typeSelected = ref("")
        const check = ref(true)
        const discount = ref(0)
        const maxDiscount = ref(0)
        const condition = ref("")
        const conditionDiscount = ref(0)
        const quantity = ref(1)
        const limit = ref(1)
        const products = ref([])
        const modal = ref(false)
        const items = ref([])
        const isUpdate = ref(false)
        const user = ref(useAuthStore())
        const shopId = ref(null)
        return {
            check,
            code,
            text,
            date,
            startDate,
            endDate,
            types,
            typeSelected,
            discount,
            maxDiscount,
            condition,
            conditionDiscount,
            quantity,
            limit,
            products,
            modal,
            items,
            isUpdate,
            user,
            shopId
        }
    },
    created() {
        this.getTypes()
        this.getProducts()
        this.getShopId()
        switch (this.$router.currentRoute.value.name) {
            case "voucherAdd": {
                this.generateRandomCode()
                break
            }
            case "voucherUpdate": {
                this.fetchDataUpdate()
                break
            }
        }
    },
    watch: {
        date(newDate) {
            this.startDate = this.getDateString(newDate[0])
            this.endDate = this.getDateString(newDate[1])
        },
        typeSelected(newTypeSelected, oldTypeSelected) {
            this.resetForm(newTypeSelected, oldTypeSelected)
        },
    },
    methods: {
        generateRandomCode() {
            VoucherService.getRandomCode()
                .then((res) => this.code = res.data)
                .catch((err) => console.log(err))
        },
        getDateString(date) {
            const pad = (n) => n < 10 ? "0" + n : "" + n
            date = new Date(date)
            return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        },
        getTypes() {
            VoucherService.getTypes()
                .then((res) => this.types = res.data)
                .catch((err) => console.log(err))
        },
        getState() {
            var date = new Date()
            console.log(typeof this.date[0])
            console.log(typeof date)
            console.log(typeof this.date[1])
            if (this.date[0] < date && date < this.date[1] ) {
                return "Active"
            }
            return "Upcoming"
        },
        validate() {
            if(!this.date) {
                toast("Must select date!", {
                    type: 'warning',
                    autoClose: 2000
                })
                return
            }
            if (this.typeSelected === "") {
                toast("Must select type!", {
                    type: 'warning',
                    autoClose: 2000
                })
                return 
            }
            if (this.conditionDiscount != 0 && this.condition != "") {
                toast("Please select condition!", {
                    type: 'warning',
                    autoClose: 2000
                })
            }
            if (this.discount === 0) {
                toast("Discount must be greater than 0!", {
                    type: 'warning',
                    autoClose: 2000
                })
                return 
            }
            if (this.condition === "<=") {
                if (this.conditionDiscount < 1000) {
                    toast("Min value for condition discount is 1000!", {
                        type: 'warning',
                        autoClose: 2000
                    })
                    return 
                }
            }
            else if (this.condition === ">=") {

            }
            if (this.typeSelected.includes("One") && this.products.length === 0) {
                toast("Please select product to discount", {
                    type: 'warning',
                    autoClose: 2000
                })
                return 
            }
            var d = 0
            if (this.typeSelected.includes("Percent")) {
                d = this.discount/100
            }
            else {
                d = this.discount
            }
            var data = {
                code: this.code,
                startDate: this.date[0],
                expiredDate: this.date[1],
                state: this.getState(),
                type: this.typeSelected,
                condition: this.condition,
                discount: d,
                maxDiscount: this.maxDiscount,
                conditionDiscount: this.conditionDiscount,
                quantity: this.quantity,
                usedQuantity: 0,
                limitEachUser: this.limit,
                applicableProducts: this.products,
                shopId: this.shopId
            }
            console.log(data)
            if (this.shopId !== null) {
                if (this.isUpdate) {
                    VoucherService.updateVoucher(this.$router.currentRoute.value.params.id, data)
                    .then((res) => {
                        toast(res.data.message, {
                            type: 'success',
                            autoClose: 2000,
                            onClose: () => {
                                this.$router.push({name: "voucher"})
                            }
                        })
                    })
                    .catch((err) => {
                        toast(err, {
                            type: 'error',
                            autoClose: 2000
                        })
                    })
                }
                else {
                    VoucherService.createVoucher(data)
                    .then((res) => {
                        toast(res.data.message, {
                            type: 'success',
                            autoClose: 2000,
                            onClose: () => {
                                this.$router.push({name: "voucher"})
                            }
                        })
                    })
                    .catch((err) => {
                        toast(err, {
                            type: 'error',
                            autoClose: 2000
                        })
                    })
                }
            }
            else {
                toast("Shop id error", {
                    type: 'error',
                    autoClose: 2000
                })
            }
        },
        openModal() {
            this.modal = true
        },
        closeModal() {
            this.modal = false
        },
        getProducts() {
            ProductService.getProductByShop(this.user.idUser)
                .then((res) => this.items = res.data)
                .catch((err) => console.log(err))
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
        addSelectedProduct(product) {
            if (this.products.includes(product)) {
                this.products.splice(this.products.indexOf(product), 1)
            }
            else if (this.products.length === 0){
                this.products.push(product)
            }
        },
        checkSelected(product) {
            return this.products.includes(product)
        },
        checkDisable(product) {
            return (!this.checkSelected(product) && this.products.length !== 0)
        },
        fetchDataUpdate() {
            VoucherService.getVoucher(this.$router.currentRoute.value.params.id)
                .then((res) => {
                    var voucher = res.data
                    this.code = voucher.code
                    this.date = [new Date(voucher.startDate), new Date(voucher.expiredDate)]
                    this.typeSelected = voucher.type
                    this.condition = voucher.condition
                    if (voucher.type.includes("Percent")) {
                        this.discount = voucher.discount*100
                    }
                    else {
                        this.discount = voucher.discount
                    }
                    this.maxDiscount = voucher.maxDiscount
                    this.conditionDiscount = voucher.conditionDiscount
                    this.quantity = voucher.quantity
                    this.limit = voucher.limitEachUser
                    this.products.push(...voucher.applicableProducts)
                    this.isUpdate = true
                    this.shopId = voucher.shopId
                })
                .catch((err) => console.log(err))
        },
        getShopId() {
            UsersService.checkAccount(this.user.user)
                .then((res) => {
                    this.shopId = res.data[0]._id
                })
                .catch((err) => console.log(err))
        },
        resetForm(newTypeSelected, oldTypeSelected) {
            if (newTypeSelected.length != 0 && oldTypeSelected.length != 0) {
                this.products = []
            }
            this.discount = 0
            this.maxDiscount = 0
            this.condition = ""
            this.conditionDiscount = 0
            
        }
    }
}
</script>

<style scoped>
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
.modal {
    background-color: rgba(0,0,0, 0.3);
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
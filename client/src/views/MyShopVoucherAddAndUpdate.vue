<template>
    <div class="m-3">
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
                            <div class="my-input-group bg-white">
                                <input required class="fw-medium" length="8" autocomplete="off" disabled v-model="code" type="text" aria-label="code" aria-describedby="basic-addon1">
                                <span class="cur-p" @click="generateRandomCode"><font-awesome-icon :icon="['fas', 'rotate-right']" /></span>
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
                        <div v-if="!typeSelected.includes('One')" class="col-6">
                            <div class="fw-medium mb-1">Max discount (VNĐ)</div>
                            <div class="my-input-group bg-white">
                                <input v-model="maxDiscount" required class="fw-medium w-100" type="number" min="0" step="1000" aria-label="discount" aria-describedby="basic-addon1">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
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
                    <div class="row mt-3">
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
</template>


<script>
import { ref } from 'vue';
import VoucherService from '@/services/VoucherService';
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
            products
        }
    },
    created() {
        console.log(this.$router)
        this.generateRandomCode()
        this.getTypes()
    },
    watch: {
        date(newDate) {
            this.startDate = this.getDateString(newDate[0])
            this.endDate = this.getDateString(newDate[1])
        }
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
            if (this.discount === 0) {
                toast("Discount must be greater than 0!", {
                    type: 'warning',
                    autoClose: 2000
                })
                return 
            }
            if (this.condition === "") {
                toast("Must select condition!", {
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
            var d = 0
            if (this.typeSelected.includes("Percent")) {
                d = this.discount/100
            }
            else {
                d = this.discount
            }
            VoucherService.createVoucher(this.code, this.date[0], this.date[1], this.getState(),this.typeSelected,
            this.condition, d, this.maxDiscount, this.conditionDiscount, this.quantity,
            0, this.limit, this.products )
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
</style>
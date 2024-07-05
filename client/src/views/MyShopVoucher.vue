<template>
    <div class="container">
        <div class="d-flex justify-content-between">
            <div>
                <button>Add new voucher</button>
            </div>
            <div>
                <input/>
            </div>
        </div>
        <div class="rounded px-4 py-3 bg-light mt-3">
            <div class="px-3 fw-bold d-flex align-items-center justify-content-between text-center mb-3">
                <div class="fw-bold" style="width: 10%">
                    Code
                </div>
                <div class="fw-bold" style="width: 20%">
                    Date
                </div>
                <div class="fw-bold" style="width: 20%">
                    Type
                </div>
                <div class="fw-bold" style="width: 30%">
                    Details
                </div>
                <div class="fw-bold" style="width: 10%">
                    State
                </div>
                <div class="fw-bold" style="width: 10%">
                    Action
                </div>
            </div>
            <div v-for="item in items" :key="item._id">
                <div class="bg-white border px-3 py-2 mb-3 rounded">
                    <div class="v-stack">
                        <div class="d-flex justify-content-between text-center align-items-center">
                            
                            <div class="fw-bold" style="width: 10%">
                                    {{ item.code }}
                            </div>         
                            <div class="v-stack fs-7" style="width: 20%">
                                <div>
                                    {{ item.startDate }}
                                </div>
                                <div>
                                    {{ item.expiredDate }}
                                </div>
                            </div>
                            <div style="width: 20%">
                                <div class="d-flex justify-content-around" >
                                    <div class="fw-medium rounded px-3 py-1 bg-secondary text-white" style="cursor: default">
                                        {{ item.type }}
                                    </div>
                                </div>
                            </div>
                            <div style="width: 30%;">

                            </div>
                            <div style="width: 10%">
                                <div class="d-flex justify-content-around" >
                                    <div class="fw-medium rounded px-3 py-1" :class="getCssState(item.state)" style="cursor: default">
                                        {{ item.state }}
                                    </div>
                                </div>    
                            </div>
                            <div  style="width: 10%">
                                <div class="d-flex justify-content-between">
                                    <button class="rounded px-3 py-1 bg-primary text-white">
                                        <font-awesome-icon :icon="['fas', 'pen']" />
                                    </button>
                                    <button class="rounded px-3 py-1 bg-danger text-white">
                                        <font-awesome-icon :icon="['fas', 'delete-left']" />
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div class="d-flex align-items-center justify-content-end mt-2">
                            <div class="d-flex align-items-center fs-7">
                                <font-awesome-icon :icon="['fas', 'box-open']" />
                                <div class="ms-1 fw-medium">{{item.quantity}}</div>
                            </div>
                            <div class="d-flex align-items-center ms-3 fs-7">
                                <font-awesome-icon :icon="['fas', 'user-check']" />
                                <div class="ms-1 fw-medium">{{item.usedQuantity}}</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VoucherService from '@/services/VoucherService';

export default {
    name: "MyShopVoucher",
    data() {
        return {
            items: []
        }
    },
    created() {
        this.fetchItems()
    },
    methods: {
        fetchItems() {
            VoucherService.getAll()
                .then((res) => this.items = res.data)
                .catch((err) => console.log(err))
        },
        getDateString(value) {
            
        },
        getCssState(state) {
            var cssString = []
            switch (state) {
                case "Active": {
                    cssString.push("bg-success")
                    cssString.push("text-white")
                    break
                }
                case "Waiting": {
                    cssString.push("bg-warning")
                    cssString.push("text-white")
                    break
                }
                case "Expired":
                case "Out Of Stock": {
                    cssString.push("bg-body-secondary")
                    cssString.push("text-body-tertiary")
                    break
                }
                case "Canceled": {
                    cssString.push("bg-danger")
                    cssString.push("text-white")
                    break
                }
            }
            return cssString.join(" ")
        }
    }
}
</script>
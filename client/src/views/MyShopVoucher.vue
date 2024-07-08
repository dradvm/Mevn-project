<template>
    <div class="m-3">
        <div class="d-flex justify-content-between">
            <div>
                <button>Add new voucher</button>
            </div>
            <div>
                <div class="my-input-group mb-3">
                    <span><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></span>
                    <input v-model="search" type="text" placeholder="Search" aria-label="search" aria-describedby="basic-addon1">
                </div>
            </div>
        </div>
        <div class="rounded bg-light px-4 py-3 mt-3">
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
                    <div class="vstack">
                        <div class="d-flex justify-content-between text-center align-items-center">
                            
                            <div class="fw-bold" style="width: 10%">
                                    {{item.code}}
                            </div>         
                            <div class="v-stack fs-7" style="width: 20%">
                                <div class="fw-medium">
                                    {{ item.startDate }}
                                </div>
                                <div class="fw-medium">
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
                            <div class="d-flex justify-content-center"  style="width: 10%">
                                <div class="d-flex">
                                    <button class="rounded px-3 py-1 bg-primary text-white">
                                        <font-awesome-icon :icon="['fas', 'pen']" />
                                    </button>
                                    <button class="rounded px-3 py-1 bg-danger text-white ms-3">
                                        <font-awesome-icon :icon="['fas', 'delete-left']" />
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                        <div class="d-flex align-items-center justify-content-end mt-2 text-body-tertiary">
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
            <div v-if="pages>1" class="d-flex justify-content-end">
                <v-pagination v-model="page" 
                    :length="pages" 
                    next-icon="mdi-menu-right"
                    prev-icon="mdi-menu-left"
                    :total-visible="3"
                >
                </v-pagination>
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
            page: 1,
            pages: 0,
            search: "",
            items: []
        }
    },
    created() {
        this.fetchItems(this.page, this.search)
        this.getPages(this.search)
    },
    watch: {
        page(newPage) {
            this.fetchItems(newPage, this.search)
        },
        search(newSearch) {
            this.page = 1
            this.fetchItems(this.page, newSearch)
            this.getPages(newSearch)
        }
    },
    methods: {
        fetchItems(pageValue, searchValue) {
            VoucherService.getByPage(pageValue, searchValue)
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
                case "Upcoming": {
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
        },
        getPages(searchValue) {
            VoucherService.getPages(searchValue)
                .then((res) => this.pages = res.data.count )
                .catch((err) => console.log(err))
        }
    }
}
</script>

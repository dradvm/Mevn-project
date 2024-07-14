<template>
    <div class="m-3">
        <div class="d-flex justify-content-between align-items-center">
            <RouterLink to="/myshop/voucherAdd">
                <button class="px-3 py-1 fw-medium bg-primary rounded">Add new voucher</button>
            </RouterLink>
            <div>
                <div class="my-input-group mb-3">
                    <span><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></span>
                    <input v-model="search" id="search" type="text" placeholder="Search" aria-label="search" aria-describedby="basic-addon1">
                </div>
            </div>
        </div>
        
        <div class="">
            <v-switch v-model="check" :model-value="check"
                hide-details
                :label="`Voucher ${labelSwitcher}available`"
                color="primary"
            ></v-switch>
        </div>
        <div class="rounded bg-light px-4 py-3 mt-3">
            <div class="px-3 fw-bold d-flex align-items-center justify-content-between text-center mb-3">
                <div class="fw-bold" style="width: 10%">
                    Code
                </div>
                <div class="d-flex justify-content-around" style="width: 15%">
                    <div class="d-flex align-items-center fw-bold cur-p px-2 py-1 sortItem" @click="toggleSort('startDateSort')">
                        Date
                        <font-awesome-icon v-if="startDateSort" class="ms-1 sortIcon" style="margin-top: -4px;" :icon="['fas', 'sort-down']" />
                        <font-awesome-icon v-else class="ms-1 sortIcon" style="margin-top: 8px;" :icon="['fas', 'sort-up']" />
                    </div>
                </div>
                <div class="d-flex justify-content-around" style="width: 20%">
                    
                    <div class="d-flex align-items-center fw-bold cur-p px-2 py-1 sortItem" @click="toggleSort('typeSort')">
                        Type
                        <font-awesome-icon v-if="typeSort" class="ms-1 sortIcon" style="margin-top: -4px;" :icon="['fas', 'sort-down']" />
                        <font-awesome-icon v-else class="ms-1 sortIcon" style="margin-top: 8px;" :icon="['fas', 'sort-up']" />
                    </div>
                </div>
                <div class="fw-bold" style="width: 30%">
                    Details
                </div>
                <div class="d-flex justify-content-around" style="width: 15%">
                    <div class="d-flex align-items-center fw-bold cur-p px-2 py-1 sortItem" @click="toggleSort('stateSort')">
                        State
                        <font-awesome-icon v-if="stateSort" class="ms-1 sortIcon" style="margin-top: -4px;" :icon="['fas', 'sort-down']" />
                        <font-awesome-icon v-else class="ms-1 sortIcon" style="margin-top: 8px;" :icon="['fas', 'sort-up']" />
                    </div>
                </div>
                <div class="fw-bold" style="width: 10%">
                    Action
                </div>
            </div>
            <div v-if="isLoading || items.length === 0" style="height: 400px">
                <div class="d-flex fs-1 justify-content-center fw-bold align-items-center h-100">
                    <div v-if="items.length !== 0" class="spinner">
                        <div></div>
                    </div>
                    <div v-else>
                        NO VOUCHER FOUND
                    </div>
                </div>
            </div>
            <div v-else v-for="item in items" :key="item._id">
                <div class="bg-white border px-3 py-2 mb-3 rounded">
                    <div class="vstack">
                        <div class="d-flex justify-content-between text-center align-items-center">
                            
                            <div class="fw-bold" style="width: 10%">
                                    {{item.code}}
                            </div>         
                            <div class="v-stack fs-7" style="width: 15%">
                                <div class="fw-medium">
                                    {{ item.startDate }}
                                </div>
                                <div class="fw-medium">
                                    {{ item.expiredDate }}
                                </div>
                            </div>
                            <div style="width: 20%">
                                <div class="d-flex justify-content-around" >
                                    <div class="fw-medium rounded px-3 py-1 bg-secondary text-white cur-d">
                                        {{ item.type }}
                                    </div>
                                </div>
                            </div>
                            <div style="width: 30%;">
                                {{ getDetailsString(item) }}
                            </div>
                            <div style="width: 15%">
                                <div class="d-flex justify-content-around" >
                                    <div class="fw-medium rounded px-3 py-1 cur-d" :class="getCssState(item.state)">
                                        {{ item.state }}
                                    </div>
                                </div>    
                            </div>
                            <div  class="d-flex justify-content-center"  style="width: 10%">
                                <div v-if="check" class="d-flex">
                                    <button class="rounded px-3 py-1 bg-primary text-white">
                                        <font-awesome-icon :icon="['fas', 'pen']" />
                                    </button>
                                    <button class="rounded px-3 py-1 bg-danger text-white ms-3" @click="deleteItem(item._id)">
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
                                <font-awesome-icon :icon="['fas', 'user-plus']" />
                                <div class="ms-1 fw-medium">{{item.limitEachUser}}</div>
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
import { toast } from 'vue3-toastify';
export default {
    name: "MyShopVoucher",
    data() {
        return {
            page: 1,
            pages: 0,
            search: "",
            check: true,
            startDateSort: true,
            typeSort: true,
            stateSort: true,
            sort: ["startDateSort", "typeSort", "stateSort"],
            items: [""],
            isLoading: true,
        }
    },
    computed: {
        labelSwitcher() {
            return this.check === true ? "" : "not "
        },
        jsonSort() {
            var sort = this.sort.reduce((obj, sortItem) => {
                obj[sortItem.replace("Sort", "")] = this[sortItem]
                return obj
            }, {})
            return JSON.stringify(sort)
        }
    },
    created() {
        this.fetchItemsAndGetPages({})
    },
    watch: {
        page(newPage) {
            this.fetchItemsAndGetPages({ pageValue: newPage })
        },
        search(newSearch) {
            this.page = 1
            this.fetchItemsAndGetPages({ pageValue: 1 ,searchValue: newSearch})
        },
        check(newCheck) {
            this.page = 1
            this.fetchItemsAndGetPages({ pageValue: 1,  checkValue: newCheck})
        }
    },
    methods: {
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
        fetchItems(pageValue, searchValue, checkValue, sortValue) {
            VoucherService.getByPage(pageValue, searchValue, checkValue, sortValue)
                .then((res) => {
                    this.items = res.data
                    this.isLoading = false
                })
                .catch((err) => console.log(err))
        },
        getPages(searchValue, checkValue) {
            VoucherService.getPages(searchValue, checkValue)
                .then((res) => this.pages = res.data.count )
                .catch((err) => console.log(err))
        },
        fetchItemsAndGetPages({pageValue = this.page, searchValue = this.search, checkValue = this.check}) {
            this.isLoading = true
            this.fetchItems(pageValue, searchValue, checkValue, this.jsonSort)
            this.getPages(searchValue, checkValue)
        },
        
        toggleSort(sortValue) {
            this[sortValue] = !this[sortValue]
            if (this.sort.indexOf(sortValue) > -1) {
                this.sort.splice(this.sort.indexOf(sortValue), 1)
                this.sort.unshift(sortValue)
            }
            this.fetchItemsAndGetPages({})
        },
        deleteItem(id) {
            VoucherService.deleteItem(id)
                .then((res) => {
                    this.fetchItemsAndGetPages({})
                    toast(res.data.message, {
                        type: 'success',
                        autoClose: 2000
                    })
                } )
                .catch((err) => {
                    toast(err, {
                        type: 'error',
                    })
                })
        },
        getDetailsString(item) {
            var str = ["Voucher giảm"]
            switch (item.type) {
                case "Percent One": {
                    str.push(`${item.discount < 1 ? item.discount * 100 + "%" : item.discount}`)
                    str.push("cho sản phẩm")
                    str.push("DN đẹp trai")
                    break
                }
                case "Percent All": {
                    str.push(`${item.discount}%`)
                    str.push("cho đơn hàng")
                    if (item.condition === "<=") {
                        str.push("dưới")
                        str.push(`${item.conditionDiscount}`)
                    }
                    else if (item.condition === ">=") {
                        str.push("trên")
                        str.push(`${item.conditionDiscount}VNĐ`)
                    }
                    if (item.maxDiscount != 0) {
                        str.push(`(tối đa ${item.maxDiscount}VNĐ)`)
                    }
                    break
                }
                case "Fixed All": {
                    str.push(`${item.discount}VNĐ`)
                    str.push("cho đơn hàng")
                    if (item.condition === "<=") {
                        str.push("dưới")
                        str.push(`${item.conditionDiscount}`)
                    }
                    else if (item.condition === ">=") {
                        str.push("trên")
                        str.push(`${item.conditionDiscount}VNĐ`)
                    }
                    if (item.maxDiscount != 0) {
                        str.push(`(tối đa ${item.maxDiscount}VNĐ)`)
                    }
                    break
                }
                case "Fixed One": {
                    str.push(`${item.discount}VNĐ`)
                    str.push("cho sản phẩm")
                    str.push("DN đẹp trai")
                    break
                }
                case "First Order Percent": {
                    str.push(`${item.discount*100}%`)
                    str.push("cho đơn hàng đầu tiên")
                    if (item.maxDiscount != 0) {
                        str.push(`(tối đa ${item.maxDiscount}VNĐ)`)
                    }
                    break
                }
                case "First Order Fixed": {
                    str.push(`${item.discount}VNĐ`)
                    str.push("cho đơn hàng đầu tiên")
                    if (item.maxDiscount != 0) {
                        str.push(`(tối đa ${item.maxDiscount}VNĐ)`)
                    }
                    break
                }
            }
            return str.join(" ")
        },
    }
}
</script>

<style scoped>
.spinner div {
    height: 120px;
    width: 120px;
    border: 6px solid;
    border-color: red transparent red transparent;
    border-radius: 50%;
    animation: spin 1.4s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
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
.sortIcon {
    transition: .1s;
}
.sortItem:hover .sortIcon{
    color: rgb(155, 155, 155)
}
</style>
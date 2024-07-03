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
        <div class="rounded px-2 py-3 bg-secondary mt-3">
            <div v-for="item in items">
                <div class="bg-white px-2 py-3 mb-3">
                    <div class="d-flex align-items-center">
                        <div class="v-stack">
                            <div class="d-flex align-items-center">
                                <div class="fw-semibold me-3">
                                    {{item.code}}
                                </div>
                            
                                <div class="text-danger fw-bold px-2 py-1 rounded bg-warning me-3">
                                    {{item.state}}
                                </div>
                            </div>
                            <div class="d-flex mt-2 align-items-center">
                                <div class="fw-medium me-3">
                                    {{item}}
                                </div>
                                <div class="fw-medium me-3">
                                    03/07/2024
                                </div>
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
        }
    }
}
</script>
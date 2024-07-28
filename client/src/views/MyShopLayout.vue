<template>
    <div class="" style="min-height: 400px">
        <div class="w-100 d-flex">
            <div class="shadow-sm" style="width: 15%">
                <div class="h-100 vstack mx-3 my-4">
                    <RouterLink class="routerItemNav fw-medium px-3 py-2 rounded mb-2" 
                        :class="{ 'routerItemNavActive': $router.currentRoute.value.name === 'myshophome', }" to="/myshop/">
                        <font-awesome-icon class="me-3" :icon="['fas', 'store']" />Shop
                    </RouterLink>
                    <RouterLink class="routerItemNav fw-medium px-3 py-2 rounded mb-2" 
                    :class="{ 'routerItemNavActive': ['voucher', 'voucherAdd', 'voucherUpdate'].includes($router.currentRoute.value.name)  }" to="/myshop/voucher">
                        <font-awesome-icon class="me-3" :icon="['fas', 'ticket']" />Voucher 
                    </RouterLink>
                </div>
            </div>
            <div style="width: 85%">
                <RouterView/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyShopLayout",
    methods: {
    }
}
</script>

<style scoped>
.routerItemNav {
    transition: .2s;
    color: black;
}
.routerItemNav:hover {
    color: white;
    background: rgb(255, 201, 53);
}
.routerItemNavActive {
    color: white;
    background: orange
}
.routerItemNavActive:hover {
    background: orange
}
</style>
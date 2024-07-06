<template>
    <div>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/myshop">My Shop</RouterLink>
        </nav>
        <!-- <h1>Trang của shop</h1>
        <h2>Trang chính</h2> -->
    
    
        <div class="w-100 d-flex">
            <div class="shadow-sm" style="width: 15%">
                <div class="h-100 vstack mx-3 my-4">
                    <RouterLink class="routerItemNav fw-medium px-3 py-2 rounded mb-2" 
                        :class="{ 'routerItemNavActive': $router.currentRoute._rawValue.name === 'myshophome', }" to="/myshop/">
                        <font-awesome-icon class="me-3" :icon="['fas', 'store']" />Shop
                    </RouterLink>
                    <RouterLink class="routerItemNav fw-medium px-3 py-2 rounded mb-2" 
                    :class="{ 'routerItemNavActive': $router.currentRoute._rawValue.name === 'voucher', }" to="/myshop/voucher">
                        <font-awesome-icon class="me-3" :icon="['fas', 'ticket']" />Voucher 
                    </RouterLink>
                </div>
            </div>
            <div style="width: 85%">
                <button @click="printData($router.currentRoute)">Click</button>
                <RouterView/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyShopLayout",
    methods: {
        printData(data) {
            console.log(data)
        }
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
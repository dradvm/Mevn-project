<template>
    <h1>Trang của shop</h1>
    <h2>Trang chính</h2>
    <RouterLink to="/myshop/voucher">Voucher</RouterLink>
    <RouterView/>
</template>

<script>
import {RouterView} from "vue-router"
export default {
    name: "MyShopLayout"
}


</script>
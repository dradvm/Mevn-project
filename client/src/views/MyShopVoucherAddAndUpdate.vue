<template>
    <div class="m-3">
        <RouterLink to="/myshop/voucher"><button class="bg-primary fw-medium rounded px-3 py-1">Return</button></RouterLink>
    </div>
</template>

<script>
    export default {
        name: "MyShopVoucherAddAndUpdate"
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
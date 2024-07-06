<template>
    <header>
    <div class="wrapper">
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/myshop">My Shop</RouterLink>
            <RouterLink to="/login">Login</RouterLink>
            <RouterLink to="/register">Sign up</RouterLink>
        </nav>
    </div>
  </header>
</template>

<script>
export default {
    name: "Home"
}
</script>
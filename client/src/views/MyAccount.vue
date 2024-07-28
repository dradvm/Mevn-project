<template>
    <div class="main" v-if="userLogin && userLogin.length" v-for="user of userLogin" :key="user._id">
        <h2>Tên:   {{ user.name }} </h2>
        <h6>Địa chỉ:   {{ user.address }}</h6>
        <h6>Email:   {{ user.email }}</h6>
        <h6>Ngày sinh:   {{ user.birthday }}</h6>
        <h6>Giới tính:   {{ user.gender }}</h6>
        <h6>Mật Khẩu:   {{ user.password }}</h6>
        <h6>Sđt:   {{ user.phone }}</h6>
      </div>
</template>

<script>
    import UsersService from '@/services/UsersService';
    import { useAuthStore } from '@/stores/counter';
    export default {
      name: "Home",
      data() {
        return {
            userLogin: [],
            authStore: useAuthStore(),
        }
      },
      created() {
        UsersService.checkAccount(this.authStore.user)
            .then((res) => {
              this.userLogin = res.data
            })
            .catch((err) => console.log(err))
        },
    }
</script>
<style scoped>
    .main {
        text-align: center;
    }
</style>
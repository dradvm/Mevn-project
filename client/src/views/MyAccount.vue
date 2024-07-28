<template>
    <div v-if="userLogin && userLogin.length" v-for="user of userLogin" :key="user._id">
        <h2 style="text-align: center;">Tên:   {{ user.name }} </h2>
        <h6 style="text-align: center;">Địa chỉ:   {{ user.address }}</h6>
        <h6 style="text-align: center;">Email:   {{ user.email }}</h6>
        <h6 style="text-align: center;">Ngày sinh:   {{ user.birthday }}</h6>
        <h6 style="text-align: center;">Giới tính:   {{ user.gender }}</h6>
        <h6 style="text-align: center;">Mật Khẩu:   {{ user.password }}</h6>
        <h6 style="text-align: center;">Sđt:   {{ user.phone }}</h6>
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
// stores/counter.js
import { defineStore } from 'pinia'


export const useAuthStore = defineStore('Login Account', {
  state: () => ({
    isLoggedIn: false,
    user: null,
    idUser: null,
    nameUser: null,
  }),
  actions: {
    login(user) {
      this.isLoggedIn = true;
      this.user = user;
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
    },
    addInfor(Id,name) {
      this.idUser= Id;
      this.nameUser= name;

    }
  },
});
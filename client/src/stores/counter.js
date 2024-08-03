// stores/counter.js
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', {
//   state: () => {
//     return { count: 0 }
//   },
//   // could also be defined as
//   // state: () => ({ count: 0 })
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })

export const useAuthStore = defineStore('Login Account', {
  state: () => ({
    isLoggedIn: false,
    user: null, //biến này chứa email của user
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
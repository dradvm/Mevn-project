<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/myshop">My Shop</RouterLink>
      </nav>
      <div>
        <RouterView/>
      </div>
    </div>
  </header>
</template>

<script>
import Name from './components/Name.vue'
import NameService from './services/NameService';
// import axios from "axios"
export default {
  data() {
    return {
      items: []
    }
  },
  components: {
    Name
  },
  created() {
    this.fetchItems()
  },
  methods: {
    fetchItems() {
      NameService.getAll()
        .then((res) => this.items = res.data)
        .catch((err) => console.log(err))
    },
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <div>
        <!-- <RouterView/> -->
        Items
        <ul>
          <Name v-for="item in items" :key="item._id" :name="item.name" :id="item._id" @deleteItem="fetchItems"> </Name>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { RouterView } from 'vue-router'
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

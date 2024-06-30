<template>
  <div class="d-flex align-items-center">
    <h1 class="me-3">{{ name }}</h1>
    <h1>{{ id }}</h1>
    <div>
        <button @click="deleteItem(id)">Delete</button>
    </div>
  </div>

</template>

<script>
import NameService from '@/services/NameService';

export default {
  name: 'Name',
  props: {
    name: String,
    id: Object,

  },
  methods: {
    deleteItem(id) {
        console.log(id)
        NameService.delete(id)
            .then((res) => {
                this.$emit("deleteItem")
            })
            .catch((err) => console.log(err))
        
    }
  }
}
</script>

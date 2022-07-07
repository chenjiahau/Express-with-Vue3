<template>
  <div>
    {{ page.name }} - {{ message }}
    <br>
    <button @click="changePage">Change Page</button>
    <br>
    <button @click="stopWatch">Stop Watch</button>
  </div>
</template>
<script>
import { ref, computed, watchEffect } from 'vue'

export default {
  name: "HomePage",
  setup() {
    let page = ref({ name: 'Home' })

    const message = computed(() => {
      return 'This is ' + page.value.name
    })

    const changePage = () => {
      page.value.name = "Home Page"
    }

    const stopWatchAll = watchEffect(() => {
      console.log(page.value);
      console.log(message.value);
    })

    const stopWatch = () => {
      stopWatchAll()
    }

    return { page, message, changePage, stopWatch }
  }
}
</script>

<style scoped>
</style>
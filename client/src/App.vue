<template>
  <div class="div"> 
    <button @click="handleShowCountryList">Show Country List</button>
    <Country :showCountryList="showCountryList" :countryList="countryList" />
  </div>
</template>

<script>
import { ref } from 'vue'

import Country from './views/Country.vue'

const defaultCountryList = [
  { "id": 1, "country": "Ukraine" },
  { "id": 2, "country": "Brazil" },
  { "id": 3, "country": "China" },
  { "id": 4, "country": "Palestinian Territory" },
  { "id": 5, "country": "Mexico" }
]

export default {
  name: 'App',
  components: {
    Country
  },
  setup() {
    let page = ref({ name: 'Home' })
    let showCountryList = ref(false)
    let countryList = ref(defaultCountryList)

    const handleShowCountryList = () => {
      showCountryList.value = !showCountryList.value
    }

    return { page, showCountryList, countryList, handleShowCountryList }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

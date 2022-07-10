<template>
  <div class="country">
    <h1>Country - {{ country.country }}</h1>
    <div>
      Population: {{ country.population }}
      <br/>
      <button @click="goBack">Back</button>
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
import getCountry from '../composables/getCountry'

export default {
  name: "CountryDetail",
  setup() {
    const route = useRoute()
    const router = useRouter()

    const id = parseInt(route.params.id)
    let { getCountryDetail } = getCountry()
    const country = getCountryDetail(id)[0]

    const goBack = () => {
      router.push({ name: "Country" })
    }

    return { country, goBack }
  }
}
</script>

<style scoped>
.country {
  margin: 0 auto;
  width: 600px;
  text-align: center;
}
</style>
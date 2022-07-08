<template>
  <div class="country" v-if="showCountryList">
    <h1>Country List</h1>
    <div
      class="country-list"
      v-for="country in countryList"
      :key="country.id"
    >
      <div class="id">{{country.id}}</div>
      <div class="title">{{country.country}}</div>
    </div>
  </div>
</template>
<script>
import getCountry from '../composables/getCountry'

export default {
  name: "CountryPage",
  props: [ 'showCountryList', 'countryList' ],
  setup() {
    let { page } = getCountry()
    
    return { page }
  }
}
</script>

<style scoped>
.country {
  margin: 0 auto;
  width: 600px;
}

.country-list {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(217, 248, 196, 1);
  margin-bottom: 16px;
  border-radius: 150px;
  box-shadow: 6px 6px 6px rgba(249, 249, 197, 1);
}

.id {
  width: 50px;
  background: #fff;
  margin: 12px;
  border-radius: 15px;
}

.title {
  flex: 1;
  text-align: left;
  color: rgba(243, 120, 120, 1);
  font-weight: bold;
}

.title > a:link, .title > a:visited {
  color: #fff;
  text-decoration: none;
}

.title > a:hover {
  color: #fff;
  text-decoration: underline;
}
</style>
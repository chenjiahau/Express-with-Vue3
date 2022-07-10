<template>
  <div class="country">
    <h1>Country</h1>
    <div
      class="country-list"
      v-for="country in countryList"
      :key="country.id"
    >
      <div class="id">{{country.id}}</div>
      <div class="title">
        <a @click="gotoDetail(country)" href="#">{{country.country}}</a>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router';
import getCountry from '../composables/getCountry'

export default {
  name: "CountryPage",
  setup() {
    const router = useRouter()

    let { page, countryList } = getCountry()
    let gotoDetail = (country) => {
      router.push({ name: "CountryDetail", params: { id: country.id } })
    }

    return { page, countryList, gotoDetail }
  }
}
</script>

<style scoped>
.country {
  margin: 0 auto;
  width: 600px;
  text-align: center;
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
  text-align: center;
}

.title {
  flex: 1;
  text-align: left;
  color: rgba(243, 120, 120, 1);
  font-weight: bold;
}

.title > a:link, .title > a:visited {
  color: rgba(243, 120, 120, 1);
  text-decoration: none;
}

.title > a:hover {
  color: rgba(243, 120, 120, 1);
  text-decoration: underline;
}
</style>
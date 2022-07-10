import { ref } from 'vue'

const getCountry = () => {
  let page = ref({ name: 'Country' })
  let countryList = ref([
    { "id": 1, "country": "Ukraine", "population": "4413 萬" },
    { "id": 2, "country": "Brazil", "population": "2.126 億" },
    { "id": 3, "country": "China", "population": "14.02 億" },
    { "id": 4, "country": "Palestinian Territory", "population": "4,81 萬" },
    { "id": 5, "country": "Mexico", "population": "1.289 億" }
  ])

  const getCountryDetail = (id) => {
    return countryList.value.filter( country => country.id === id)
  }

  return { page, countryList, getCountryDetail }
}

export default getCountry
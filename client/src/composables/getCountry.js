import { ref, onMounted, onUnmounted, onUpdated } from 'vue'

const getCountry = () => {
  let page = ref({ name: 'Country' })

  onMounted(() => {
    console.log('Lifecycle onMounted')
  })

  onUnmounted(() => {
    // this sample doesn't perform, because router is not yet
    console.log('Lifecycle onUnmounted')
  })

  onUpdated(() => {
    console.log('Lifecycle onUpdated')
  })
    
  return { page }
}

export default getCountry
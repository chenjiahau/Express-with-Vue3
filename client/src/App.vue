<template>
  <div class="main">
    <h1>Vue</h1>
    <teleport to=".show-modal">
      <ModalBox>
        <template v-slot:body>
          <div>This is a button</div>
        </template>
        <button class="button">Click Me</button>
      </ModalBox>
    </teleport>
  </div>
</template>

<script>
import ModalBox from './components/ModalBox.vue'

export default {
  name: 'App',
  data() {
    return {
      isShow: true
    }
  },
  components: {
    ModalBox
  }
}
</script>

<style scoped>
.main {
  padding: 20px;
  text-align: center;
}
</style>

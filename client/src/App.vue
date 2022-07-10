<template>
  <div>
    <div id="nav">
      <router-link to="/" class="nav-item">Country</router-link>
      <router-link to="/Detail" class="nav-item">Detail</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#nav .nav-item {
  display: inline-block;
  padding: 4px;
}
</style>

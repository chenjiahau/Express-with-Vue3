<template>
  <div>
    <div id="nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/about" class="nav-item">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
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

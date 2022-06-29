<template>
  <div>
    <div id="nav">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link :to="{ name: 'About' }" class="nav-item">About</router-link>
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

#nav a.nav-item {
  width: 200px;
  border-radius: 100px;
  background: #c0c0c0;
  color: white;
  margin: 8px;
  text-decoration: none;
}

#nav a.router-link-active {
  background: orangered;
}

#nav a.router-link-exact-active {
  background: orangered;
}
</style>

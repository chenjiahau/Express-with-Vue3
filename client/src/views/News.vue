<template>
  <div>
    <h1>News</h1>
    <div class="content">
      <div class="list" v-if="news">
        <div class="id">{{news.id}}</div>
        <div class="title">{{news.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news-page',
  props: [ 'id' ],
  data() {
    return {
      news: null
    }
  },
  mounted() {
    if (!this.id) {
      this.$router.push('/')
    }

    fetch('/list/' + this.id)
      .then(data => data.json())
      .then(result => {
        this.news = result.data
      })
  },
}
</script>

<style scoped>
.content {
  margin: 0 auto;
  width: 600px;
}

a.link {
  display: flex;
  align-items: baseline;
  text-decoration: none;
}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 87, 51, 0.5);
  margin-bottom: 16px;
  border-radius: 150px;
  box-shadow: 6px 6px 2px rgba(255, 87, 51, 0.2);
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
  color: #fff;
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
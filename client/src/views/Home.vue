<template>
  <div>
    <h1>News List</h1>
    <div class="content">
      <div class="list" v-for="news in newsList" :key="news.id">
        <div class="id">{{news.id}}</div>
        <div class="title">
          <router-link :to="{ name: 'News', params: { id: news.id }}">{{news.title}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data() {
    return {
      newsList: []
    }
  },
  mounted() {
    fetch('/list')
      .then(data => data.json())
      .then(result => {
        this.newsList = result.data;
        this.redirectToNews();
      })
  },
  methods: {
    redirectToNews() {
      if (this.$route.query.id && !isNaN(parseInt(this.$route.query.id))) {
        this.$router.replace({
          name: 'News',
          params: {
            id: parseInt(this.$route.query.id)
          }
        });
      }
    }
  }
}
</script>

<style scoped>
.content {
  margin: 0 auto;
  width: 600px;
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
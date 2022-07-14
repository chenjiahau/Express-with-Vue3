<template>
  <div class="content">
    <div class="operation">
      <button @click="toggleList" v-if="toggleListFlag">Hide List</button>
      <button @click="toggleList" v-if="!toggleListFlag">Show List</button>
      <button @click="add">Add</button>
      <input type="text" ref="newOne" />
    </div>
    <div
      class="message-list"
      v-if="toggleListFlag"
    >
      <div v-for="message in messageList" :key="message.title">
        <MessageItem
          :message="message"
          @changeOne="changeOne"
          @deleteOne="deleteOne"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MessageItem from './components/MessageItem.vue';

const defaultMessageList = [
  { id: 1, title: 'Hi' },
  { id: 2, title: 'Welcome' },
  { id: 3, title: 'Thank you' },
]

export default {
  name: 'App',
  components: {
    MessageItem
  },
  data() {
    return {
      toggleListFlag: true,
      messageList: defaultMessageList
    }
  },
  methods: {
    toggleList() {
      this.toggleListFlag = !this.toggleListFlag;
    },
    add() {
      this.messageList.push({
        id: this.messageList.length + 1,
        title: this.$refs.newOne.value
      })
    },
    changeOne(id, title) {
      const index = this.messageList.findIndex(message => id === message.id);
      this.messageList[index].title = title;
    },
    deleteOne(id) {
      this.messageList = this.messageList.filter(message => message.id !== id);
    }
  },
  beforeCreate() {
    console.log('App-beforeCreate');
  },
  created() {
    console.log('App-created');
  },
  beforeMount() {
    console.log('App-beforeMount');
  },
  mounted() {
    console.log('App-mounted');
  },
  beforeUpdate() {
    console.log('App-beforeUpdate');
  },
  updated() {
    console.log('App-updated');
  },
  beforeUnmount() {
    console.log('App-beforeUnmount');
  },
  unmounted() {
    console.log('App-unmounted');
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 60%;
  margin: 16px auto;
}

.operation {
  flex-direction: row;
  width: 100%;
  margin-bottom: 26px;
}

.message-list {
  width: 100%;
}
</style>

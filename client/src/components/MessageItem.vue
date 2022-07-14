<template>
  <div class="message">
    <div class="title">
      <input
        type="text"
        :value="message.title"
        ref="existOne"
      />
    </div>
    <div class="action">
      <button @click="changeOne(message.id)">Change</button>
      <button @click="deleteOne(message.id)">Delete</button>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'MessageItem',
  props: ['message'],
  methods: {
    changeOne(id) {
      this.$emit('changeOne', id, this.$refs.existOne.value);
    },
    deleteOne(id) {
      this.$emit('deleteOne', id);
    }
  },
  beforeCreate() {
    console.log('MessageItem-beforeCreate');
  },
  created() {
    console.log('MessageItem-created');
  },
  beforeMount() {
    console.log('MessageItem-beforeMount');
  },
  mounted() {
    console.log('MessageItem-mounted');
  },
  beforeUpdate() {
    console.log('MessageItem-beforeUpdate');
  },
  updated() {
    console.log('MessageItem-updated');
  },
  beforeUnmount() {
    console.log('MessageItem-beforeUnmount');
  },
  unmounted() {
    console.log('MessageItem-unmounted');
  }
}
</script>

<style scoped>
.message {
  display: flex;
  width: 100%;
}

.title {
  flex: 1;
}
</style>
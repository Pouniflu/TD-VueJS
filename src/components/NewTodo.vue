<template>
  <div id="new-todo">
    <input type="text" v-model="theTask" placeholder="Nouvelle tâche...">
    <button @click="sendTask(theTask)">+</button>
  </div>
</template>

<script>
export default {
  name: 'new-todo',
  methods: {
    sendTask: function(task) {
      if(task != null) {
        this.$emit('newTask', task)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#new-todo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input[type="text"] {
  text-align: center;
  border: none;
  border-bottom: 2px solid rgb(0, 231, 181);
  background: none;
  padding: 4px 2px;
}

button {
  background-color: rgb(3, 194, 50);
  border-radius: 30px;
  border: none;
  color: white;
  font-weight: bold;
  padding: 3px 14px 6px;
  font-size: 30px;
}
</style>
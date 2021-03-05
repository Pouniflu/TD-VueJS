<template>
  <div id="todo-list" v-for="task in tasks" :key="task">
    <input type="checkbox" :id="tasks.indexOf(task)" @click="check(tasks.indexOf(task))">
    <label :for="tasks.indexOf(task)" :id="'index' + tasks.indexOf(task)" class="unchecked">{{ task.title }}</label>
    <button @click="remover(tasks.indexOf(task))"><i class="fas fa-trash"></i></button>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  props: {
        tasks: {
            type: Array,
            default: () => []
        },
        title : {
          type : String
        }
  },
  methods: {
    check: function(index) {
      if(document.getElementById(index).checked) {
        document.getElementById('index' + index).className = "checked";
      } else {
        document.getElementById('index' + index).className = "unchecked";
      }
    },
    remover: function(index) {
      this.$emit('remover', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#todo-list {
  padding: 14px 30px;
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: rgb(245, 245, 245);
}

input {
  border-radius: 50%;
  border: 1px solid #ccc;
}

button {
  background-color: red;
  border: none;
  color: white;
  padding: 8px 11px;
  border-radius: 30px;
}
</style>
<style>
.checked {
  text-decoration: line-through;
}
</style>
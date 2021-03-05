<script>
import TodoCard from './components/TodoCard.vue'

export default {
  name: 'container',
  components: {
    TodoCard
  }
}
</script>

<template>
  <div id="container">
     <TodoCard></TodoCard>
  </div>
</template>

<style lang="css">
body {
  background-color : rgb(255, 207, 49);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#container {
  box-shadow: 2px 8px 16px rgba(163, 44, 1, 0.322);
}
</style>>
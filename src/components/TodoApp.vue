<script setup>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
</script>
<template>
    <div class="todo-app">
        <h1>Uzi Todo List</h1>
        <todo-form/>
        <todo-list/>
    </div>
</template>
<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
  color: black;
  justify-content: center;
  font-size: medium;
}

</style>
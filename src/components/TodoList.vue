<script setup>
import { useTodoListStore} from '../stores/todoList';
import { storeToRefs } from 'pinia';

const store = useTodoListStore()
// storeToRefs lets todoList keep reactivity:

const {todoList} = storeToRefs(store)

// destructuring action method doesn't require using storeToRefs:

const {toggleCompleted} = store;

</script>
<template>
    <div v-for ="todo in todoList" :key="todo.index" class="item">
        <div class="content">
            <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
            <button @click.stop="toggleCompleted(todo.index)">&#10004;</button>
        </div>
    </div>
</template>
<style scoped>
.completed{
    text-decoration: line-through;
}

</style>
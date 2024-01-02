<script setup>
import {ref} from 'vue'
import { useTodoListStore } from '../stores/todoList';

const todo = ref('')

const store = useTodoListStore()

function addItemandClear(item){
    if(item.length===0){
        return
    }
    store.addTodo(item)
    todo.value=''
}

</script>
<template>
    <div>
        <form @submit.prevent="addItemandClear(todo)">
            <input v-model="todo" type="text">
            <button>Add</button>
        </form>
    </div>
</template>
<style scoped>

</style>
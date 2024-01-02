import { defineStore } from 'pinia'

export const useTodoListStore = defineStore("todoList", {
  state:()=>({
    todoList:[]
  }),
  actions:{
    addTodo(item){
        this.todoList.push({item,id:this.id++,completed:false})
    },
    deleteTodo(itemId){
        this.todoList = this.todoList.filter((Object)=>{
            return Object.id !== itemId
        })

    },
    toggleCompleted(idtoFind){
      const todo = this.todoList.find((obj)=>obj.id ===idtoFind)
      if (todo){
        todo.completed = !todo.completed
      }
    }
  }
})

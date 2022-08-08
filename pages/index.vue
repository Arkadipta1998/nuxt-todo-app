<script setup lang="ts">
import { Todo } from "~~/models/Todo";
import AddTodo from "../components/AddTodo.vue";
import TodoList from "../components/TodoList.vue";
useHead({
    title: 'Root Page'
})
const todos = ref<Todo[]>([
    {
        id: 1,
        text: 'Test 1'
    },
    {
        id: 2,
        text: 'Test 2'
    }
])

const editTodo = ref<Todo | null>(null)

const addTodo = (todo: Todo) => {
    todos.value.push(todo)
}

const deleteTodo = (id: number) => {
    todos.value = todos.value.filter(todo => todo.id !== id)
}

const updateTodo = (newTodo: Todo) => {
    todos.value = todos.value.map(todo => todo.id === newTodo.id ? newTodo : todo)
}

provide('context', {
    editTodo,
    todos,
    addTodo,
    deleteTodo,
    updateTodo
})

watch(editTodo, (newTodo) => {
    console.log(newTodo)
})
</script>

<template>
    <div>
        <AddTodo />
        <TodoList />
    </div>
</template>

<style scoped>
</style>
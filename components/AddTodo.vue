<script setup lang="ts">
import { ContextProvider } from '~~/models/ContextProvider';

const { todos, editTodo, addTodo, updateTodo } = inject<ContextProvider>('context')

const input = ref('')

const handleSubmit = () => {
    if(!input.value.trim()) return
    const todo = {
        id: editTodo.value ? editTodo.value.id : todos.value.length + 1,
        text: input.value
    }
    if(editTodo.value) {
        updateTodo(todo)
        editTodo.value = null
    }
    else {
        addTodo(todo)
        input.value = ''
    }
}

onUpdated(() => console.log('addtodo updated'))

watch(editTodo, (newTodo) => {
    if(newTodo) input.value = editTodo.value.text
    else input.value = ''
})
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="input" placeholder="Enter todo" />
        <button type="submit">{{ editTodo ? 'Update' : 'Add' }}</button>
        <button @click="() => editTodo = null" v-if="editTodo">Cancel</button>
    </form>
</template>

<style scoped>
</style>
<script setup lang="ts">
import { ContextProvider } from '~~/models/ContextProvider';
import { Todo } from '~~/models/Todo';

const props = defineProps<{
    todo: Todo
}>()

const { deleteTodo, editTodo } = inject<ContextProvider>('context')

onUpdated(() => console.log('todoitem updated'))
</script>

<template>
    <div>
        <p>{{ props.todo.text }}</p>
        <button @click="deleteTodo(todo.id)">X</button>
        <button @click="() => editTodo = todo">Update</button>
    </div>
</template>

<style scoped>
</style>
<script setup lang="ts">
import { ContextProvider } from '~~/models/ContextProvider';

const { todos } = inject<ContextProvider>('context')

onUpdated(() => console.log('todolist updated'))
</script>

<template>
    <div v-for="todo in todos" :key="todo.id">
        <TodoItem :todo="todo" />
    </div>
    <!-- <div>{{ context.todos }}</div> -->
</template>

<style scoped>
</style>
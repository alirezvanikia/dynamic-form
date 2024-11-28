<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <DynamicForm />
  </div>
</template>

<script>
import DynamicForm from './views/DynamicForm.vue';

export default {
  name: 'App',
  components: {
    DynamicForm,
  },
};
</script>

<style></style>

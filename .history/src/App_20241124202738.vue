<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <DynamicForm />
  </div>
</template>

<script>
import DynamicForm from './views/DynamicForm.vue'; // مسیر صحیح را بررسی کن

export default {
  name: 'App',
  components: {
    DynamicForm, // اینجا باید کامپوننت معرفی شود
  },
};
</script>

<style>
/* استایل‌های موردنیاز */
</style>

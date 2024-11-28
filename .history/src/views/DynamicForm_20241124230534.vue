<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800">{{ formTitle }}</h1>
      <p class="text-gray-600 mb-4">{{ formDescription }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- استفاده از کامپوننت InputText -->
        <InputText
          name="name"
          label="Full Name"
          v-model="formData.name" 
          placeholder="Enter your full name"
          required
        />
        <!-- اینجا می‌توانید دیگر ورودی‌ها رو هم به همین صورت اضافه کنید -->
        
        <!-- دکمه ارسال -->
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Submit
        </button>
      </form>
    </div>
  </template>
  
  <script>
  // وارد کردن کامپوننت InputText
  import InputText from '../components/InputText.vue';
  
  export default {
    components: {
      InputText,  // تعریف کامپوننت برای استفاده
    },
    data() {
      return {
        formTitle: 'Advanced Dynamic Form',
        formDescription: 'Fill out the required fields to proceed.',
        formData: {
          name: '',  // مقدار اولیه برای input
        },
      };
    },
    methods: {
      handleSubmit() {
      },
    },
  };
  </script>
  
  <style scoped>
  /* استایل‌ها */
  </style>
  
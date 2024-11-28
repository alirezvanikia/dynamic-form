<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800">{{ formTitle }}</h1>
      <p class="text-gray-600 mb-4">{{ formDescription }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- استفاده از کامپوننت InputText و ارسال داده‌ها از فایل JSON -->
        <InputText
          v-for="(field, index) in formFields"
          :key="index"
          :name="field.name"
          :label="field.label"
          v-model="formData[field.name]"  <!-- استفاده از v-model به درستی -->
          :placeholder="field.placeholder"
          :required="field.required"
        />
        <!-- دکمه ارسال -->
        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Submit
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import InputText from '../components/InputText.vue';
  
  export default {
    components: {
      InputText,
    },
    data() {
      return {
        formTitle: 'Advanced Dynamic Form',
        formDescription: 'Fill out the required fields to proceed.',
        formFields: [],  // اینجا داده‌های فیلدها ذخیره می‌شود
        formData: {},    // اینجا داده‌های وارد شده از کاربر ذخیره می‌شود
      };
    },
    created() {
      this.loadFormData();
    },
    methods: {
      async loadFormData() {
        const response = await fetch('/formConfig.json');
        const data = await response.json();
        
        this.formFields = data.fields;
  
        this.formFields.forEach(field => {
          this.$set(this.formData, field.name, field.default || '');
        });
      },
      handleSubmit() {
        console.log('Form submitted:', this.formData);
      },
    },
  };
  </script>
  
  <style scoped>
  /* استایل‌ها */
  </style>
  
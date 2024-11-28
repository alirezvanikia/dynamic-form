<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800">{{ formConfig.title }}</h1>
      <p class="text-gray-600 mb-4">{{ formConfig.description }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- حلقه برای رندر فیلدها -->
        <div v-for="field in formConfig.fields" :key="field.name">
          <!-- فقط نمایش فیلدها -->
          <InputText
            v-if="field.type === 'text' || field.type === 'email' || field.type === 'number'"
            :name="field.name"
            :label="field.label"
            v-model="formData[field.name]"
            :placeholder="field.placeholder"
            :required="field.required"
          />
  
          <!-- نمایش چک‌باکس -->
          <div v-else-if="field.type === 'checkbox'" class="flex items-center">
            <input
              type="checkbox"
              :id="field.name"
              v-model="formData[field.name]"
              :checked="field.default || false"
              class="mr-2"
            />
            <label :for="field.name" class="text-sm text-gray-700">{{ field.label }}</label>
          </div>
        </div>
  
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import InputText from '../components/InputText.vue';
  import formConfig from './formConfig.json';
  
  export default {
    components: {
      InputText,
    },
    data() {
      // مقداردهی اولیه فیلدها
      const initialFormData = {};
      formConfig.fields.forEach((field) => {
        initialFormData[field.name] = field.type === 'checkbox' ? field.default || false : '';
      });
  
      return {
        formConfig: formConfig, // داده‌های فرم از JSON
        formData: initialFormData, // مقدار اولیه فرم
      };
    },
    methods: {
      handleSubmit() {
        console.log('Form submitted:', this.formData);
      },
    },
  };
  </script>
  
<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800">{{ formTitle }}</h1>
      <p class="text-gray-600 mb-4">{{ formDescription }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- حلقه روی فیلدها -->
        <InputText
          v-for="(field, index) in formFields"
          :key="index"
          :name="field.name"
          :label="field.label"
          v-model="formData[field.name]" <!-- متصل کردن داده -->
          :placeholder="field.placeholder" <!-- مقدار placeholder -->
          :required="field.required"
        />
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
        formTitle: '', // عنوان از JSON
        formDescription: '', // توضیحات از JSON
        formFields: [], // فیلدها از JSON
        formData: {}, // داده‌های ورودی
      };
    },
    created() {
      this.loadFormData();
    },
    methods: {
      async loadFormData() {
        // بارگذاری فایل JSON
        const response = await fetch('/formConfig.json');
        const data = await response.json();
  
        // تنظیم داده‌ها از JSON
        this.formTitle = data.title;
        this.formDescription = data.description;
        this.formFields = data.fields;
  
        // مقداردهی اولیه به formData
        this.formFields.forEach((field) => {
          this.$set(this.formData, field.name, field.default || ''); // مقدار اولیه برای هر فیلد
        });
      },
      handleSubmit() {
        console.log('Form submitted:', this.formData); // ارسال داده‌ها
      },
    },
  };
  </script>
  
<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800">{{ formTitle }}</h1>
      <p class="text-gray-600 mb-4">{{ formDescription }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <InputText
        v-for="(field, index) in formFields"
        :key="index"
        :name="field.name"
        :label="field.label"
        v-model="formData[field.name]"
        :placeholder="field.placeholder"
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
      formTitle: '', // عنوان فرم
      formDescription: '', // توضیحات فرم
      formFields: [], // اطلاعات فیلدها
      formData: {}, // داده‌های ورودی
    };
  },
  created() {
    this.loadFormConfig(); // بارگذاری اطلاعات از JSON
  },
  methods: {
    async loadFormConfig() {
      // بارگذاری فایل JSON
      const response = await fetch('/formConfig.json');
      const data = await response.json();

      // تنظیم مقادیر فرم
      this.formTitle = data.title;
      this.formDescription = data.description;
      this.formFields = data.fields;

      // مقداردهی اولیه برای formData
      this.formFields.forEach((field) => {
        this.$set(this.formData, field.name, ''); // مقدار پیش‌فرض
      });
    },
    handleSubmit() {
      console.log('Form submitted:', this.formData);
    },
  },
};
  </script>
  
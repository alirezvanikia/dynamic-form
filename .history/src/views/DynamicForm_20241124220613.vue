<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800">{{ formTitle }}</h1>
      <p class="text-gray-600 mb-4">{{ formDescription }}</p>
  
      <!-- Dynamic Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Input: Name -->
        <InputText
          v-model="formData.name"
          label="Name"
          name="name"
          placeholder="Enter your full name"
          required
        />
        
        <!-- Submit Button -->
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
  import InputText from '@/components/InputText.vue';
  
  export default {
    name: 'DynamicForm',
    components: {
      InputText
    },
    data() {
      return {
        formTitle: "Advanced Dynamic Form",
        formDescription: "Fill out the required fields to proceed.",
        formData: {
          name: ""
        }
      };
    },
    methods: {
      // Handle the form submission
      handleSubmit() {
        console.log('Form submitted:', this.formData);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Tailwind already provides good styles */
  </style>
  
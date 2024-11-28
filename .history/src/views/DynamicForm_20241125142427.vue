<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800">{{ formTitle }}</h1>
      <p class="text-gray-600 mb-4">{{ formDescription }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <InputText
          name="name"
          label="Full Name"
          v-model="formData.name"
          placeholder="Enter your full name"
          required
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
        formTitle: 'Advanced Dynamic Form',
        formDescription: 'Fill out the required fields to proceed.',
        formData: {
          name: '',  
        },
        data: {

        }
      };
    },

    // Fetch JSON data when the component is mounted
    onMounted(async () => {
      try {
        const response = await fetch('path/to/your.json'); // Update with actual JSON path or API endpoint
        data.value = await response.json();
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    });

    methods: {
      handleSubmit() {
        console.log('Form submitted:', this.formData);  
      },
    },
  };
  </script>
  
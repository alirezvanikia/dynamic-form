<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800">{{ formTitle }}</h1>
      <p class="text-gray-600 mb-4">{{ formDescription }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Fields will be rendered here dynamically -->
        <div v-for="(field, index) in formFields" :key="index">
          <div v-if="field.type === 'text'">
            <label :for="field.name" class="block text-sm font-medium text-gray-700">{{ field.label }}</label>
            <input
              v-model="formData[field.name]"
              :type="field.type"
              :id="field.name"
              :placeholder="field.placeholder"
              :required="field.required"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          
          <div v-if="field.type === 'email'">
            <label :for="field.name" class="block text-sm font-medium text-gray-700">{{ field.label }}</label>
            <input
              v-model="formData[field.name]"
              :type="field.type"
              :id="field.name"
              :placeholder="field.placeholder"
              :required="field.required"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
  
          <div v-if="field.type === 'number'">
            <label :for="field.name" class="block text-sm font-medium text-gray-700">{{ field.label }}</label>
            <input
              v-model="formData[field.name]"
              :type="field.type"
              :id="field.name"
              :placeholder="field.placeholder"
              :required="field.required"
              :min="field.validation?.min"
              :max="field.validation?.max"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
  
          <div v-if="field.type === 'checkbox'">
            <input
              v-model="formData[field.name]"
              :id="field.name"
              type="checkbox"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label :for="field.name" class="ml-2 block text-sm text-gray-900">
              {{ field.label }}
            </label>
          </div>
        </div>
  
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
  export default {
    data() {
      return {
        formTitle: "Advanced Dynamic Form",
        formDescription: "Fill out the required fields to proceed.",
        formData: {},
        formFields: [],
      };
    },
    mounted() {
      this.loadFormFields();
    },
    methods: {
      loadFormFields() {
        const formJson = {
          title: "Advanced Dynamic Form",
          description: "Fill out the required fields to proceed.",
          fields: [
            {
              label: "Name",
              name: "name",
              type: "text",
              placeholder: "Enter your full name",
              required: true,
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              placeholder: "Enter your email address",
              required: true,
              validation: {
                regex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                errorMessage: "Please enter a valid email address.",
              },
            },
            {
              label: "Age",
              name: "age",
              type: "number",
              placeholder: "Enter your age",
              required: true,
              validation: {
                min: 18,
                max: 100,
                errorMessage: "Age must be between 18 and 100.",
              },
            },
            {
              label: "Newsletter Subscription",
              name: "newsletter",
              type: "checkbox",
              default: false,
            },
          ],
        };
        this.formFields = formJson.fields;
      },
      handleSubmit() {
        console.log("Form submitted:", this.formData);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Tailwind already provides good styles */
  </style>
  
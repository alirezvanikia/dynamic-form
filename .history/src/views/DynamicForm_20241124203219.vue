<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800">{{ formTitle }}</h1>
      <p class="text-gray-600 mb-4">{{ formDescription }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Input: Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            v-model="formData.name"
            placeholder="Enter your full name"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        
        <!-- Input: Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            v-model="formData.email"
            placeholder="Enter your email address"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        
        <!-- Input: Age -->
        <div>
          <label for="age" class="block text-sm font-medium text-gray-700">Aشسge</label>
          <input
            id="age"
            type="number"
            v-model="formData.age"
            placeholder="Enter your age"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            min="18"
            max="100"
            required
          />
        </div>
        
        <!-- Checkbox: Newsletter -->
        <div class="flex items-center">
          <input
            id="newsletter"
            type="checkbox"
            v-model="formData.newsletter"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label for="newsletter" class="ml-2 block text-sm text-gray-900">
            Subscribe to newsletter
          </label>
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
        formData: {
          name: "",
          email: "",
          age: null,
          newsletter: false,
        },
      };
    },
    methods: {
      handleSubmit() {
        console.log("Form submitted:", this.formData);
      },
    },
  };
  </script>
  
  <style>
  /* Optional: Tailwind already provides good styles */
  </style>
  
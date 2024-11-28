<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800">{{ formTitle }}</h1>
      <p class="text-gray-600 mb-4">{{ formDescription }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Name Input -->
        <InputText
          v-model="formData.name"
          name="name"
          label="Name"
          placeholder="Enter your full name"
          required
        />
  
        <!-- Email Input -->
        <InputEmail
          v-model="formData.email"
          name="email"
          label="Email"
          placeholder="Enter your email address"
          required
        />
  
        <!-- Age Input -->
        <InputAge
          v-model="formData.age"
          name="age"
          label="Age"
          placeholder="Enter your age"
          min="18"
          max="100"
          required
        />
  
        <!-- Newsletter Checkbox -->
        <InputCheckbox
          v-model="formData.newsletter"
          name="newsletter"
          label="Subscribe to newsletter"
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
  import InputText from '../components/InputText.vue';
//   import InputEmail from '../components/InputEmail.vue';
//   import InputAge from '../components/InputAge.vue';
//   import InputCheckbox from '../components/InputCheckbox.vue';
  
  export default {
    components: {
      InputText,
      InputEmail,
      InputAge,
      InputCheckbox,
    },
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
  
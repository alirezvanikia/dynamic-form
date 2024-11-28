<template>
    <div>
      <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <input
        :id="name"
        type="text"
        v-model="modelValue"
        :placeholder="placeholder"
        :required="required"
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'InputText',
    props: {
      modelValue: String,
      label: String,
      name: String,
      placeholder: String,
      required: Boolean
    },
    emits: ['update:modelValue'],
    watch: {
      modelValue(newValue) {
        this.$emit('update:modelValue', newValue);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Tailwind already provides good styles */
  </style>
  
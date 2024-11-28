<template>
    <div class="mb-4">
      <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <input :id="name" type="email" :value="modelValue" @input="onInputChange" :placeholder="placeholder"
        :required="required" :class="inputClasses"  />
        <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: { type: String, required: true },
      label: { type: String, required: true },
      modelValue: { type: String, required: true },  
      placeholder: { type: String, default: '' },
      required: { type: Boolean, default: true },
    },
    computed: {
      inputClasses() {
        return "mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm";
      }
    },
    methods: {
      onInputChange(event) {
        // ارسال تغییرات به والد از طریق emit
        this.$emit('update:modelValue', event.target.value);
      }
    }
  };
  </script>
  
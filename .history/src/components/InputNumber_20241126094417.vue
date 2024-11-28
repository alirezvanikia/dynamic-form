<template>
    <div class="mb-4">
      <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <input :id="name" type="number" :value="modelValue" @input="onInputChange" :placeholder="placeholder"
      :required="required" :class="inputClasses" @blur="validate" />
      
      <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: { type: String, required: true },
      label: { type: String, required: true },
      placeholder: { type: String, default: '' },
      required: { type: Boolean, default: false },
      modelValue: { type: [String, Number], required: true },
    },
    data() {
      return {
        value: this.modelValue, // مقدار واردشده توسط کاربر
        error: '', // پیام خطا
      };
    },
    computed: {
      inputClasses() {
        return `mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
          this.error ? 'border-red-500' : ''
        }`;
      },
    },
    methods: {
      validate() {
        this.error = '';
        // اگر فیلد اجباری است و خالی است
        if (this.required && !this.value) {
          this.error = 'This field is required.';
          return;
        }
        // اگر اعتبارسنجی برای سن تعریف شده است
          if (this.value < this.validation.min || this.value > this.validation.max) {
            this.error = this.validation.errorMessage;
            console.log(this.validation.errorMessage);
            
            return;
          }
        // مقدار معتبر است
        this.$emit('update:modelValue', this.value); // ارسال مقدار به والد
      },
    },
    watch: {
      modelValue(newValue) {
        this.value = newValue; // همگام‌سازی مقدار با والد
      },
    },
  };
  </script>
  
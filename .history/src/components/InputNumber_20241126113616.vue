<template>
    <div class="mb-4">
      <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <input
        :id="name"
        type="number"
        :value="modelValue"
        @input="onInputChange"
        :placeholder="placeholder"
        :required="required"
        :class="inputClasses"
        @blur="validation"
      />
      <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import validationRules from '../views/formConfig.json';
  
  export default {
    props: {
      name: { type: String, required: true },
      label: { type: String, required: true },
      modelValue: { type: [String, Number], required: true }, // نوع داده را از String به [String, Number] تغییر دادیم
      placeholder: { type: String, default: '' },
      required: { type: Boolean, default: false },
    },
    data() {
      return {
        value: this.modelValue,
        error: '',
        fieldValidation: {}, // اینجا فیلد های validation به صورت جداگانه ذخیره خواهند شد
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
      loadValidationRules() {
        // پیدا کردن قوانین اعتبارسنجی برای فیلد جاری
        const fieldConfig = validationRules.find(field => field.name === this.name);
        if (fieldConfig && fieldConfig.validation) {
          this.fieldValidation = fieldConfig.validation;
        } else {
          this.fieldValidation = {}; // در صورتی که تنظیمات validation برای این فیلد وجود نداشته باشد
        }
      },
  
      validation() {
        this.error = '';
  
        // اعتبارسنجی خالی بودن
        if (this.value === '' && this.required) {
          this.error = 'This field is required';
          return;
        }
  
        // بارگذاری قوانین اعتبارسنجی
        this.loadValidationRules();
  
        // دسترسی به مقادیر min, max, errorMessage
        const { min, max, errorMessage } = this.fieldValidation;
  
        // تبدیل مقدار وارد شده به عدد
        const valueAsNumber = Number(this.value);
  
        // چک کردن اینکه مقدار عددی باشد
        if (isNaN(valueAsNumber)) {
          this.error = 'Value must be a number';
          return;
        }
  
        // بررسی مقدار min و max
        if (min !== undefined && valueAsNumber < min) {
          this.error = errorMessage || `Value must be greater than or equal to ${min}`;
          return;
        }
        if (max !== undefined && valueAsNumber > max) {
          this.error = errorMessage || `Value must be less than or equal to ${max}`;
          return;
        }
  
        // اگر همه چک‌ها رد شدند، مقدار معتبر است
        this.$emit('update:modelValue', this.value);
      },
  
      onInputChange(event) {
        // ارسال تغییرات به والد
        this.$emit('update:modelValue', event.target.value);
      },
    },
    watch: {
      modelValue(newValue) {
        this.value = newValue; // همگام‌سازی مقدار با والد
      },
    },
    created() {
      // بارگذاری قوانین اعتبارسنجی هنگام ایجاد کامپوننت
      this.loadValidationRules();
    },
  };
  </script>
  
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
    validation() {
      this.error = '';

      // اعتبارسنجی خالی بودن
      if (this.value === '' && this.required) {
        this.error = 'This field is required';
        return;
      }

      // تبدیل مقدار به عدد (اگر به صورت عددی وارد شده باشد)
      const valueAsNumber = Number(this.value);
      
      // بررسی اینکه مقدار عددی باشد
      if (isNaN(valueAsNumber)) {
        this.error = 'Value must be a number';
        return;
      }

      // اعتبارسنجی با استفاده از مقادیر JSON
      const { min, max, errorMessage } = validationRules;
      if (valueAsNumber < min || valueAsNumber > max) {
        this.error = errorMessage;
        return;
      }

      // مقدار معتبر است، تغییر مقدار به والد
      this.$emit('update:modelValue', this.value);
    },
    onInputChange(event) {
      // ارسال تغییرات به والد از طریق emit
      this.$emit('update:modelValue', event.target.value);
    },
  },
  watch: {
    modelValue(newValue) {
      this.value = newValue; // همگام‌سازی مقدار با والد
    },
  },
};
</script>

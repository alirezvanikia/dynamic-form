<template>
  <div class="mb-4">
    <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      :id="name"
      type="text"
      v-model="value"
      :placeholder="placeholder"
      :class="inputClasses"
      @blur="validate"
    />
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
    validation: { type: Object, default: () => null },
    modelValue: { type: String, required: true },
  },
  data() {
    return {
      value: this.modelValue,
      error: '', // نگه‌داری پیام خطا
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
      // اعتبارسنجی اجباری بودن
      if (this.required && !this.value) {
        this.error = 'This field is required.';
        return;
      }
      // اعتبارسنجی با regex
      if (this.validation && this.validation.regex) {
        const regex = new RegExp(this.validation.regex);
        if (!regex.test(this.value)) {
          this.error = this.validation.errorMessage || 'Invalid input.';
          return;
        }
      }
      // مقدار معتبر است
      this.$emit('update:modelValue', this.value);
    },
  },
  watch: {
    modelValue(newValue) {
      this.value = newValue; // همگام‌سازی مقدار از والد
    },
  },
};
</script>

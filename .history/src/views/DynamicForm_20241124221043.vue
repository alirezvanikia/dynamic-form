<template>
    <div>
      <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <InputText
  :modelValue="formData.name"
  @update:modelValue="formData.name = $event"
  
/>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InputText',
    props: {
      modelValue: String,  // دریافت مدل از والد
      label: String,       // عنوان ورودی
      name: String,        // نام ورودی
      placeholder: String, // placeholder
      required: Boolean    // required
    },
    emits: ['update:modelValue'], // اعلام اینکه رویداد update:modelValue از این کامپوننت ارسال خواهد شد
    watch: {
      modelValue(newValue) {
        // ارسال رویداد به والد در صورتی که مقدار تغییر کند
        this.$emit('update:modelValue', newValue);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: Tailwind already provides good styles */
  </style>
  
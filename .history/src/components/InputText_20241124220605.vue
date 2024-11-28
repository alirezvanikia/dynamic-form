<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      :id="name"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)" 
      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    modelValue: String,  // مدل ورودی
    label: String,       // عنوان فیلد
    name: String,        // نام فیلد
    placeholder: String, // placeholder
    required: Boolean    // required
  }
};
</script>

<style scoped>
/* Optional: Tailwind already provides good styles */
</style>

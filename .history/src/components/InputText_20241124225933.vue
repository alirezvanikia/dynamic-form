<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      :id="name"
      type="text"
      v-model="value"
      :placeholder="placeholder"
      class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      :required="required"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    label: String,
    value: String,
    placeholder: String,
    required: Boolean,
};
</script>

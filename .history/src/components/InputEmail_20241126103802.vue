<template>
    <div class="mb-4">
      <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
      <input :id="name" type="email" :value="modelValue" @input="onInputChange" :placeholder="placeholder"
        :required="required" :class="inputClasses" />
    </div>
  </template>
  
  <script>
  export default {
    
      
  };
  </script>
  
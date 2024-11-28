<template>
  <div class="mb-4">
    <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input :id="name" :type="type" :value="modelValue" @input="onInputChange" :placeholder="placeholder"
      :required="required" :class="inputClasses" @blur="validation" />
      <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    modelValue: { type: String, required: true },  
    type: { type: String, required: true },  
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    type: { type: String, default: "text" },
  },
  data() {
    return {
      value: this.modelValue, 
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
    validation(){
      this.error = '';
      if(this.value === '' && this.required){
        this.error = 'This field is required';
        return;
      }
      // مقدار معتبر است
      this.$emit('update:modelValue', this.value); // ارسال مقدار به والد
    },

    onInputChange(event) {
      // ارسال تغییرات به والد از طریق emit
      this.$emit('update:modelValue', event.target.value);
    }
  },

watch: {
  modelValue(newValue) {
    this.value = newValue; // همگام‌سازی مقدار با والد
  },
},
};
</script>

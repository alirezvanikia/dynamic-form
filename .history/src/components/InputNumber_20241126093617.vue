<template>
    <div class="mb-4">
        <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <input
            :id="name"
            type="number"
            :value="value"
            @input="onInputChange"
            :placeholder="placeholder"
            :required="required"
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
        modelValue: { type: [String, Number], required: true }, // مقدار ورودی
    },
    data() {
        return {
            value: this.modelValue, // مقدار داخلی ذخیره شده
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
        onInputChange(event) {
            // به‌روزرسانی مقدار ورودی و ارسال به والد
            const newValue = event.target.value;
            this.value = newValue;
            this.$emit('update:modelValue', Number(newValue)); // ارسال مقدار به والد
        },
        validate() {
            this.error = '';
            if (this.required && !this.value) {
                this.error = 'This field is required.';
                return;
            }
            if (this.value < 18 || this.value > 100) {
                this.error = 'Value must be between 18 and 100.';
                return;
            }
        },
    },
    watch: {
        modelValue(newValue) {
            this.value = newValue; // همگام‌سازی مقدار در صورت تغییر از والد
        },
    },
};
</script>

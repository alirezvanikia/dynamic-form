<!-- <template>
    <div class="mb-4">
        <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <input :id="name" :type="type" :value="value" @input="onInputChange" :placeholder="placeholder"
            :required="required" :class="inputClasses" @blur="validation" />
        <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    </div>
</template>

<script>
import formConfig from '../views/formConfig.json';

export default {
    props: {
        name: { type: String, required: true },
        label: { type: String, required: true },
        modelValue: { type: [String, Number], required: true },
        placeholder: { type: String, default: '' },
        required: { type: Boolean, default: false },
        type: { type: String, default: "text" },
    },
    data() {
        const initialFormData = {};
        formConfig.fields.forEach((field) => {
            if (field.validation) {
                initialFormData[field.name] = field.validation;
            }
        });

        return {
            value: this.modelValue, // مقدار واردشده توسط کاربر
            error: '', // پیام خطا
            formData: initialFormData, // داده‌های فرم از JSON
        };
    },
    computed: {
        inputClasses() {
            return `mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${this.error ? 'border-red-500' : ''
                }`;
        },
    },
    methods: {
        validation() {
            this.error = ''; // پاک کردن پیام خطا
            const validationData = this.formData[this.name]; // اعتبارسنجی خاص فیلد

            // اعتبارسنجی اجباری بودن
            if (this.required && this.value === '') {
                this.error = 'This field is required';
                return;
            }

            // اگر اعتبارسنجی خاصی برای این فیلد وجود دارد
            if (validationData) {
                const min = validationData.min;
                const max = validationData.max;
                const errorMessage = validationData.errorMessage;

                if (this.value < min || this.value > max) {
                    this.error = errorMessage || `Value slould be between ${min} and ${max}`;
                    return;
                }
            }

            // اگر مقدار معتبر است
            this.$emit('update:modelValue', this.value);
        },
        onInputChange(event) {
            // به‌روزرسانی مقدار داخلی
            this.value = Number(event.target.value); // مقدار همیشه به‌صورت عدد ذخیره می‌شود
            this.$emit('update:modelValue', this.value); // مقدار را به والد ارسال کنید
        },
    },
    // watch: {
    //     modelValue(newValue) {
    //         this.value = newValue; // همگام‌سازی مقدار داخلی با والد
    //     },
    // },
};
</script> -->


<template>
    <div class="mb-4">
        <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <input :id="name" :type="type" :value="value" @input="onInputChange" :placeholder="placeholder"
            :required="required" :class="inputClasses" @blur="validation" />
        <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    </div>
</template>

<script>
import formConfig from '../views/formConfig.json';

export default {
    props: {
        name modelValue
    },
};
</script>

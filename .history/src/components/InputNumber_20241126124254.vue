<template>
    <div class="mb-4">
        <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <input :id="name" type="number" :value="modelValue" @input="onInputChange" :placeholder="placeholder"
            :required="required" :class="inputClasses" @blur="validation(formData['age'])" />
        <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    </div>
</template>

<script>
import formConfig from '../views/formConfig.json';
export default {
    props: {
        name: { type: String, required: true },
        label: { type: String, required: true },
        modelValue: { type: String, required: true },
        placeholder: { type: String, default: '' },
        required: { type: Boolean, default: false },
    },
    data() {
        // مقداردهی اولیه فیلدها
        const initialFormData = [];

        (formConfig.fields).forEach((field) => {
            if(field.validation!=undefined){
                initialFormData[field.name] = field.validation;
            }
        });

    

        return {
            value: this.modelValue, // مقدار واردشده توسط کاربر
            error: '', // پیام خطا
            formExtent: formConfig, // داده‌های فرم از JSON
            formData: initialFormData, // مقدار اولیه فرم
        };
    },
    computed: {
        inputClasses() {
            return `mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${this.error ? 'border-red-500' : ''
            }   `;
        },
    },
    methods: {
        validation(asgar) {
            console.log(asgar.name); 
        },

        onInputChange(event) {
            // ارسال تغییرات به والد از طریق emit
            this.$emit('update:modelValue', event.target.value);
        }
    }
};
</script>
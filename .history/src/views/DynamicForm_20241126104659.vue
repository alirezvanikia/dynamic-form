<template>
    <div class="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h1 class="text-2xl font-bold text-gray-800">{{ formExtent.title }}</h1>
        <p class="text-gray-600 mb-4">{{ formExtent.description }}</p>
        <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- حلقه برای رندر فیلدها -->
            <div v-for="field in formExtent.fields" :key="field.name">
                <InputText v-if="field.name === 'name'" :name="field.name" :type="field.type" :label="field.label"
                    v-model="formData[field.name]" :placeholder="field.placeholder" :required="field.required" />
                <InputEmail v-if="field.name === 'email'" :name="field.name" :label="field.label"
                    v-model="formData[field.name]" :placeholder="field.placeholder" :required="field.required" />
                <InputNumber v-if="field.name === 'age'" :name="field.name" :label="field.label"
                    v-model="formData[field.name]" :placeholder="field.placeholder" :required="field.required" />
                <InputCheckbox v-if="field.name === 'newsletter'" :name="field.name" :label="field.label"
                    v-model="formData[field.name]" :required="field.required" />
            </div>
            <button type="submit"
                class="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import InputText from '../components/InputText.vue';
import InputNumber from '../components/InputNumber.vue';
import InputCheckbox from '../components/InputCheckbox.vue';
import InputEmail from '../components/InputEmail.vue';
import formConfig from './formConfig.json';

export default {
    components: {
        InputText,
        InputNumber,
        InputCheckbox,
        InputEmail,
    },
    data() {
        // مقداردهی اولیه فیلدها
        const initialFormData = {};
        formConfig.fields.forEach((field) => {
            initialFormData[field.name] = field.type === 'checkbox' ? field.default || false : '';
            console.log(field.name);

        });

        return {
            formExtent: formConfig, // داده‌های فرم از JSON
            formData: initialFormData, // مقدار اولیه فرم
        };
    },
    methods: {
        handleSubmit() {
            console.log('Form submitted:', this.formData);
        },
    },
};
</script>
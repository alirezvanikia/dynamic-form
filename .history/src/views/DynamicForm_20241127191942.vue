<template>
    <div class="form-body w-4/12 mx-auto mt-10 p-6 bg-white shadow-md rounded-lg max-lg">
        <h1 class="text-2xl font-bold text-gray-800">{{ formExtent.title }}</h1>
        <p class="text-gray-600 mb-4">{{ formExtent.description }}</p>
        
        <!-- لودر دایره‌ای -->
        <div v-if="isSubmitting" class="fixed  rounded-lg inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div class="loader"></div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- حلقه برای رندر فیلدها -->
            <div v-for="field in formExtent.fields" :key="field.name">
                <InputText v-if="field.name === 'name'" :name="field.name" :type="field.type" :label="field.label"
                    v-model="formData[field.name]" :placeholder="field.placeholder" :required="field.required" />
                <InputEmail v-if="field.name === 'email'" :name="field.name" :type="field.type" :label="field.label"
                    v-model="formData[field.name]" :placeholder="field.placeholder" :required="field.required" />
                <InputNumber v-if="field.name === 'age'" :name="field.name" :type="field.type" :label="field.label"
                    v-model="formData[field.name]" :placeholder="field.placeholder" :required="field.required" />
                <InputCheckbox v-if="field.name === 'newsletter'" :name="field.name" :type="field.type" :label="field.label"
                    v-model="formData[field.name]" :required="field.required" />
            </div>
            <button type="submit"
                class="w-full bg-cyan-800 text-white py-2 px-4 rounded-md shadow-sm hover:bg-cyan-900 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" 
                :disabled="isSubmitting">
                Submit
            </button>

            <!-- نمایش وضعیت ارسال -->
            <div v-if="submissionError" class="text-red-500">{{ submissionError }}</div>
            <div v-if="submissionSuccess" class="text-green-500">Form submitted successfully!</div>
        </form>
    </div>
</template>

<script>
import { useFormStore } from '../stores/formStore'; // import store
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
        });

        return {
            formExtent: formConfig, // داده‌های فرم از JSON
            formData: initialFormData, // مقدار اولیه فرم
        };
    },
    computed: {
        // دریافت وضعیت از store
        isSubmitting() {
            const formStore = useFormStore();
            return formStore.isSubmitting;
        },
        submissionError() {
            const formStore = useFormStore();
            return formStore.submissionError;
        },
        submissionSuccess() {
            const formStore = useFormStore();
            return formStore.submissionSuccess;
        }
    },
    methods: {
        handleSubmit() {
            const formStore = useFormStore();
            formStore.setFormData(this.formData); // ذخیره داده‌ها در Pinia
            formStore.submitForm(); // ارسال داده‌ها به API
        },
    },
};
</script>
<style scoped>
.form-body {
    position: relative;
}
.loader {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #155e75;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.fixed {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
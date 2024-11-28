<template>
    <div class="mb-4 flex">
        <label :for="name" class="block text-sm font-medium text-gray-700 flex-auto order-2">{{ label }}</label>
        <input :id="name" type="checkbox" :value="modelValue" @input="onInputChange" :placeholder="placeholder"
            :required="required" :class="inputClasses" :style="inputStyles" />
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, required: true },
        label: { type: String, required: true },
        modelValue: { type: String, required: true },
        placeholder: { type: String, default: '' },
        required: { type: Boolean, default: false },
    },
    computed: {
        inputClasses() {
            return "flex-initial order-1 block w-full ml-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm";
        },
        inputStyles() {
            return "flex: 0;";
        }
    },
    methods: {
        onInputChange(event) {
            // ارسال تغییرات به والد از طریق emit
            this.$emit('update:modelValue', event.target.value);
        }
    }
};
</script>
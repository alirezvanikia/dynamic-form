<!-- <template>
    <div class="mb-4 flex gap-2">
        <label :for="name" class="block text-sm font-medium text-gray-700 flex-auto order-2">{{ label }}</label>
        <input :id="name" :type="type" :checked="modelValue" @input="onInputChange"
            :required="required" :class="inputClasses" :style="inputStyles" />
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, required: true },
        label: { type: String, required: true },
        modelValue: { type: Boolean, required: true },
        required: { type: Boolean, default: false },
        type: { type: String, default: "checkbox" },
    },
    computed: {
        inputClasses() {
            return "flex-initial order-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:none focus:none focus:none sm:text-sm";
        },
        inputStyles() {
            return "flex: 0;";
        }
    },
    methods: {
        onInputChange(event) {
            // ارسال تغییرات به والد از طریق emit
            this.$emit('update:modelValue', event.target.checked);
        }
    }
};
</script> -->

<template>
    <div class="mb-4 flex gap-2">
        <label :for="name" class="block text-sm font-medium text-gray-700 flex-auto order-2">{{ label }}</label>
        <input :id="name" :type="type" :checked="modelValue" @input="onInputChange" />
    </div>
</template>


<script>
export default {
    props
};
</script>
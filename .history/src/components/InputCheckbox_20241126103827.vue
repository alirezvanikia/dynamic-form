<template>
    <div class="mb-4 flex gap-2">
        <label :for="name" class="block text-sm font-medium text-gray-700 flex-auto order-2">{{ label }}</label>
        <input :id="name" type="checkbox" :value="modelValue" @input="onInputChange" :placeholder="placeholder"
            :required="required" :class="inputClasses" :style="inputStyles" />
    </div>
</template>

<script>
export default {
};
</script>
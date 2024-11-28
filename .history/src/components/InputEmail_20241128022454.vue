<template>
  <div class="mb-4">
    <label :for="name" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input :id="name" :type="type" :value="value" @input="onInputChange" :placeholder="placeholder" :required="required"
      :class="inputClasses" @blur="validation" />
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script>
import formConfig from "../views/formConfig.json";

export default {
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    modelValue: { type: String, required: true },
    placeholder: { type: String, default: "" },
    required: { type: Boolean, default: false },
    type: { type: String, default: "email" },
  },
  /**
   * Putting JSON data into a variable
   * Using a for loop to populate the values for each form.
   * Find fields that have validation
   */
  data() {
    const initialFormData = {};
    formConfig.fields.forEach((field) => {
      if (field.validation) {
        initialFormData[field.name] = field.validation;
      }
    });

    return {
      value: this.modelValue,
      error: "",
      formData: initialFormData,
    };
  },
  computed: {
    inputClasses() {
      return `mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${this.error ? "border-red-500" : ""
        }`;
    },
  },Send the input data to the parent if the input is not empty and the input email matches the regex
  methods: {
        /**
         * Send the input data to the parent if the input is not empty and the input number is within the desired limit
         */
    validation() {
      this.error = "";
      const validationData = this.formData[this.name];

      if (this.required && this.value === "") {
        this.error = "This field is required";
        return;
      }

      if (validationData) {
        const regex = validationData.regex;
        const errorMessage = validationData.errorMessage;
        if (regex) {
          const pattern = new RegExp(regex);
          if (!pattern.test(this.value)) {
            this.error = errorMessage || "Invalid format";
            return;
          }
        }
      }

      this.$emit("update:modelValue", this.value);
    },
    onInputChange(event) {
      this.value = event.target.value;
      this.$emit("update:modelValue", this.value);
    },
  },
  watch: {
    modelValue(newValue) {
      this.value = newValue;
    },
  },
};
</script>

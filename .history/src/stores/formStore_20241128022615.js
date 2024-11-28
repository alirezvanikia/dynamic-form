import { defineStore } from 'pinia';
import axios from 'axios';

export const useFormStore = defineStore({
  id: 'form',
  state: () => ({
    formData: {}, 
    isSubmitting: false,
    submissionError: null,
    submissionSuccess: false, 
  }),
  actions: {
    async submitForm() {
      this.isSubmitting = true; 
      this.submissionError = null;

      try {
        // اضافه کردن تأخیر مصنوعی
        await new Promise((resolve) => setTimeout(resolve, 1500)); // تأخیر 3 ثانیه‌ای

        // ارسال درخواست به API
        const response = await axios.post('https://api.example.com/submit-form', this.formData);

        if (response.status === 200) {
          // در صورت موفقیت
          this.submissionSuccess = true;
        } else {
          this.submissionError = 'There was an issue with the submission.';
        }
      } catch (error) {
        // در صورت خطا
        this.submissionError = 'Error submitting the form: ' + error.message;
      } finally {
        this.isSubmitting = false; // تمام شدن فرآیند ارسال
      }
    },

    setFormData(data) {
      this.formData = data; // ذخیره داده‌های فرم
    }
  }
});

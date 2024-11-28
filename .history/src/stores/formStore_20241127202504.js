import { defineStore } from 'pinia';
import axios from 'axios';

export const useFormStore = defineStore({
  id: 'form',
  state: () => ({
    formData: {}, // داده‌های فرم
    isSubmitting: false, // وضعیت در حال ارسال
    submissionError: null, // خطا در ارسال
    submissionSuccess: false, // وضعیت ارسال موفق
  }),
  actions: {
    async submitForm() {
      this.isSubmitting = true; // در حال ارسال
      this.submissionError = null; // پاک کردن خطاها

      try {
        // اضافه کردن تأخیر مصنوعی
        await new Promise((resolve) => setTimeout(resolve, 1500)); // تأخیر 3 ثانیه‌ای

        // ارسال درخواست به API
        const response = await axios.post('https://api.example.com/submit-form', this.formData);

        if (response.status === 200) {
          // در صورت موفقیت
          this.submissionSuccess = true;
          console.log('try');
          
        } else {
          this.submissionError = 'There was an issue with the submission.';
          console.log('else try');
        }
      } catch (error) {
        // در صورت خطا
        this.submissionError = 'Error submitting the form: ' + error.message;
        console.log('catch');
      } finally {
        this.isSubmitting = false; // تمام شدن فرآیند ارسال

        console.log('else try');
      }
    },

    setFormData(data) {
      this.formData = data; // ذخیره داده‌های فرم
    }
  }
});

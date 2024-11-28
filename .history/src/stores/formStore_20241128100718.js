import { defineStore } from 'pinia';
import formConfig from '../views/formConfig.json';

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
        /**
         * Submits the form data to a specified API endpoint.
         * Handles loading states, error messages, and success feedback.
         */
        async submitForm() {
            this.isSubmitting = true;
            this.submissionError = null;
            console.log(formConfig.apiEndpoint, this.formData);

            try {
                // Simulate a delay (for demonstration/testing purposes)
                await new Promise((resolve) => setTimeout(resolve, 1500));

                const response = await axios.post(config.apiEndpoint, this.formData); // استفاده از لینک API از JSON
                console.log(config.apiEndpoint, this.formData);
                

                if (response.status === 200) {
                    this.submissionSuccess = true;
                } else {
                    this.submissionError = 'There was an issue with the submission.';
                }
            } catch (error) {
                this.submissionError = 'Error submitting the form: ' + error.message;
            } finally {
                this.isSubmitting = false;
            }
        },

        /**
         * Updates the store's formData state with new data.
         * @param {Object} data - The new form data to set in the store.
         */
        setFormData(data) {
            this.formData = data;
        }
    }
});


// import { defineStore } from 'pinia';
// import axios from 'axios';

// export const useFormStore = defineStore({
//     id: 'form',
//     state: () => ({
//         formData: {},
//         isSubmitting: false,
//         submissionError: null,
//         submissionSuccess: false,
//     }),
//     actions: {
//         /**
//          * Submits the form data to a specified API endpoint.
//          * Handles loading states, error messages, and success feedback.
//          */
//         async submitForm() {
//             this.isSubmitting = true;
//             this.submissionError = null;

//             try {
//                 // Simulate a delay (for demonstration/testing purposes)
//                 await new Promise((resolve) => setTimeout(resolve, 1500));

//                 const response = await axios.post('https://jsonplaceholder.typicode.com/posts', this.formData);

//                 if (response.status === 200) {
//                     this.submissionSuccess = true;
//                     console.log('true');
                    
//                 } else {
//                     this.submissionError = 'There was an issue with the submission.';
//                     console.log('true issue');
//                 }
//             } catch (error) {
//                 this.submissionError = 'Error submitting the form: ' + error.message;
//                 console.log('catch');
//             } finally {
//                 this.isSubmitting = false;
//                 console.log('finally');
//             }
//         },

//         /**
//          * Updates the store's formData state with new data.
//          * @param {Object} data - The new form data to set in the store.
//          */
//         setFormData(data) {
//             this.formData = data;
//         }
//     }
// });


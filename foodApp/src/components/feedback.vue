<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div>
      <h2 class="sr-only">Customer Reviews</h2>

      <div class="-my-10">
        <div v-for="feedback in feedbacks" :key="feedback.id" class="flex space-x-4 text-sm text-gray-500">
          <div class="flex-none py-10">
            <img :src="a" alt="" class="h-10 w-10 rounded-full bg-gray-100" />
          </div>
          <div :class="[reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10']">
            <h3 class="font-medium text-gray-900">anonymous</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500"  v-html="feedback.fbMessage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import axios from "axios";

export default {
  name: "feedbacks",
  data() {
    return {
      feedbacks: [],
    };
  },
  methods: {
    getFeedbacks: function () {
      axios
        .get("http://localhost:8000/feedback/feedbackGet")

        .then((response) => {
          this.feedbacks = response.data.CfeeCdback;
          console.log(" reponse", response);
          console.log("response data ",response.data);
          console.log("feedback list ",this.feedbacks);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getFeedbacks();
  },
};
</script>


<template>
  <div class="bg-white">
  <br>
      <h2 class="text-2xl text-orange-400 text-center font-bold">C U S T O M E R  &nbsp;&nbsp; R E V I E W S </h2>
      <br>


      <div class=" h-screen">
        <div v-for="feedback in feedbacks" :key="feedback.id" class="flex space-x-4 text-sm text-gray-500 animate-flip-down">
          <div class="flex-none py-10 ">
            <img src="./assets/avatar.jpg" alt="" class="h-10 w-10 rounded-full ring-red-600 bg-gray-100 animate-fade" />
          </div>
          <div class=" border-t border-orange-400 flex-1 py-10">
            <h3 class="font-medium text-gray-900">{{ feedback.topic }}</h3>
            <div class="prose prose-sm mt-4 max-w-none text-gray-500" /><span v-html="feedback.mfeedback"/>

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

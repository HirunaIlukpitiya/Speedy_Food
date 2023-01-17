<script>
import axios from "axios";
import {Cloudinary} from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "demo",
  },
});
export default {
  mounted() {
    console.log("Page Loaded!");
  },
  data() {
    return {
      name: "",
      category: "",
      cost: "",
      description: "",
      file: "",
    };
  },

  methods: {
    submitForm() {
      axios
        .post("http://localhost:8000/products/food/new", {
          name: this.name,
          category: this.category,
          cost: this.cost,
          description: this.description,
          file : this.file,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.error) {
            this.errors = error.response.data.error;
          }
        });
      this.name = "";
      this.category = "";
      this.cost = "";
      this.description = "";
      this.file = "";
    },
  },
};
</script>

<template>
  <section
    class="max-w-4xl p-6 mx-auto bg-gray-100 rounded-md shadow-md dark:bg-gray-800 mt-20"
  >
    <h1 class="text-xl font-bold text-black capitalize dark:text-white">
      Add Foods
    </h1>
    <form @submit.prevent="submitForm">
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label class="text-black dark:text-gray-200" for="foodName"
            >Name</label
          >
          <input
            v-model ="name"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-black dark:text-gray-200" for="foodPrice"
            >Price</label
          >
          <input
            v-model="cost"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            class="text-black dark:text-gray-200"
            for="passwordConfirmation"
            >Food Type</label
          >
          <select
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          v-model="category">
            <option>mains</option>
            <option>pastry</option>
            <option>dessert</option>
            <option>drinks</option>
          </select>
        </div>
        <div>
          <label
            class="text-black dark:text-gray-200"
            for="passwordConfirmation"
            >Discription</label
          >
          <textarea
            v-model="description"
            type="textarea"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          ></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-black"> Image </label>
          <div
            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
          >
            <div class="space-y-1 text-center">
              <svg
                class="mx-auto h-12 w-12 text-black"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span class="">Upload a file</span>
                  <input
                    id = "file"
                    v-on:change="imageUpload()"
                    type="file"
                    class="sr-only"
                  />
                </label>
              </div>
              <p class="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end mt-6">
        <button className="btn btn-primary"
         type="submit">
          Save
        </button>
      </div>
    </form>
  </section>
  <br /><br />
</template>

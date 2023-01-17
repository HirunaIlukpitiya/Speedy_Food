<script>
import axios from "axios";
import store from "../store";
import Swal from "sweetalert2";
export default {
  name: "Products",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getMenu: function () {
      axios
        .get("http://localhost:8000/products/foods/all")
        .then((response) => {
          console.log(response);
          this.products = response.data.foods;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    Logout() {
      Swal.fire({
        title: "Are you sure?",
        text: "You are going to log out from the system!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "Logged Out!",
            "You have successfully logged out!",
            "success"
          );
          localStorage.removeItem("accessToken");
          store.dispatch("logout");
          this.$router.push("./SignIn");
        }
      });
    },
  },
  beforeMount() {
    store.dispatch("DashboardVisited");
    this.getMenu();
  },
};
</script>
<template>
  <div class="navbar bg-gray-30 text-white-content relative">
    <div className="flex-2">
      <ul class="menu menu-horizontal p-0">
        <li class="nav-item">
          <router-link to="/AddFood" class="nav-link">
            <div
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate">Add Items</span>
            </div>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/order" class="nav-link">
            <div
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate"
                >Orders&nbsp;</span
              >
              <span
                class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full"
                >{{ orderCount }}</span
              >
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/feedback" class="nav-link">
            <div
              class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-sm tracking-wide truncate"
                >Feedbacks&nbsp;</span
              >
              <span
                class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full"
                >{{ feedbackCount }}</span
              >
            </div>
          </router-link>
        </li>
        <div class="float-right">
          <li @click="Logout()">
            <router-link to="" class="nav-link">
              <div
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-white hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Logout</span>
              </div>
            </router-link>
          </li>
        </div>
      </ul>
    </div>
  </div>

  <!--end of navbar-->
  
  <div
    class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-2xl font-bold tracking-tight text-white">ITEM LIST</h2>

    <div
      class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <div v-for="product in products" :key="product.id">
        <div class="group relative">
          <div
            class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
          >
            <img
              :src="product.imageSrc"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-white">
                  <span
                    aria-hidden="true"
                    class="text-sm text-medium text-white"
                  />
                  {{ product.name }}
              </h3>
            </div>
            <p class="text-sm font-medium text-white">{{ product.cost }}</p>
          </div>
        </div>
        <button className="btn btn-primary relative" @click="getFoodId()">
          Edit
        </button>
        <div class="float-right">
          <button className="btn btn-primary relative" @click="getFoodId()">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

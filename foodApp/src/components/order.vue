<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="px-4 sm:px-6 lg:px-8 bg-white h-screen">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <br />
        <h1 class="text-xl font-semibold text-orange-400 font-Bar text-center">
          O R D E R S
        </h1>
        <p class="mt-2 text-sm text-gray-700"></p>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    Customer Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    KDU_ID
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Order Items
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Total Price
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Payment Status
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Order Date
                  </th>
                </tr>
              </thead>
              <tbody
                class="divide-y divide-gray-200 bg-white animate-fade animate-duration-[2000ms]"
              >
                <tr v-for="order in orders" :key="order._id">
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                  >
                    {{ order.CustomerName }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ order.KDU_ID }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <li v-for="item in order.itemList" :key="item._id">
                      {{ item.foodName }} : {{ item.Amount }}
                    </li>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ order.totalprice }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <p v-if="order.isPaid">Completed</p>
                    <p v-else>Payment Pending</p>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                  >
                  <!--
                    <div class="flex items-center">
                      <label
                        class="text-sm text-gray-500 mr-3 dark:text-gray-400"
                        >Processing</label
                      >
                      <input @change="order.isPlaced = !order.isPlaced"

                        type="checkbox"
                        id="readySW"
                        class="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                      />
                      <label
                        class="text-sm text-gray-500 ml-3 dark:text-gray-400"
                        >Ready</label
                      >
                    </div>
                    !-->
                    {{ order.createdAt }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "orders",
  data() {
    return {
      orders: [],
      item: [],
    };
  },
  methods: {
    getOrders: function () {
      axios
        .get("http://localhost:8000/orderDetails/orders")

        .then((response) => {
          this.orders = response.data.orders;
          console.log(response.data);
          console.log(this.orders);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteRow: function () {},
  },
  beforeMount() {
    this.getOrders();
  },
};
</script>

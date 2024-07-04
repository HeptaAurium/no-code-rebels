<template>
  <Nav page="fizzbuzz" breadcrumb="true" />
  <div
    class="solution bg-gray-800 w-10/12 mx-auto min-h-screen py-12 rounded-lg text-white px-6 mb-3"
  >
    <div class="my-3 py-3" id="question">
      QUESTION:
      <div class="flex flex-wrap">
        <div class="italic p-4">
          Write a function: function solution(N); that, given a positive integer
          N, prints the consecutive numbers from 1 to N, each on a separate
          line. However, any number which is a power of 2 should be replaced by
          the word POWER. For example, number 4 should be replaced by POWER, but
          number 5 should not. The function shouldn't return any value.
        </div>
      </div>
    </div>
    <div class="my-3 py-3" id="solution">
      SOLUTION:
      <div class="flex flex-wrap">
        <div class="italic p-4">
          <pre>
            const solution = (n) => {
                for (let i = 1; i <= n; i++) {
                    if ((i & (i - 1)) === 0) {
                        console.log('POWER');
                    } else {
                        console.log(i);
                    }
                }
            };
          </pre>
        </div>
      </div>
    </div>
    <div class="my-3 py-3" id="result">
      TEST:
      <div class="flex flex-wrap">
        <div class="w-full mt-3">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter input"
              v-model="n"
              required
            />
            <button
              @click="solution()"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              DISPLAY SOLUTION
            </button>
          </div>
        </div>

        <div class="flex flex-col text-sm pl-4">
          <span class="mt-1" v-for="(i, k) in lines"> {{ i }} </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Nav from "@/components/header/Main.vue";
import { ref } from "vue";

const n = ref(17);
const lines = ref([]);

const solution = () => {
  lines.value = [];
  for (let i = 1; i <= n.value; i++) {
    if ((i & (i - 1)) === 0) {
      lines.value.push("POWER");
    } else {
      lines.value.push(i);
    }
  }
};
solution();
</script>

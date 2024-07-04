<template>
  <Nav page="cheap-letter-deletion" breadcrumb="true" />
  <div
    class="solution bg-gray-800 w-10/12 mx-auto min-h-screen py-12 rounded-lg text-white px-6 mb-3"
  >
    <div class="my-3 py-3" id="question">
      QUESTION:
      <div class="flex flex-wrap">
        <div class="italic p-4">
          <p>
            You are given a string S. Deletion of the K-th letter of S costs
            C[K]. After deleting a letter, the costs of deleting other letters
            do not change. For example, for S = "ab" and C = [1, 3], after
            deleting 'a', deletion of 'b' will still cost 3. You want to delete
            some letters from S to obtain a string without two identical letters
            next to each other. What is the minimum total cost of deletions to
            achieve such a string?
          </p>
          <p>
            Write a function: <br />
            <code> function solution(S, C); </code> <br />
            that, given string S and array C of integers, both of length N,
            returns the minimum cost of all necessary deletions.
          </p>
        </div>
      </div>
    </div>
    <div class="my-3 py-3" id="solution">
      SOLUTION:
      <div class="flex flex-wrap">
        <div class="italic p-4">
          <pre class="code">
            const solution = (S, C) => {
            const N = S.length;
            let ans = 0;

            for (let i = 0; i + 1 < N; ++i) {
                if (S[i] !== S[i + 1]) continue;
                if (C[i] > C[i + 1]) swap(C, i, i + 1);
                ans += C[i];
            }

            return ans;
            };

            const swap = (arr, i, j) => {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            };
        </pre
          >
        </div>
      </div>
    </div>
    <div class="my-3 py-3" id="result">
      RESULT:
      <div class="w-full mt-3">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div class="grid grid-cols-2 gap-2">
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter String"
              v-model="str"
              required
            />
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Array of items (comma separated)"
              v-model="arr"
              required
            />
          </div>

          <button
            @click="getSoln()"
            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            DISPLAY SOLUTION
          </button>
        </div>
        <div class="flex flex-col text-sm pl-4" v-if="soln != ''">
          <span class="mt-1"> Solution: {{ soln }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Nav from "@/components/header/Main.vue";
import { ref } from "vue";

const soln = ref("");
const str = ref("");
const arr = ref([]);

const getSoln = () => {
  if (str == "" || arr == "") return alert("Please enter valid input");
  arr.value = arr.value.split(",").map((item) => parseInt(item));

  soln.value = solution(str.value, arr.value);
};

// solution
const solution = (S, C) => {
  const N = S.length;
  let ans = 0;

  for (let i = 0; i + 1 < N; ++i) {
    if (S[i] !== S[i + 1]) continue;
    if (C[i] > C[i + 1]) swap(C, i, i + 1);
    ans += C[i];
  }

  return ans;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
</script>

<style lang="scss" scoped></style>

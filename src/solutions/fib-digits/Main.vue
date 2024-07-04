<template>
    <Nav page="fib-digits" breadcrumb="true" />
    <div class="solution bg-gray-800 w-10/12 mx-auto min-h-screen py-12 rounded-lg text-white px-6 mb-3">
        <div class="my-3 py-3" id="question">
            QUESTION:
            <div class="flex flex-wrap">
                <div class="italic p-4">
                    <p>
                        Let's consider the following infinite sequence: <br>
                    <pre>0, 1, 1, 2, 3, 5, 8, 13, 12, 7, 10, 8, 9, ... </pre> <br>
                    The 0th element is 0 and the 1st element is 1. The successive elements are defined recursively. Each
                    of them is the sum of the separate digits of the two previous elements.

                    </p>
                    <p class="mt-3">
                        Write a function: <br />
                        <code> function solution(N); </code> <br />
                        that, given an integer N, returns the N-th element of the above sequence.

                    </p>
                </div>
            </div>
        </div>
        <div class="my-3 py-3" id="solution">
            SOLUTION:
            <div class="flex flex-wrap">
                <div class="italic p-4">
                    <pre class="code">
                        const solution = (N) => {
                        if (N === 0) return 0;
                        if (N === 1) return 1;
                        
                        let prev1 = 1;
                        let prev2 = 0;

                        for (let i = 2; i <= N; i++) {
                            const current = prev1 + prev2;
                            prev2 = prev1;
                            prev1 = current;
                        }

                        return prev1;
                    };
                    </pre>
                </div>
            </div>
        </div>
        <div class="my-3 py-3" id="result">
            RESULT:
            <div class="w-full mt-3">
                <label for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">

                    <input type="search" id="default-search"
                        class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter String" v-model="N" required />


                    <button @click="getSoln()"
                        class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
const N = ref("");


const getSoln = () => {
    if (N == "") return alert("Please enter valid input");
    soln.value = solution(N.value);
};

// solution
const solution = (N) => {
    if (N === 0) return 0;
    if (N === 1) return 1;

    let prev1 = 1;
    let prev2 = 0;

    for (let i = 2; i <= N; i++) {
        const current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
};


</script>

<style lang="scss" scoped></style>

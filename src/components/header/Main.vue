<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link
        to="/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Ngugi K.</span
        >
      </router-link>

      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/solutions/question-one"
              class="block p-2 text-white rounded uppercase"
              :class="{
                'text-blue-700': page == 'fizzbuzz',
              }"
              >FizzBuzz
            </router-link>
          </li>
          <li>
            <router-link
              to="/solutions/question-one"
              class="block p-2 text-white rounded uppercase"
              :class="{
                'text-blue-700': page == 'css-content',
              }"
              >CSS Content Position
            </router-link>
          </li>
          <li>
            <router-link
              to="/solutions/question-three"
              class="block p-2 text-white rounded uppercase"
              :class="{
                'text-blue-700': page == 'cheap-letter-deletion',
              }"
              >Cheap Letter Deletion
            </router-link>
          </li>
          <li>
            <router-link
              to="/solutions/question-four"
              class="block p-2 text-white rounded uppercase"
              :class="{
                'text-blue-700': page == 'fib-digits',
              }"
              >FIB DIGITS
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="my-3 fixed z-[9999] top-20 right-28" v-if="breadcrumb">
    <nav
      class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li class="inline-flex items-center">
          <a
            href="#question"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            Question
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <i class="fa fa-angle-right text-gray-400" aria-hidden="true"></i>
            <a
              href="#solution"
              class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >SOLUTION</a
            >
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <i class="fa fa-angle-right text-gray-400" aria-hidden="true"></i>
            <a
              href="#result"
              class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >RESULT</a
            >
          </div>
        </li>
      </ol>
    </nav>
  </div>
</template>
<script setup>
const props = defineProps({
  page: {
    type: String,
  },
  breadcrumb: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="w-10/12 mx-auto min-h-screen py-12">
    <section class="bg-transparent">
      <div
        class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12"
      >
        <h1
          class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          My name is Ngugi K, Michael
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          This small application was spun up in reponse to challenges presented
          to me by Grady Anderson as the first step towards joining No-code
          Rebels.
        </p>

        <div
          class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36"
        >
          <span class="font-semibold text-gray-400 uppercase"
            >TECHNOLOGIES USED FOR THIS PLATFORM</span
          >
          <div class="grid grid-cols-3 gap-3 mt-8 text-gray-500">
            <a
              href="#"
              class="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img
                class="h-[120px] w-auto"
                src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
                alt=""
              />
            </a>
            <a
              href="#"
              class="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img
                class="h-[120px] w-auto"
                src="https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png"
                alt=""
              />
            </a>
            <a
              href="#"
              class="mb-5 mr-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
            >
              <img
                class="h-[120px] w-auto"
                src="https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-transparent pt-3">
      <h3 class="text-gray-200 mb-3">LINKS TO SOLUTIONS</h3>
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >QUESTION ONE</time
          >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            FIZZBUZZ
          </h3>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            Write a function that, given a positive integer N, prints the
            consecutive numbers from 1 to N, each on a separate line. However,
            any number which is a power of 2 should be replaced by the word
            POWER.
          </p>
          <router-link
            to="/solutions/question-one"
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >View Solution
          </router-link>
        </li>
        <li class="mb-10 ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >March 2022</time
          >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Marketing UI design in Figma
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li class="ms-4">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <time
            class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >April 2022</time
          >
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li>
      </ol>
    </section>
  </div>
</template>

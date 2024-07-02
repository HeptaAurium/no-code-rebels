<template>
  <footer class="bg-gray-800 relative">
    <div class="mx-auto w-full p-4 py-6 lg:py-8 xl:px-10">
      <div class="md:flex md:justify-between">
        <div class="mb-2 lg:mb-6 md:mb-0">
          <a href="https://astutewriters.com/" class="flex items-center">
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Ngugi K.</span
            >
          </a>
        </div>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://www.linkedin.com/in/ngugikiarie"
            target="_blank"
            class="text-gray-400 hover:text-white"
          >
            <i class="fab fa-linkedin" aria-hidden="true"></i>

            <span class="sr-only">Linkedin page</span>
          </a>
          <a
            href="mailto:kiariedev@gmail.com"
            target="_blank"
            class="text-gray-400 hover:text-white"
          >
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span class="sr-only">Email Address</span>
          </a>
          <a
            href="https://www.github.com/HeptaAurium/"
            target="_blank"
            class="text-gray-400 hover:text-white"
          >
            <i class="fab fa-github" aria-hidden="true"></i>

            <span class="sr-only">Github</span>
          </a>
          <a
            href="https://gitlab.com/ngugikiarie_"
            target="_blank"
            class="text-gray-400 hover:text-white"
          >
            <i class="fab fa-gitlab" aria-hidden="true"></i>
            <span class="sr-only">Gitlab</span>
          </a>
          <a
            href="https://wa.me/c/+254747613491"
            target="_blank"
            class="text-gray-400 hover:text-white"
          >
            <i class="fab fa-whatsapp" aria-hidden="true"></i>
            <span class="sr-only">WhatsApp</span>
          </a>
          <a
            href="tel:+254747613491"
            target="_blank"
            class="text-gray-400 hover:text-white"
          >
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span class="sr-only">Call/Text</span>
          </a>
        </div>
      </div>

      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div
        class="sm:flex sm:items-center sm:justify-between sm:flex-col lg:flex-row"
      >
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
          >© {{ year }}
          Prepared in completion of tasks by Nocode Rebels
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style lang="scss" scoped></style>

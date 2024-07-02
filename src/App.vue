<template>
  <router-view :key="$route.path"></router-view>
  <FooterView />
</template>

<script setup>
import FooterView from "@/components/footer/Main.vue"

</script>
